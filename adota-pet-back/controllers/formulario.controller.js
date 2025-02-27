import FormularioService from '../services/Formulario.service.js';

async function createFormulario(req, res, next) {
  try {
    let Formulario = req.body;
    if (
      !Formulario.nome_completo ||
      !Formulario.idade ||
      !Formulario.estado_civil ||
      !Formulario.profissao ||
      !Formulario.endereco ||
      !Formulario.bairro ||
      !Formulario.cidade ||
      !Formulario.estado ||
      !Formulario.cep ||
      !Formulario.telefone ||
      !Formulario.email ||
      !Formulario.adota_razao ||
      !Formulario.pet_id ||
      Formulario.ciente === false
    ) {
      throw new Error('Todos os campos são obrigatórios');
    }
    //clientService

    res.send(await FormularioService.createFormulario(Formulario));
  } catch (err) {
    next(err);
  }
}

async function getFormularios(req, res, next) {
  try {
    res.send(await FormularioService.getFormularios());
  } catch (err) {
    next(err);
  }
}

async function getFormulario(req, res, next) {
  try {
    res.send(await FormularioService.getFormulario(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteFormularioByPetId(req, res, next) {
  try {
    await FormularioService.deleteFormularioByPetId(req.params.id);
    res.send('Todos os formulários enviados para esse Pet foram deletados!');
  } catch (err) {
    next(err);
  }
}

async function updateFormularioAdota(req, res, next) {
  try {
    let formulario = req.body;
    formulario = await FormularioService.updateFormularioAdota(formulario);
    res.send(formulario);
  } catch (err) {
    next(err);
  }
}

async function updateFormularioDesiste(req, res, next) {
  try {
    let formulario = req.body;
    formulario = await FormularioService.updateFormularioDesiste(formulario);
    res.send(formulario);
  } catch (err) {
    next(err);
  }
}

async function updateFormularioCanceladoAdocao(req, res, next) {
  try {
    let formulario = req.body;
    formulario = await FormularioService.updateFormularioCanceladoAdocao(
      formulario
    );
    res.send(formulario);
  } catch (err) {
    next(err);
  }
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
