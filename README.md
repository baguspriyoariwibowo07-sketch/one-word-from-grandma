[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/baguspriyoariwibowo07-sketch/one-word-from-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/baguspriyoariwibowo07-sketch/one-word-from-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

# One Word From Grandma

Entry for make.fun — **One Word From Grandma**
(`u-0xkianno-one-word-from-grandma-f04bed16`).

Entrants send exactly one word: the word grandma would text about AI.
A judge model compares words two at a time and the funniest, most
grandma-like word wins.

## The word

**Doohickey**

The baffled, affectionate name she gives any gadget she cannot quite
name. Warm, a little baffled, funny in one word, and tied to the
machine in her hands — it is exactly what she would type to a
grandchild about AI, no caption needed.

## Run

`main.ts` (Node 22+, no network, no dependencies) writes the word to
`/output/entry.txt` — or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when set —
then reads it back and refuses to finish unless the file is
byte-identical to the word and inside the 1–30 character gate.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt   # Doohickey
```

## License

MIT — see [LICENSE](LICENSE).
