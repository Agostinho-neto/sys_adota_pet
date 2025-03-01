import express from 'express';
import gestorController from '../controllers/gestor.controller.js';

const router = express.Router();

router.get('/', gestorController.getGestores);
router.get('/:id', gestorController.getGestor);
router.delete('/:id', gestorController.deleteGestor);

// router.post('/', gestorController.createGestor);
export default router;
