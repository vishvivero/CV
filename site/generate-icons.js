/*
 * Script to generate PNG icons from SVG files
 * 
 * To use this script, run:
 * cd site
 * npm install sharp
 * node generate-icons.js
 *
 * This will generate the following files:
 * - apple-touch-icon.png (180x180)
 * - pwa-192x192.png (192x192)
 * - pwa-512x512.png (512x512)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/public');
const svgPath = path.join(publicDir, 'favicon.svg');

// Icon sizes to generate
const sizes = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'pwa-192x192.png', size: 192 },
  { name: 'pwa-512x512.png', size: 512 }
];

async function generateIcons() {
  console.log('Reading SVG file...');
  const svgBuffer = fs.readFileSync(svgPath);
  
  for (const { name, size } of sizes) {
    console.log(`Generating ${name} (${size}x${size})...`);
    
    const outputPath = path.join(publicDir, name);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Created ${outputPath}`);
  }
  
  console.log('All icons generated successfully!');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
}); 