# Video Optimization Script

This script helps optimize videos for web use by:
1. Converting videos to MP4 format with H.264 encoding
2. Optimizing video quality and file size
3. Generating poster images for better loading performance
4. Standardizing video dimensions to 1920x1080 while maintaining aspect ratio

## Prerequisites

1. Install Node.js from https://nodejs.org/
2. Install FFmpeg:
   - Windows: Download from https://ffmpeg.org/download.html and add to system PATH
   - Mac: `brew install ffmpeg`
   - Linux: `sudo apt-get install ffmpeg`

## Usage

1. Create a `public/videos/raw` directory in your project
2. Place your original video files in the `raw` directory
3. Run the script:
   ```bash
   node scripts/optimize-videos.js
   ```
4. Optimized videos and poster images will be saved in `public/videos`

## Output

The script will:
- Convert videos to MP4 format with H.264 encoding
- Generate a poster image for each video
- Maintain aspect ratio while fitting within 1920x1080
- Optimize audio to 128kbps AAC
- Enable fast start for quicker playback

## Video Settings

- Resolution: 1920x1080 (maintains aspect ratio with letterboxing/pillarboxing)
- Video Codec: H.264 with CRF 22 (high quality, reasonable file size)
- Audio Codec: AAC 128kbps
- Container: MP4 with faststart flag

## Supported Input Formats

- MP4
- MOV
- AVI
- WMV
- FLV
- MKV 