#!/usr/bin/env node
/**
 * Build wrapper that makes local builds match Cloudflare builds.
 *
 * Cloudflare's build system reads [vars] from wrangler.toml. A local
 * `astro build` does not read that file at all, so the two produce different
 * sites from the same commit — and the difference is silent. That is how this
 * site shipped for months with no analytics: the value existed conceptually
 * but reached neither build.
 *
 * Declaring the value twice (wrangler.toml for Cloudflare, .env for local)
 * would work until the two drift, and .env is gitignored, so a fresh checkout
 * quietly loses it. Instead this reads the same [vars] Cloudflare reads and
 * puts them in the environment before invoking astro.
 *
 * Existing environment wins, so a preview can still override a value without
 * editing the committed config.
 */
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Minimal [vars] reader — deliberately not a TOML parser.
 *
 * It handles exactly what this block is allowed to contain: KEY = "value"
 * pairs of build-time strings. Anything richer (arrays, nested tables,
 * multi-line strings) is out of scope on purpose, so the failure mode is a
 * value that is obviously missing rather than one that is subtly wrong.
 */
function readWranglerVars(tomlPath) {
  let toml;
  try {
    toml = readFileSync(tomlPath, 'utf8');
  } catch {
    return {};
  }

  const section = /^\s*\[vars\]\s*$/m.exec(toml);
  if (!section) return {};

  const rest = toml.slice(section.index + section[0].length);
  // Stop at the next top-level table header.
  const end = /^\s*\[[^\]]+\]\s*$/m.exec(rest);
  const body = end ? rest.slice(0, end.index) : rest;

  const vars = {};
  for (const line of body.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const m = /^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*"([^"]*)"\s*$/.exec(trimmed);
    if (m) vars[m[1]] = m[2];
  }
  return vars;
}

const vars = readWranglerVars(resolve(root, 'wrangler.toml'));
const applied = [];
for (const [key, value] of Object.entries(vars)) {
  if (process.env[key] === undefined) {
    process.env[key] = value;
    applied.push(key);
  }
}

if (applied.length) {
  console.log(`[build] loaded from wrangler.toml [vars]: ${applied.join(', ')}`);
}

const result = spawnSync('npx', ['astro', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
});
process.exit(result.status ?? 1);
