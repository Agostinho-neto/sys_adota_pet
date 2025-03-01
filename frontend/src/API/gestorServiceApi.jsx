import { read, exclude, create } from './petApi';

export async function apiGetAllGestores() {
  const allGestores = await read('/Gestor');
  return allGestores;
}

export async function apiGetOneGestor(GestorId) {
  const oneGestor = await read(`/Gestor/${GestorId.id}`);

  return oneGestor;
}

export async function apiDeleteGestor(GestorId) {
  const deleteGestor = await exclude(`/Gestor/${GestorId}`);
  return deleteGestor;
}

export async function apiCreateGestor(nome, idade, descricao, url_imagem) {
  //await exclude(`/flashcards/${cardId}`);
  const newGestor = create('/Gestor', {
    nome,
    idade,
    descricao,
    url_imagem,
  });

  return newGestor;
}
