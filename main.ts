// Entry program for the make.fun bounty "post-x-the-agent-builds-a-game-from-20261122-1709"
// ("The agent builds a game from one prompt").
//
// The entry is the X post itself: a short video of an AI coding agent building a tiny
// browser game from one prompt while its owner watches. This program only hands the
// grader the post's address, by copying POST.json from the repository root into the
// output directory. That is everything it has to do.
//
// Node 22, standard library only. No network access, no wall clock, no files outside
// the repository. The two runs of an entry write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const srcPath = join(BOT_DIR, "POST.json");

// POST.json must be a JSON object carrying the post's address as a string.
const raw = readFileSync(srcPath, "utf8");
const parsed: unknown = JSON.parse(raw);
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  throw new Error('POST.json must be a JSON object with a string "url" field');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, "POST.json");
copyFileSync(srcPath, outPath);

// Prove the copy landed intact: the grader reads /output/POST.json, so a
// partial copy must fail loudly here instead of passing silently.
if (readFileSync(outPath, "utf8") !== raw) {
  throw new Error("POST.json copy to the output directory differs from the source");
}
