/**
 * Image Optimization Script
 * Converts all PNG/JPG/JPEG images in src/assets/ to compressed WebP format.
 * Also generates tiny blur placeholders for each image.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, '..', 'src', 'assets');
const OUTPUT_DIR = join(__dirname, '..', 'src', 'assets', 'optimized');
const PLACEHOLDER_DIR = join(__dirname, '..', 'src', 'assets', 'placeholders');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const MAX_WIDTH = 1200; // Max width for gallery/factory images
const QUALITY = 75; // WebP quality (0-100)
const PLACEHOLDER_WIDTH = 20; // Tiny blur placeholder

async function optimizeImages() {
  // Create output directories
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(PLACEHOLDER_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter((f) => {
    const ext = extname(f).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });

  console.log(`\n🖼️  Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const nameWithoutExt = basename(file, extname(file));
    const outputPath = join(OUTPUT_DIR, `${nameWithoutExt}.webp`);
    const placeholderPath = join(PLACEHOLDER_DIR, `${nameWithoutExt}_placeholder.webp`);

    try {
      const originalStat = await stat(inputPath);
      const originalSize = originalStat.size;
      totalOriginal += originalSize;

      // Optimize to WebP
      await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      // Generate blur placeholder (tiny 20px wide)
      await sharp(inputPath)
        .resize({ width: PLACEHOLDER_WIDTH })
        .webp({ quality: 20 })
        .blur(2)
        .toFile(placeholderPath);

      const optimizedStat = await stat(outputPath);
      const optimizedSize = optimizedStat.size;
      totalOptimized += optimizedSize;

      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      console.log(
        `  ✅ ${file} → ${nameWithoutExt}.webp  (${formatBytes(originalSize)} → ${formatBytes(optimizedSize)}, -${reduction}%)`
      );
    } catch (err) {
      console.error(`  ❌ Failed: ${file} — ${err.message}`);
    }
  }

  // Also optimize logo separately with higher quality
  const logoPath = join(INPUT_DIR, 'logo.png');
  try {
    await sharp(logoPath)
      .resize({ width: 200, withoutEnlargement: true })
      .webp({ quality: 90, lossless: false })
      .toFile(join(OUTPUT_DIR, 'logo.webp'));
    console.log(`  ✅ logo.png → logo.webp (high quality)`);
  } catch (err) {
    console.error(`  ❌ Logo optimization failed: ${err.message}`);
  }

  console.log(`\n📊 Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalOptimized)}`);
  console.log(`   Saved: ${formatBytes(totalOriginal - totalOptimized)} (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)\n`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

optimizeImages();
