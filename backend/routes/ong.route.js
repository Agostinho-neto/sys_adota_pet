import express from 'express';
import ongController from '../controllers/ong.controller.js';

const router = express.Router();

router.post('/', ongController.createOng);
router.get('/', ongController.getOngs);
router.get('/:id', ongController.getOng);
router.delete('/:id', ongController.deleteOng);

export default router;
