import formularioRepository from '../repositories/formulario.repository.js';

async function createFormulario(formulario) {
  const checkIfEmailandIdExists =
    await formularioRepository.getFormularioByPetIdEmail(
      formulario.email,
      formulario.pet_id
    );
  if (checkIfEmailandIdExists.length > 0)
    throw new Error('Já existe formulário para esse Pet');
  return await formularioRepository.insertFormulario(formulario);
}

async function getFormularios() {
  return await formularioRepository.getFormularios();
}

async function getFormulario(id) {
  return await formularioRepository.getFormulario(id);
}

async function deleteFormularioByPetId(pet_id) {
  return await formularioRepository.deleteFormularioByPetId(pet_id);
}

async function updateFormularioAdota(formulario) {
  return await formularioRepository.updateFormularioAdota(formulario);
}

async function updateFormularioDesiste(formulario) {
  return await formularioRepository.updateFormularioDesiste(formulario);
}

async function updateFormularioCanceladoAdocao(formulario) {
  return await formularioRepository.updateFormularioCanceladoAdocao(formulario);
}

export default {
  createFormulario,
  getFormularios,
  deleteFormularioByPetId,
  getFormulario,
  updateFormularioAdota,
  updateFormularioDesiste,
  updateFormularioCanceladoAdocao,
};
