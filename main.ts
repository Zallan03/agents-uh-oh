// The Agent's Uh-Oh — entry for u-danu-the-agent-s-uh-oh-4c0911e4
// One word an agent says when it has no idea what to do.
// Chosen word: "recalculating" — the machine's own voice when lost.
// A GPS says it aloud the moment it loses the route; an agent blurting it
// mid-task is a machine caught out, stalling honestly, in its own words.
// It lands at a glance, it is repeatable out loud, and it is not the
// first obvious word anyone types (no "uh-oh", no "oops", no "error").
import { mkdirSync, writeFileSync } from "node:fs";

const word = "recalculating";

// Keep the gate honest in-program: one word, 1-99 chars, no whitespace.
if (!/^\S{1,99}$/.test(word)) {
  throw new Error("entry must be a single word of 1-99 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
