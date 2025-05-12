const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/videos/raw');
const outputDir = path.join(__dirname, '../public/videos');

// Create directories if they don't exist
if (!fs.existsSync(inputDir)) fs.mkdirSync(inputDir, { recursive: true });
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const optimizeVideo = (inputFile) => {
    const filename = path.basename(inputFile, path.extname(inputFile));
    const outputFile = path.join(outputDir, `${filename}.mp4`);
    const posterFile = path.join(outputDir, `${filename}_poster.jpg`);

    // FFmpeg command for video optimization
    const videoCmd = `ffmpeg -i "${inputFile}" \
        -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
        -c:v libx264 -preset slow -crf 22 \
        -c:a aac -b:a 128k \
        -movflags +faststart \
        -y "${outputFile}"`;

    // FFmpeg command for poster image
    const posterCmd = `ffmpeg -i "${inputFile}" \
        -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
        -vframes 1 -y "${posterFile}"`;

    console.log(`Optimizing ${filename}...`);

    // Execute commands
    exec(videoCmd, (error) => {
        if (error) {
            console.error(`Error processing video: ${error}`);
            return;
        }
        console.log(`Successfully optimized ${filename}`);

        // Generate poster image
        exec(posterCmd, (error) => {
            if (error) {
                console.error(`Error generating poster: ${error}`);
                return;
            }
            console.log(`Generated poster for ${filename}`);
        });
    });
};

// Process all videos in the input directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.match(/\.(mp4|mov|avi|wmv|flv|mkv)$/i)) {
            optimizeVideo(path.join(inputDir, file));
        }
    });
}); 