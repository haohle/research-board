# Whiteboard Kanban

A research tool that runs in the browser. Put PDFs on a whiteboard, highlight passages as you read, turn each highlight into a card, then switch to a kanban view and sort the cards into columns and priorities. (The page itself is titled Marginalia.)

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone https://github.com/haohle/whiteboard-kanban.git
cd whiteboard-kanban
npm install
npm start
```

Then open http://localhost:8080/. To use another port: `PORT=3000 npm start`.

`sample/commons-of-attention.pdf` is a short text you can drag onto the board to try it out.

## How to use it

- **Whiteboard:** drag PDFs onto the board (or use *Add PDF*). Drag nodes to arrange them, drag the background to pan, and use Ctrl/⌘ + scroll or the +/- buttons to zoom. *New note* adds a free note.
- **Highlight:** click *Read & highlight* on a PDF, select text, pick a color and choose *Save as card*. The card keeps the quote, the source and the page. *Show in PDF* on a card jumps back to the passage.
- **Kanban:** use the toggle at the top. Drag cards between columns and priority lanes, rename or add columns, and filter by source. Each card's ••• menu sets column, priority and color, and edits the text and your own note.
- **Backup:** *Export* downloads everything (cards, columns and the PDFs themselves) as one `.json` file. *Import* merges a backup back in, which is how you move a board to another computer.

## Where your data lives

Everything is stored in your own browser (IndexedDB) for the address you use, so `http://localhost:8080` and `http://localhost:3000` have separate boards. Nothing is uploaded anywhere. Clearing site data for that address deletes the board, so export a backup now and then.

## How it is built

- `src/index.html` is the whole app: one file of HTML, CSS and JavaScript with no framework.
- `npm run build` copies it to `dist/` along with the two PDF.js files it needs from `node_modules/pdfjs-dist` (version 3.11.174).
- `scripts/serve.mjs` is a small static server for `dist/`. You can serve `dist/` from any static host instead, as long as it is served from the site root (the PDF.js files are loaded from `/pdfjs-3.11.174/`).
- Fonts load from Google Fonts. Without a connection the app falls back to system fonts.

## Limits

- Works in current Chrome, Edge, Firefox and Safari.
- Very large boards (hundreds of megabytes of PDFs) may be too big for a single *Export* file.
- Scanned PDFs without a text layer can be viewed but not highlighted.
