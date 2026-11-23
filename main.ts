// Entry for make.fun's "Six Words, One Story" bounty.
// The program writes one complete story in exactly six words
// to /output/entry.txt.
//
// The story: a wife taught the parrot her husband's laugh. He is
// gone, but his laugh lives on in the bird — death and grief are
// never spelled out; the reader fills them in.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "Taught the parrot her husband's laugh.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
