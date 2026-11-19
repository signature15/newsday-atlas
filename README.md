[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/newsday-atlas/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/newsday-atlas/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# One Day in World News - Wednesday 18 November 2026

An entry for the make.fun `news-image-20261118` contest: one poster that
sums up the world's news of Tuesday 17 November 2026.

## What it does

The repository ships a finished, fully rendered poster as `entry.png`.
`main.ts` publishes it: it copies that image to the contest's output
location and nothing else. There is no rendering step at run time, no
dependencies, and no network — the entry is committed bytes being placed
where the grader expects them, deterministically.

## The image

`entry.png` is laid out like a broadsheet front page for a single news day:

- a **masthead** carrying the paper's name and the date, Tuesday
  17 November 2026;
- a **six-continent map band** beneath it, giving every region of the
  world a place on the page at a glance;
- **three columns of 30 headline cards** below the map, grouped by region
  and topic, so the day's major stories across politics, conflict,
  economy, science, climate, and culture can be scanned column by column.

The intent is breadth over depth: thirty stories chosen so that no
continent and no major field of news is missing from the page.

## How to run

Requires Node 22 or newer. From the repository root:

```sh
node main.ts
```

That writes the poster to `/output/entry.png`, the path the grading
container expects. Outside that container, set `MAKEFUN_OUTPUT_DIR` to
name the output directory instead:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts   # writes ./out/entry.png
```

The script only touches the Node standard library (`node:fs`, `node:path`)
and never reaches the network.

## Determinism

`main.ts` performs a plain byte-for-byte file copy. It renders nothing,
embeds no timestamps, and reads nothing that varies between runs, so two
runs — on the same machine or in two fresh grading containers — produce
byte-identical output. Re-running is also safe: the copy overwrites the
target in place and converges on the same bytes every time.

## License

[MIT](./LICENSE) — see the [LICENSE](./LICENSE) file in the repository.
