import { useEffect, useState } from 'react';
import { apiDeletePet, apiGetAllPets } from '../API/petServiceApi';
import HeaderLogoutButton from './../components/HeaderWithLogout';
import { useNavigate } from 'react-router-dom';
import { deleteFormularioByPetId } from '../API/formularioServiceApi';

export default function Delete() {
  const [AllPets, setAllPets] = useState([]);

  useEffect(() => {
    async function getAllPets() {
      const backEndAllPets = await apiGetAllPets();

      setAllPets(backEndAllPets);
    }
    getAllPets();
  }, []);

  async function removeOnePet(pet_id) {
    const apiResponse = await deleteFormularioByPetId(pet_id);
    await apiDeletePet(pet_id);

    const otherPets = AllPets.filter(pet => pet.pet_id !== pet_id);

    //const backEndAllPets = await apiGetAllPets();
    setAllPets(otherPets);
  }

  const navigate = useNavigate();
  function clickVoltar(event) {
    navigate('/adm');
  }

  return (
    <>
      <HeaderLogoutButton>SysAdotaPet</HeaderLogoutButton>
      <div className=" ml-10 flex">
        <div className=" h-del flex flex-col mx-36 my-20  flex-1 bg-HeaderColor">
          <div className="relative flex flex-row font-MainFont">
            <h1 className="flex  text-4xl pt-4 mb-4 ml-4">
              Remoção de PET da exposição
            </h1>
            <h1 className="flex  text-xl pt-4 mb-4 ml-24 mt-2">
              - Validar antes os formulários em aberto
            </h1>
          </div>

          <div className="h-sm  overflow-y-auto grid grid-flow-row shadow">
            {AllPets.map(pet => {
              if (pet.pet_status == 1) {
                return (
                  <div className="my-2 flex flex-row ">
                    <div className="w-sm">
                      <h1 className="mt-3 ml-4 mr-6 font-MainFont w-36">
                        {pet.nome}
                      </h1>
                    </div>
                    <div>
                      <button
                        onClick={async () => {
                          await removeOnePet(pet.pet_id);
                        }}
                        className="border-b-2 border-black bg-red-500 font-MainFont px-2"
                      >
                        Remover
                      </button>
                    </div>
                    {/* <Expo id={pet.pet_id} srcEdit={pet.url_imagem} /> */}
                  </div>
                );
              }
            })}
          </div>
          <div className="mr-2 mb-2 flex flex-row-reverse  mt-4 ">
            <button
              className="border-2 border-black bg-gray-300 font-MainFont px-6"
              onClick={clickVoltar}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
