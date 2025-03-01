import { useState } from 'react';
import TextInput from '../components/TextInput';
import { useNavigate } from 'react-router-dom';
import { apiCreatePet } from '../API/petServiceApi';
import HeaderLogoutButton from './../components/HeaderWithLogout';
import Error from './../components/Error';

export default function Management() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleNomeChange(newNome) {
    setNome(newNome);
  }

  function handleIdadeChange(newIdade) {
    setIdade(newIdade);
  }

  function handleDescricaoChange(event) {
    const newDescricao = event.currentTarget.value;
    setDescricao(newDescricao);
  }

  function handleImagemChange(newImagem) {
    setImagem(newImagem);
  }

  function clearFields() {
    setNome('');
    setIdade('');
    setDescricao('');
    setImagem('');
  }

  async function handleNewPet() {
    try {
      await apiCreatePet(nome, idade, descricao, imagem);
      clearFields();
      setError('');
      setSuccess('Sucesso no cadastro!!');
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  }

  const navigate = useNavigate();

  function clickVoltar(event) {
    navigate('/adm');
  }

  return (
    <>
      <HeaderLogoutButton>SysAdotaPet</HeaderLogoutButton>
      <div className=" flex flex-row">
        <div className="w-64 h-20 ml-32 mt-20 bg-HeaderColor">
          <h2 className="mx-10 mt-5 text-2xl font-MainFont">Cadastrar PET</h2>
        </div>
        <div className="shadow flex flex-1 h-80 mr-36 flex-row mt-20 bg-HeaderColor">
          <div className="flex flex-1 flex-col">
            <div className="mt-5 ml-15px">
              <TextInput
                className="m-60"
                labelDescription="Nome:"
                inputValue={nome}
                onInputChange={handleNomeChange}
                id="nomeInput"
                autoFocus
              />
            </div>
            <div className="ml-16">
              <TextInput
                labelDescription="Idade:"
                inputValue={idade}
                onInputChange={handleIdadeChange}
                id="idadeInput"
                autoFocus
              />
            </div>
            <div className="ml-10 flex flex-1 w-12/12">
              <label className="" htmlFor="descricaoInput">
                Descrição:
                <input
                  autoFocus
                  id="descricaoInput"
                  className="ml-3 my-2 border-2 border-black w-96 h-40"
                  type="text"
                  value={descricao}
                  onChange={handleDescricaoChange}
                ></input>
              </label>
            </div>
            <div className=" mb-2">
              <TextInput
                labelDescription="Url da imagem:"
                inputValue={imagem}
                onInputChange={handleImagemChange}
                id="ImagemInput"
                autoFocus
              />
            </div>
            <div className="flex items-center justify-between ">
              {error.trim() !== '' ? (
                <span className="w-11/12 ">
                  <Error>{error}</Error>
                </span>
              ) : (
                <span className="ml-24 w-11/12 font-semibold text-black p-2">
                  {success}
                </span>
              )}
              <div className="mr-2 mb-2 flex flex-row-reverse  mt-4">
                <button
                  className="border-2 border-black bg-gray-300 font-MainFont px-6"
                  onClick={clickVoltar}
                >
                  Voltar
                </button>
                <button
                  onClick={handleNewPet}
                  className="mr-48 border-b-2 border-black bg-green-500  font-MainFont px-6"
                >
                  Confirmar
                </button>
                <div className="w-96"></div>
                {/* <button
                className="mr-80 border-2 border-black bg-gray-300 font-MainFont px-6"
                onClick={clickExpo}
              >
                Ver PETs
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
