// One Word From Grandma — make.fun entry
// Writes the single word grandma would text about AI to entry.txt.
// The word: the baffled, affectionate name she gives any gadget she
// cannot quite name — warm, funny, and unmistakably grandma-voiced.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Doohickey";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
