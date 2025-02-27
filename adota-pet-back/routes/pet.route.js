import express from 'express';
import petController from '../controllers/pet.controller.js';

const router = express.Router();

router.post('/', petController.createPet);
router.get('/', petController.getPets);
router.get('/:id', petController.getPet);
router.delete('/:id', petController.deletePet);
router.put('/', petController.updatePetStatus);

export default router;
