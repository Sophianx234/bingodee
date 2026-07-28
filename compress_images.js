const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directory = path.join(__dirname, 'public', 'imgs', 'products');

async function processImages() {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
      
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      // If file is larger than 500KB
      if (stat.size > 500 * 1024) {
        console.log(`Processing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
        
        const tempPath = path.join(directory, `temp_${file}`);
        
        await sharp(filePath)
          .resize(800, 800, {
            fit: sharp.fit.inside,
            withoutEnlargement: true
          })
          .jpeg({ quality: 80, progressive: true })
          .toFile(tempPath);
          
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        console.log(`Optimized ${file}`);
      }
    }
    console.log('Finished processing all images.');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
