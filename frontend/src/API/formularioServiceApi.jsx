import { read, exclude, create, update } from './petApi';

export async function apiGetAllformularios() {
  const allformularios = await read('/formulario');
  return allformularios;
}

export async function apiGetOneformulario(formularioId) {
  const oneformulario = await read(`/formulario/${formularioId.id}`);

  return oneformulario;
}

export async function deleteFormularioByPetId(pet_id) {
  const deleteformulario = await exclude(`/formulario/${pet_id}`);
  return deleteformulario;
}

export async function apiCreateformulario(
  nome_completo,
  idade,
  estado_civil,
  profissao,
  endereco,
  bairro,
  cidade,
  estado,
  cep,
  telefone,
  email,
  adota_razao,
  pet_id,
  ciente
) {
  //await exclude(`/flashcards/${cardId}`);
  const newformulario = create('/formulario', {
    nome_completo,
    idade,
    estado_civil,
    profissao,
    endereco,
    bairro,
    cidade,
    estado,
    cep,
    telefone,
    email,
    adota_razao,
    pet_id,
    ciente,
  });

  return newformulario;
}

export async function updateFormularioAdota(pet_id, formulario_id) {
  //await exclude(`/flashcards/${cardId}`);
  const newformulario = update('/formulario/adota', {
    pet_id,
    formulario_id,
  });

  return newformulario;
}
export async function updateFormularioCanceladoAdocao(pet_id, formulario_id) {
  //await exclude(`/flashcards/${cardId}`);
  const newformulario = update('/formulario/removeadotado', {
    pet_id,
    formulario_id,
  });

  return newformulario;
}
export async function updateFormularioDesiste(formulario_id) {
  //await exclude(`/flashcards/${cardId}`);
  const newformulario = update('/formulario/desiste', {
    formulario_id,
  });

  return newformulario;
}
