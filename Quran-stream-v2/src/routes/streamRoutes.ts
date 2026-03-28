import { Router } from 'express';
import { streamAudio, getAudioList } from '../controllers/streamController';

const router = Router();

// Route to stream audio
router.get('/stream/:sheikh/:chapter', streamAudio);

// Route to get list of audio files
router.get('/audio-list/:sheikh', getAudioList);

export default router;