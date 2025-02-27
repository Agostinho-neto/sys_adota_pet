import gestorService from '../services/gestor.service.js';

async function getGestores(req, res, next) {
  try {
    res.send(await gestorService.getGestores());
  } catch (err) {
    next(err);
  }
}

async function getGestor(req, res, next) {
  try {
    res.send(await gestorService.getGestor(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteGestor(req, res, next) {
  try {
    await gestorService.deleteGestor(req.params.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

export default {
  // createGestor,
  getGestores,
  deleteGestor,
  getGestor,
};
// async function createGestor(req, res, next) {
//   try {
//     let gestor = req.body;
//     if (
//       !gestor.nome ||
//       !gestor.idade ||
//       !gestor.descricao ||
//       !gestor.url_imagem
//     ) {
//       throw new Error(
//         'Nome, idade, descrição, url da imagem e data são obrigatórios'
//       );
//     }
//     //clientService

//     res.send(await gestorService.createGestor(gestor));
//   } catch (err) {
//     next(err);
//   }
// }
