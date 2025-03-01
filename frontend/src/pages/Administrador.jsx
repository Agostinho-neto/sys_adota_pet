import React, { useEffect, useState } from 'react';
import { apiGetOneOng } from '../API/ongServiceApi';
import HeaderLogoutButton from './../components/HeaderWithLogout';
import { useNavigate } from 'react-router-dom';
import {
  apiGetAllformularios,
  updateFormularioAdota,
  updateFormularioCanceladoAdocao,
  updateFormularioDesiste,
} from '../API/formularioServiceApi';
import FormularioCard from './../components/formularioCard';
import { updatePetStatus } from '../API/petServiceApi';

export default function Administrador() {
  const [oneOng, setOneOng] = useState([]);
  const [allFormularios, setAllFormularios] = useState([]);

  useEffect(() => {
    async function bringOneOng(ongId) {
      const backEndOneOng = await apiGetOneOng(ongId);

      setOneOng(backEndOneOng);
    }
    bringOneOng();
  }, []);

  useEffect(() => {
    async function getAllFormularios() {
      try {
        const backEndAllFormularios = await apiGetAllformularios();

        setAllFormularios(backEndAllFormularios);
      } catch (error) {
        console.log(error);
      }
    }
    getAllFormularios();
  }, []);

  const navigate = useNavigate();

  function clickCadastrar(event) {
    navigate('/gerenciar');
  }

  function clickRemover(event) {
    navigate('/deletar');
  }

  function adotouPet(pet_id, formulario_id) {
    console.log(typeof pet_id);
    console.log(formulario_id);
    updatePetStatus(pet_id);
    updateFormularioCanceladoAdocao(pet_id, formulario_id);
    updateFormularioAdota(pet_id, formulario_id);

    const formularioFiltered = allFormularios.filter(
      formulario => formulario.pet_id !== pet_id
    );
    console.log(formularioFiltered);
    setAllFormularios(formularioFiltered);
  }
  function desistiuPet(pet_id, formulario_id) {
    console.log(pet_id);
    console.log(formulario_id);
    updateFormularioDesiste(formulario_id);
    const formularioFiltered = allFormularios.filter(
      formulario => formulario.formulario_id !== formulario_id
    );
    console.log(formularioFiltered);
    setAllFormularios(formularioFiltered);
  }

  console.log(oneOng);
  return (
    <>
      <HeaderLogoutButton>SysAdotaPet</HeaderLogoutButton>
      <div className="font-MainFont ">
        <div className="gap-10 mt-14 mx-10 flex flex-row h-sm">
          <div className=" flex-1 bg-HeaderColor">
            <div className="  flex flex-col">
              <div className=" text-7xl flex justify-center my-6 py-10">
                {oneOng.nome_social}
              </div>
              <div className="text-xl my-9 ml-56">
                <div className="flex flex-row  my-3 ">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Data de adesão:</label>
                  </div>
                  <div>
                    <div>{oneOng.data_criacao}</div>
                  </div>
                </div>
                <div className="flex flex-row  my-3 ">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Email do responsável:</label>
                  </div>
                  <div>
                    <div>{oneOng.email}</div>
                  </div>
                </div>
                <div className="flex flex-row  my-3 ">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Contato:</label>
                  </div>
                  <div>
                    <div>{oneOng.telefone}</div>
                  </div>
                </div>
                <div className="flex flex-row  my-3 ">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Documento:</label>
                  </div>
                  <div>
                    <div>{oneOng.cnpj}</div>
                  </div>
                </div>
                <div className="flex flex-row  my-3">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Endereço:</label>
                  </div>
                  <div>
                    <div>{oneOng.rua}</div>
                  </div>
                </div>
                <div className="flex flex-row  my-3 ">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Cidade/Estado:</label>
                  </div>
                  <div>
                    <div>
                      {oneOng.cidade}/{oneOng.estado}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row  my-3 ">
                  <div className="w-sm flex justify-end  mr-16">
                    <label>Id da Ong:</label>
                  </div>
                  <div>
                    <div>{oneOng.ong_id}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-32 mt-20">
                <button
                  className="border-b-2 border-black bg-red-500 font-MainFont px-2"
                  onClick={clickRemover}
                >
                  Remover PET
                </button>
                <button
                  className="border-b-2 border-black bg-green-500 font-MainFont px-2"
                  onClick={clickCadastrar}
                >
                  Cadastrar PET
                </button>
              </div>
            </div>
          </div>
          <div className=" flex-1 bg-HeaderColor">
            <div className="h-sm  overflow-y-auto overflow-x-hidden grid grid-cols-2">
              {allFormularios.map(form => {
                if (form.status === 1) {
                  return (
                    <FormularioCard
                      nome_completo={form.nome_completo}
                      telefone={form.telefone}
                      email={form.email}
                      cidade={form.cidade}
                      estado={form.estado}
                      pet_id={form.pet_id}
                      formulario_id={form.formulario_id}
                      nome={form.nome}
                      onClickAdotou={adotouPet}
                      onClickDesistiu={desistiuPet}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
