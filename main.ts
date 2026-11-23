// One Word From Grandma — make.fun entry
// Writes the single word grandma would text about AI to entry.txt.
// The word: the baffled, affectionate name she gives any gadget she
// cannot quite name — warm, funny, and unmistakably grandma-voiced.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Doohickey";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, WORD, "utf8");

// Runtime gate: the entry must be exactly one word — read the file
// back and refuse to finish unless it is byte-identical to the word.
const written = readFileSync(outFile, "utf8");
if (written !== WORD) {
  throw new Error(`entry mismatch: wrote ${JSON.stringify(written)}`);
}
if (written.length < 1 || written.length > 30 || !written.trim()) {
  throw new Error("entry fails the 1-30 character gate");
}
