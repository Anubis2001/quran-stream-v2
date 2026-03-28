// This file contains the audio service logic for handling Quran audio streams.

import fs from 'fs';
import path from 'path';

class AudioService {
    private baseDir: string;

    constructor() {
        this.baseDir = path.join(__dirname, '../../quran');
    }

    public getAudioFiles(sheikh: string, chapter: string): string[] {
        const dirPath = path.join(this.baseDir, sheikh, chapter);
        if (!fs.existsSync(dirPath)) {
            throw new Error(`Directory not found: ${dirPath}`);
        }
        return fs.readdirSync(dirPath).filter(file => file.endsWith('.mp3'));
    }

    public getAudioFilePath(sheikh: string, chapter: string, fileName: string): string {
        const filePath = path.join(this.baseDir, sheikh, chapter, fileName);
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        return filePath;
    }
}

export default new AudioService();