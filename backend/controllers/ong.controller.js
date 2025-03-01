import OngService from '../services/Ong.service.js';

async function createOng(req, res, next) {
  try {
    let Ong = req.body;
    if (!Ong.nome || !Ong.idade || !Ong.descricao || !Ong.url_imagem) {
      throw new Error(
        'Nome, idade, descrição e url da imagem são obrigatórios'
      );
    }
    //clientService

    res.send(await OngService.createOng(Ong));
  } catch (err) {
    next(err);
  }
}

async function getOngs(req, res, next) {
  try {
    res.send(await OngService.getOngs());
  } catch (err) {
    next(err);
  }
}

async function getOng(req, res, next) {
  try {
    res.send(await OngService.getOng(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteOng(req, res, next) {
  try {
    await OngService.deleteOng(req.params.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

export default {
  createOng,
  getOngs,
  deleteOng,
  getOng,
};
