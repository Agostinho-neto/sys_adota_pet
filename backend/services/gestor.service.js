import gestorRepository from '../repositories/gestor.repository.js';

async function getGestores() {
  return await gestorRepository.getGestores();
}

async function getGestor(id) {
  return await gestorRepository.getGestor(id);
}

async function deleteGestor(id) {
  return await gestorRepository.deleteGestor(id);
}

// async function createGestor(gestor) {
//   return await gestorRepository.insertGestor(gestor);
// }

export default {
  // createGestor,
  getGestores,
  deleteGestor,
  getGestor,
};
