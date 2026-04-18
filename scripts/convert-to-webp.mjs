/**
 * convert-to-webp.mjs
 * Converts all JPG/PNG/JPEG images in public/images (recursively) to WebP.
 * - Outputs .webp files alongside originals
 * - Prints a size-savings summary
 * - Does NOT delete originals (run with --delete flag to remove them after conversion)
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs           # convert only
 *   node scripts/convert-to-webp.mjs --delete  # convert + delete originals
 */

import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMAGE_DIR = join(ROOT, "public", "images");
const DELETE_ORIGINALS = process.argv.includes("--delete");

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png"]);

// ANSI colours
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

/** Recursively collect all image files under a directory */
async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (SUPPORTED_EXTS.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

/** Format bytes to human-readable string */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  console.log(bold("\n🖼  WebP Batch Converter"));
  console.log(dim(`   Source directory: ${IMAGE_DIR}\n`));

  const images = await collectImages(IMAGE_DIR);

  if (images.length === 0) {
    console.log(yellow("⚠  No convertible images found."));
    process.exit(0);
  }

  console.log(`Found ${bold(images.length)} image(s) to process...\n`);

  let totalOriginalBytes = 0;
  let totalWebpBytes = 0;
  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const srcPath of images) {
    const ext = extname(srcPath).toLowerCase();
    const webpPath = srcPath.slice(0, -ext.length) + ".webp";
    const relSrc = srcPath.replace(ROOT, "").replace(/\\/g, "/");
    const relWebp = webpPath.replace(ROOT, "").replace(/\\/g, "/");

    try {
      const originalStat = await stat(srcPath);
      const originalSize = originalStat.size;

      // Convert to WebP
      await sharp(srcPath)
        .webp({ quality: 85, effort: 6 }) // quality 85 = great balance, effort 6 = better compression
        .toFile(webpPath);

      const webpStat = await stat(webpPath);
      const webpSize = webpStat.size;

      const saved = originalSize - webpSize;
      const pct = ((saved / originalSize) * 100).toFixed(1);

      totalOriginalBytes += originalSize;
      totalWebpBytes += webpSize;
      converted++;

      const savings =
        saved > 0
          ? green(`-${formatBytes(saved)} (${pct}%)`)
          : yellow(`+${formatBytes(Math.abs(saved))} (${pct}%)`);

      console.log(
        `  ${green("✓")} ${basename(srcPath).padEnd(30)} ${dim(formatBytes(originalSize))} → ${dim(formatBytes(webpSize))}  ${savings}`
      );
      console.log(`    ${dim(`${relSrc} → ${relWebp}`)}`);

      if (DELETE_ORIGINALS) {
        await unlink(srcPath);
        console.log(`    ${red("🗑  Deleted original")}`);
      }
    } catch (err) {
      failed++;
      console.log(`  ${red("✗")} ${basename(srcPath)}  ${red(err.message)}`);
    }
  }

  // --- Summary ---
  const totalSaved = totalOriginalBytes - totalWebpBytes;
  const totalPct = ((totalSaved / totalOriginalBytes) * 100).toFixed(1);

  console.log("\n" + "─".repeat(60));
  console.log(bold("📊 Summary"));
  console.log(`   Converted : ${green(converted)}`);
  if (skipped) console.log(`   Skipped   : ${yellow(skipped)}`);
  if (failed) console.log(`   Failed    : ${red(failed)}`);
  console.log(`   Before    : ${formatBytes(totalOriginalBytes)}`);
  console.log(`   After     : ${formatBytes(totalWebpBytes)}`);
  console.log(
    `   Saved     : ${green(formatBytes(totalSaved))} ${green(`(${totalPct}%)`)}`
  );

  if (!DELETE_ORIGINALS) {
    console.log(
      yellow(
        "\n⚠  Originals kept. Run with --delete flag to remove them after verifying the site."
      )
    );
  }

  console.log("\n✅ Done!\n");
}

main().catch((err) => {
  console.error(red(`Fatal: ${err.message}`));
  process.exit(1);
});
