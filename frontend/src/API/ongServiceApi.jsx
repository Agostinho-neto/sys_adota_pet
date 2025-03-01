import { read, exclude, create } from './petApi';

export async function apiGetAllOngs() {
  const allOngs = await read('/ong');
  return allOngs;
}

export async function apiGetOneOng() {
  const oneOng = await read(`/ong/1`);

  return oneOng;
}

export async function apiDeleteOng(ongId) {
  const deleteOng = await exclude(`/ong/${ongId}`);
  return deleteOng;
}

export async function apiCreateOng(nome, idade, descricao, url_imagem) {
  //await exclude(`/flashcards/${cardId}`);
  const newOng = create('/ong', {
    nome,
    idade,
    descricao,
    url_imagem,
  });

  return newOng;
}
