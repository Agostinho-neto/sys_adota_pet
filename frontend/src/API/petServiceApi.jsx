import { read, exclude, create, update } from './petApi';

export async function apiGetAllPets() {
  const allPets = await read('/pet');
  return allPets;
}

export async function apiGetOnePet(petId) {
  const onePet = await read(`/pet/${petId.id}`);

  return onePet;
}

export async function apiDeletePet(petId) {
  const deletePet = await exclude(`/pet/${petId}`);
  return deletePet;
}

export async function apiCreatePet(nome, idade, descricao, url_imagem) {
  //await exclude(`/flashcards/${cardId}`);
  const newPet = create('/pet', {
    nome,
    idade,
    descricao,
    url_imagem,
  });

  return newPet;
}

export async function updatePetStatus(pet_Id) {
  //await exclude(`/flashcards/${cardId}`);
  const newPet = update('/pet', {
    pet_id: pet_Id,
  });

  return newPet;
}
