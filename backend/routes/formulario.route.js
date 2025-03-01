import express from 'express';
import formularioController from '../controllers/formulario.controller.js';

const router = express.Router();

router.post('/', formularioController.createFormulario);
router.get('/', formularioController.getFormularios);
router.get('/:id', formularioController.getFormulario);
router.delete('/:id', formularioController.deleteFormularioByPetId);
router.put('/adota', formularioController.updateFormularioAdota);
router.put('/desiste', formularioController.updateFormularioDesiste);
router.put(
  '/removeadotado',
  formularioController.updateFormularioCanceladoAdocao
);

export default router;
