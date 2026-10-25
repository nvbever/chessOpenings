# Opening Studio

An interactive opening trainer for White and Black. Select an opening, then click a piece and its destination. Before each move the app lists every included variation compatible with the moves played so far. Click a variation to reveal its next move and explanation; this does not lock you to that line. Any move from a remaining variation is accepted. On the computer’s turn, review the branches and press “Play computer’s move”: the computer follows the revealed variation, or randomly chooses a remaining line if none is selected. Legal moves outside the included repertoire trigger a correction with an explanation and a choice to restart or continue. You can select a variation to choose which correction to apply. Illegal moves are rejected. The board rotates for Black.

## Development

Requires Node.js 20.19+ or 22.12+ (validated with Node 24).

```sh
npm ci
npm run dev -- --port 5173
```

```sh
npm test
npm run build
```

The app runs entirely in the browser: no account, credentials, backend, or external database is required. `src/openings.js` contains 35 curated lines across seven openings, playable from either side. It can be extended with legal SAN move sequences and educational notes. Tests play every complete line from both sides and check correction behavior.

Feedback explains why the expected move fits the selected variation; it does not claim that every alternative is objectively bad. The London System includes six setups, including Jobava branches. The Caro–Kann includes 19 representative lines: Advance (Short, Tal, Van der Wiel, Bayonet, Botvinnik–Carls and 3…e6), Classical, Karpov, Bronstein–Larsen, Tartakower, Exchange, Panov, Accelerated Panov, Fantasy, Two Knights, Hillbilly, Breyer, King’s Indian Attack and Gurgenidze. This is not all possible chess variations; continuations are finite and matched by exact move order, not transposed positions. Ended lines are marked complete while longer matching lines remain available. Engine analysis, a comprehensive opening database, saved progress, and spaced repetition are future enhancements. Optional Google Fonts have system fallbacks.
