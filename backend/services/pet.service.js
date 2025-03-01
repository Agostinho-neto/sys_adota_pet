import petRepository from '../repositories/pet.repository.js';

async function createPet(pet) {
  return await petRepository.insertPet(pet);
}

async function getPets() {
  return await petRepository.getPets();
}

async function getPet(id) {
  return await petRepository.getPet(id);
}

async function deletePet(id) {
  return await petRepository.deletePet(id);
}

async function updatePetStatus(petStatus) {
  return await petRepository.updatePetStatus(petStatus);
}

export default {
  createPet,
  getPets,
  deletePet,
  getPet,
  updatePetStatus,
};
