import { join } from 'node:path';
/**
 * newsday-atlas — entrypoint for the make.fun news-image contest
 * (news-image-20261118).
 *
 * The image this program publishes is entry.png: a cream newsprint
 * broadsheet covering a single day of world news, Wednesday 18 November
 * 2026. The page is organised the way a real paper's front sheet is:
 *
 *   - a masthead with a date tab under it, so the day the page belongs
 *     to is the first thing a reader meets;
 *   - 30 stories laid out in time bands, following the day from its
 *     first bulletins through to its last rather than by subject;
 *   - a day-in-numbers strip that distils the date into a row of
 *     countable figures;
 *   - the lead stories given the widest play, as a paper would give
 *     them;
 *   - a region grid so every part of the world has its own slot on the
 *     page;
 *   - shorter evening briefs to close the day out;
 *   - a sources footer recording where the day's reporting came from.
 *
 * The program itself is the smallest possible publisher: it copies the
 * already-rendered entry.png to the contest's output path and does
 * nothing else. In the grading container that path is fixed at
 * /output/entry.png; anywhere else the MAKEFUN_OUTPUT_DIR environment
 * variable names the target directory, e.g.
 * MAKEFUN_OUTPUT_DIR=./out node main.ts writes ./out/entry.png.
 *
 * Determinism: the program is a byte-for-byte copy — it renders
 * nothing, stamps no timestamps, and reads nothing that varies between
 * runs, so every run converges on identical bytes, and re-running
 * simply overwrites the target in place. No network is involved: the
 * image is fully finished and committed to the repository.
 *
 * Source resolution uses new URL('./entry.png', import.meta.url),
 * anchoring the input to this module's own directory so the process
 * cwd never matters.
 *
 * Runtime: Node 22+, Node standard library only. Run with `node main.ts`.
 */

import { copyFileSync } from "node:fs";
// /output inside the grading container; MAKEFUN_OUTPUT_DIR stands in for
// it anywhere else.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Anchored to this module's directory, so the process cwd never matters.
copyFileSync(new URL("./entry.png", import.meta.url), join(outputDir, "entry.png"));
