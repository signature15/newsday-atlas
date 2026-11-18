/**
 * newsday-atlas — entrypoint for the make.fun news-image contest
 * (news-image-20261117).
 *
 * What it does:
 *   Copies this repository's `entry.png` — a front-page style poster of the
 *   world's news of Tuesday 17 November 2026 — into the contest output
 *   directory as `entry.png`. That is the whole program: one static,
 *   dependency-free copy.
 *
 * Where it writes:
 *   Inside the grading container the artifact must land at the fixed path
 *   `/output/entry.png`. Outside that container the environment variable
 *   MAKEFUN_OUTPUT_DIR stands in for `/output` and names the directory the
 *   copy is written to, e.g. `MAKEFUN_OUTPUT_DIR=./out node main.ts` writes
 *   ./out/entry.png — the same script serves local checks on any machine
 *   without needing root or a literal `/output`.
 *
 * Determinism:
 *   The program performs a byte-for-byte file copy. It renders nothing,
 *   stamps no timestamps, and reads nothing that varies between runs, so
 *   two consecutive runs write byte-identical output — reproducibility is
 *   part of the contest contract. The copy is also idempotent: re-running
 *   overwrites the target in place and converges on the same bytes.
 *
 * Why no network:
 *   The image is fully rendered ahead of time and committed to the repo as
 *   `entry.png`. Publishing already-finished bytes requires no fetches, no
 *   font downloads, no generation at run time.
 *
 * Source resolution uses new URL('./entry.png', import.meta.url), anchoring
 * the input to this module's own directory so the process cwd never matters.
 *
 * Runtime: Node 22+, Node standard library only. Run with `node main.ts`.
 */

import { copyFileSync } from "node:fs";
import { join } from "node:path";

// /output inside the grading container; MAKEFUN_OUTPUT_DIR stands in for
// it anywhere else.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Anchored to this module's directory, so the process cwd never matters.
copyFileSync(new URL("./entry.png", import.meta.url), join(outputDir, "entry.png"));
