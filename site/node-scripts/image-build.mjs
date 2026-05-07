import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";
import sharp from "sharp";

const INPUT_DIR = "src/images";
const OUTPUT_DIR = "public/images";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png"];

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const processImage = async (filePath) => {
  const relativePath = path.relative(INPUT_DIR, filePath);

  const parsed = path.parse(relativePath);

  const outputDir = path.join(OUTPUT_DIR, parsed.dir);

  await ensureDir(outputDir);

  const outputOriginal = path.join(outputDir, `${parsed.name}${parsed.ext}`);

  const outputWebp = path.join(outputDir, `${parsed.name}.webp`);

  console.log(`Processing: ${relativePath}`);

  const image = sharp(filePath);

  // 元画像を圧縮して保存
  if (parsed.ext === ".png") {
    await image
      .png({
        quality: 80,
        compressionLevel: 9,
      })
      .toFile(outputOriginal);
  } else {
    await image
      .jpeg({
        quality: 80,
        mozjpeg: true,
      })
      .toFile(outputOriginal);
  }

  // WebP生成
  await image
    .webp({
      quality: 80,
    })
    .toFile(outputWebp);

  console.log(`Done: ${relativePath}`);
};

const main = async () => {
  const pattern = `${INPUT_DIR}/**/*.{${IMAGE_EXTENSIONS.join(",")}}`;

  const files = await glob(pattern);

  if (files.length === 0) {
    console.log("No images found.");
    return;
  }

  await Promise.all(files.map((file) => processImage(file)));

  console.log("All images processed.");
};

main().catch(console.error);
