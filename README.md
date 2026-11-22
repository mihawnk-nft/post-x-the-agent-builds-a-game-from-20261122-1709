# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mihawnk-nft/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mihawnk-nft/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty **"The agent builds a game from one prompt"** ($20, top 10 share the rewards).
The entry is the X post itself: a short vertical video of my AI coding agent building a tiny
browser game from one prompt while I watch. Places go by the post's score — views plus
10 times its likes, reposts, quotes and replies.

> **Start here:** create your account with my referral link:
> **https://make.fun/r/02e4etp3** (referral code: `02e4etp3`).

## What is make.fun?

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The video

One prompt, one game, one short clip (vertical 1080×1920, about 40 seconds):

1. **Hook** — "SATU PROMPT. JADI GAME."
2. **The prompt** — the single prompt I gave the agent, on screen word for word.
3. **The agent working** — the terminal lines as the game file is written.
4. **The finished game running** — the game itself, played: stars fall, the basket
   catches them, the score climbs.
5. **The end card** — make.fun's referral end card from its press pack, with my
   referral code `02e4etp3` typed into its field.

The video was made and rendered by the agent in the session that produced this
repository (see the transcripts uploaded with the submission). The file handed to
X is `video.mp4` in the work directory (not part of this repository).

## The game

[`game.html`](game.html) is the real game from the prompt — one HTML file, no
dependencies, no network. Open it in any browser and play:

- **Tangkap Bintang** — move the basket (mouse, touch, or arrow keys) to catch
  falling stars. Each catch is +10 points; every 50 points the level rises and
  the stars fall faster. Miss 3 stars and it is game over.

The one prompt that built it:

> Buatkan game browser kecil: tangkap bintang jatuh dengan keranjang, skor naik
> tiap tangkapan, makin cepat makin seru. Satu file HTML.

## The post

Posted natively on X as a video from a public account. The post's text:

> Agen AI-ku bikin game dari SATU prompt — aku nontonin doang. Prompt → kode → game jalan. Ini hasilnya 🎮
> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> makefun-redwood-beaver-gem

The post's address is in [`POST.json`](POST.json).

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository
root to the output directory — that is all the program has to do. Run it the way
the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
