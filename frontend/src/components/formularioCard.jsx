import React from 'react';

export default function FormularioCard({
  nome_completo = 'Nome default',
  telefone = '111111111',
  email = '',
  cidade = '',
  estado = '',
  pet_id,
  formulario_id,
  nome = '',
  onClickAdotou,
  onClickDesistiu,
}) {
  function adotouPet() {
    onClickAdotou(pet_id, formulario_id);
  }
  function desistiuPet() {
    onClickDesistiu(pet_id, formulario_id);
  }

  return (
    <div className="shadow-2xl m-4 flex flex-col  bg-red-400 ">
      <div className="flex flex-col">
        <div className="flex flex-row mt-2">
          <div className="w-fe flex justify-end mr-10">
            <label>Nome do tutor:</label>
          </div>
          <div>{nome_completo}</div>
        </div>

        <div className="flex flex-row">
          <div className="w-fe flex justify-end mr-10">
            <label>Contato:</label>
          </div>
          <div>{telefone}</div>
        </div>
        <div className="flex flex-row">
          <div className="w-fe flex justify-end mr-10">
            <label>Email:</label>
          </div>
          <div>{email}</div>
        </div>
        <div className="flex flex-row">
          <div className="w-fe flex justify-end mr-10">
            <label>Cidade/Estado:</label>
          </div>
          <div>
            {cidade}/{estado}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-fe flex justify-end mr-10">
            <label>Id/Nome do Pet:</label>
          </div>
          <div>
            {pet_id} / {nome}
          </div>
        </div>
      </div>
      <div className="gap-10 flex justify-center mb-2 mt-3">
        <button
          onClick={desistiuPet}
          className="border-b-2 border-black bg-red-500 font-MainFont px-2"
        >
          Desistiu/Inadequado
        </button>
        <button
          onClick={adotouPet}
          className="border-b-2 border-black bg-green-500 font-MainFont px-1"
        >
          Adotou
        </button>
      </div>
    </div>
  );
}
