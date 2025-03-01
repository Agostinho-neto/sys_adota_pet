import petService from '../services/pet.service.js';

async function createPet(req, res, next) {
  try {
    let pet = req.body;
    if (!pet.nome || !pet.idade || !pet.descricao || !pet.url_imagem) {
      throw new Error(
        'Nome, idade, descrição e url da imagem são obrigatórios'
      );
    }
    //clientService

    res.send(await petService.createPet(pet));
  } catch (err) {
    next(err);
  }
}

async function getPets(req, res, next) {
  try {
    res.send(await petService.getPets());
  } catch (err) {
    next(err);
  }
}

async function getPet(req, res, next) {
  try {
    res.send(await petService.getPet(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deletePet(req, res, next) {
  try {
    await petService.deletePet(req.params.id);

    res.end();
  } catch (err) {
    next(err);
  }
}

async function updatePetStatus(req, res, next) {
  try {
    let petStatus = req.body;
    petStatus = await petService.updatePetStatus(petStatus);
    res.send(petStatus);
  } catch (err) {
    next(err);
  }
}

export default {
  createPet,
  getPets,
  deletePet,
  getPet,
  updatePetStatus,
};
