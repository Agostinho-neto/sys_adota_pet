import OngRepository from '../repositories/Ong.repository.js';
async function createOng() {
  return await OngRepository.insertOng();
}

async function getOngs() {
  return await OngRepository.getOngs();
}

async function getOng(id) {
  return await OngRepository.getOng(id);
}

async function deleteOng(id) {
  return await OngRepository.deleteOng(id);
}

export default {
  createOng,
  getOngs,
  deleteOng,
  getOng,
};
