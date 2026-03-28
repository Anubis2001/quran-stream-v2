import { Router } from 'express';
import streamRoutes from './streamRoutes';

const router = Router();

// Use stream routes
router.use('/stream', streamRoutes);

export default router;