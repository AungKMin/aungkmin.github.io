# aungkmin.github.io

Personal portfolio site, built with [React](https://react.dev), [Material UI](https://mui.com) and [Vite](https://vite.dev), deployed to GitHub Pages.

## Requirements

Node 24 (the version in `.nvmrc`). With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
npm install
```

## Available scripts

### `npm run dev`

Starts the dev server at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### `npm run build`

Builds the production bundle into `dist/`.

### `npm run preview`

Serves the built `dist/` folder locally, to check a production build before deploying.

### `npm test`

Runs the [Vitest](https://vitest.dev) suite once. Use `npx vitest` for watch mode.

### `npm run deploy`

Builds and publishes `dist/` to the `gh-pages` branch via [gh-pages](https://github.com/tschaub/gh-pages).

## Notes on styling

Styles use [tss-react](https://docs.tss-react.dev)'s `makeStyles`, which is the maintained
replacement for the `makeStyles` API that Material UI removed in v5.

`src/theme.js` intentionally pins a handful of Material UI v4 defaults (breakpoint values,
`text.secondary`, `background.default`, `IconButton` padding, `Chip` line-height and the
`body` typography). These keep the rendered site identical to the pre-v9 version. Note that
v4's `breakpoints.down(key)` meant "below the *next* breakpoint", so every `down()` call site
uses a key one step higher than the old code did.

Routing uses `HashRouter`, so URLs look like `/#/about` and `/#/projects`.
