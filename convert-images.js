const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function convertPngToWebp(filePath) {
  const webpPath = filePath.replace(/\.png$/i, '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);

    console.log(`✅ Converted: ${path.relative(__dirname, filePath)} → ${path.relative(__dirname, webpPath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
    return false;
  }
}

async function findAndConvertImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await findAndConvertImages(filePath);
    } else if (file.toLowerCase().endsWith('.png')) {
      // Convert PNG files to WebP
      await convertPngToWebp(filePath);
    }
  }
}

// Run the conversion
console.log('🔄 Starting PNG to WebP conversion...');
findAndConvertImages(publicDir)
  .then(() => {
    console.log('🎉 Image conversion completed!');
  })
  .catch(error => {
    console.error('❌ Conversion failed:', error);
    process.exit(1);
  });