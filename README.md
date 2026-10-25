# Opening Studio

An interactive opening trainer for White and Black. Select an opening and variation, then click a piece and its destination. The opponent replies automatically. Legal moves outside the selected line trigger a correction with a repertoire explanation, and a choice to restart or continue with the expected move. Illegal moves are rejected. The board rotates for Black.

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

The app runs entirely in the browser: no account, credentials, backend, or external database is required. `src/openings.js` contains 12 curated variations across six openings, playable from either side. It can be extended with legal SAN move sequences and educational notes. Tests play every complete line from both sides and check correction behavior.

Feedback explains why the expected move fits the selected variation; it does not claim that every alternative is objectively bad. Engine analysis, a comprehensive opening database, saved progress, and spaced repetition are future enhancements. Optional Google Fonts have system fallbacks.
