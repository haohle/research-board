// Copies src/index.html and the PDF.js files it needs into dist/.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const pdfjs = path.join(root, 'node_modules', 'pdfjs-dist', 'build');

rmSync(dist, { recursive: true, force: true });
mkdirSync(path.join(dist, 'pdfjs-3.11.174'), { recursive: true });
cpSync(path.join(root, 'src', 'index.html'), path.join(dist, 'index.html'));
for (const f of ['pdf.min.js', 'pdf.worker.min.js']) {
  cpSync(path.join(pdfjs, f), path.join(dist, 'pdfjs-3.11.174', f));
}
console.log('Built dist/');
