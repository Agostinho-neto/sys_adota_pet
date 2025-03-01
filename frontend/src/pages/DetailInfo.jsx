import { useState, useEffect } from 'react';
import { apiGetOnePet } from '../API/petServiceApi';

import { useParams, useNavigate } from 'react-router-dom';
import HeaderLoginButton from './../components/HeaderWithLogin';

export default function DetailInfo() {
  const params = useParams();

  const [onePet, setOnePet] = useState([]);

  useEffect(() => {
    async function bringOnePet(params) {
      const backEndOnePet = await apiGetOnePet(params);

      setOnePet(backEndOnePet);
    }
    bringOnePet(params);
  });

  const navigate = useNavigate();
  function clickMain(event) {
    navigate('/');
  }
  function clickForm(event) {
    navigate('/formulario');
  }

  return (
    <>
      <HeaderLoginButton>SysAdotaPet</HeaderLoginButton>
      <div className="ml-1 mt-16 flex flex-1">
        <div className="ml-48 mx-96 flex flex-1 bg-HeaderColor">
          <div className="flex-1">
            <img className="ml-5 my-5" src={onePet.url_imagem} alt="Login" />
          </div>
          <div className="flex flex-1 flex-col">
            <div className=" flex flex-col flex-1 ">
              <div className="flex flex-col">
                <h1 className="mt-16 ml-10 text-5xl font-MainFont">
                  {onePet.nome}
                </h1>
                <h1 className="mt-5 ml-10 text-2xl font-MainFont">
                  {onePet.idade}
                </h1>
              </div>
              <div className="flex-auto">
                <h1 className="mt-8 ml-10 text-xl font-MainFont">
                  {onePet.descricao}
                </h1>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <button
                onClick={clickForm}
                className="px-10 py-3 my-10 mr-10  border-2 bg-gray-50 border-black font-MainFont"
              >
                Preencher formulário
              </button>
              <button
                onClick={clickMain}
                className="px-10 py-3 my-10 mr-20  border-2 bg-gray-50 border-black font-MainFont"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
