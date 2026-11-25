// One Word From Your Ex — "Almost".
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) exactly one word an ex would use to describe you, (2) makes
// the judge laugh out loud through surprise or a sharp turn, (3) stings
// with recognition because it is painfully true, (4) lands instantly with
// no explanation and no swappable synonym, (5) relatable — a word people
// repeat because they have lived it too.
//
// Candidates: Toxic, Annoying, Selfish, Placeholder, Practice, Almost,
// Interim, Draft, Unfinished, Expired, Rehearsal, Unsubscribed.
//
// Why Almost wins:
// - Criterion 1: a real verdict word an ex says about a partner they once
//   had — "he was almost the one." Not an insult, a verdict.
// - Criterion 2: the sharpest turn in the pool. The field will be full of
//   insults (toxic, selfish, annoying) and clever labels (placeholder,
//   practice, draft). Almost is neither: the laugh comes from the quiet
//   reframe — the ex's whole verdict on you, the entire relationship,
//   summed up in one small word. It lands harder than any insult because
//   it does not attack you, it dismisses the whole thing.
// - Criterion 3: it stings because it is painfully true and the entrant
//   plainly knows it — almost good enough, almost the one, almost loved
//   properly. That is the most painful ex verdict there is.
// - Criterion 4: lands instantly, needs no explanation; "nearly" or
//   "close" would lose the edge entirely.
// - Criterion 5: everyone has been an almost, or dated one. Relatable
//   in the exact way the brief wants.
// - Tie-break: 6 bytes — the shortest strong candidate in the pool.
// Rejected runners-up: Placeholder (concrete and cold, but the obvious
// clever pick — the clever-label cluster will be crowded); Practice
// ("you were just practice" stings, but reads as a setup needing the
// rest of the sentence); Interim (sharp, but corporate-bureaucratic and
// a beat slower to land). Rejected modal: Toxic, Annoying, Selfish —
// the field's centre, where entries go to lose.
//
// Gate: exactly 1 word, 6 characters (limit 1-24). No punctuation.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Almost`;

// Competition gate: the entry must be exactly one word of 1-24
// characters. Fail loudly instead of writing an invalid entry if ENTRY
// is ever edited past the limit or gains whitespace.
const MAX_CHARS = 24;
if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS || /\s/.test(ENTRY)) {
  throw new Error(`entry must be one word of 1-${MAX_CHARS} chars, got ${JSON.stringify(ENTRY)}`);
}
console.error(`entry: ${ENTRY.length} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
