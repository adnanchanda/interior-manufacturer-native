const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = 'C:/Users/adnan/newlucky/src/assets';
const outDir = path.join(dir, 'optimized');
const phDir = path.join(dir, 'placeholders');
const imgs = [
  '3_head_multi_boring.PNG',
  'fifty_ton_cold_press.PNG',
  'homag_automatic_edge.PNG',
  'precised_craftsmanship.PNG',
  'precised_craftsmanship2.PNG'
];

async function run() {
  for (const i of imgs) {
    const inp = path.join(dir, i);
    const n = path.basename(i, path.extname(i));
    await sharp(inp).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 75 }).toFile(path.join(outDir, n + '.webp'));
    await sharp(inp).resize({ width: 20 }).webp({ quality: 20 }).blur(2).toFile(path.join(phDir, n + '_placeholder.webp'));
    const os = fs.statSync(inp).size;
    const ns = fs.statSync(path.join(outDir, n + '.webp')).size;
    console.log(i + ': ' + (os / 1024 | 0) + 'KB -> ' + (ns / 1024 | 0) + 'KB (-' + ((1 - ns / os) * 100).toFixed(1) + '%)');
  }
  console.log('Done!');
}

run().catch(e => console.error(e));
