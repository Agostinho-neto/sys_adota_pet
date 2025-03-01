import { TextField } from '@material-ui/core';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react';
import { apiCreateformulario } from '../API/formularioServiceApi';
import Header from '../components/Header';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [profissao, setProfissao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [adotaRazao, setAdotaRazao] = useState('');
  const [agree, setAgree] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleNomeChange(event) {
    const newNome = event.currentTarget.value;
    setNome(newNome);
  }
  function handleIdadeChange(event) {
    const newIdade = event.currentTarget.value;
    setIdade(newIdade);
  }
  function handleEstadoCivilChange(event) {
    const newEstadoCivil = event.currentTarget.value;
    setEstadoCivil(newEstadoCivil);
  }
  function handleProfissaoChange(event) {
    const newProfissao = event.currentTarget.value;
    setProfissao(newProfissao);
  }
  function handleEnderecoChange(event) {
    const newEndereco = event.currentTarget.value;
    setEndereco(newEndereco);
  }
  function handleBairroChange(event) {
    const newBairro = event.currentTarget.value;
    setBairro(newBairro);
  }
  function handleCidadeChange(event) {
    const newCidade = event.currentTarget.value;
    setCidade(newCidade);
  }
  function handleEstadoChange(event) {
    const newEstado = event.currentTarget.value;
    setEstado(newEstado);
  }
  function handleCepChange(event) {
    const newCep = event.currentTarget.value;
    setCep(newCep);
  }
  function handleTelefoneChange(event) {
    const newTelefone = event.currentTarget.value;
    setTelefone(newTelefone);
  }
  function handleEmailChange(event) {
    const newEmail = event.currentTarget.value;
    setEmail(newEmail);
  }
  function handleAdotaRazaoChange(event) {
    const newAdotaRazao = event.currentTarget.value;
    setAdotaRazao(newAdotaRazao);
  }
  function handleAgreeChange(event) {
    if (agree === false) {
      const newAgree = true;
      setAgree(newAgree);
    } else {
      const newAgree = false;
      setAgree(newAgree);
    }
  }

  let petId = parseInt(localStorage.getItem('idPet'));

  async function handleNewFormulario() {
    try {
      await apiCreateformulario(
        nome,
        idade,
        estadoCivil,
        profissao,
        endereco,
        bairro,
        cidade,
        estado,
        cep,
        telefone,
        email,
        adotaRazao,
        petId,
        agree
      );

      setError('');
      setSuccess('Sucesso no envio, por gentileza aguardar o contato!!');
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  const navigate = useNavigate();

  function clickExpo() {
    navigate(`/detalhes/${petId}`);
  }

  return (
    <>
      <Header>SysAdotaPet</Header>
      <div>
        <div className="h-sm overflow-y-auto mr-8">
          <div className="text-3xl mx-36 my-10 flex-1 font-MainFont  mt-10">
            INFORMAÇÕES DO INTERESSADO
          </div>
          <div className="grid grid-cols-3 mx-36 mt-10 flex-1  gap-4 ">
            <div>
              <TextField
                required
                id="filled-required"
                label="Nome completo"
                defaultValue={nome}
                variant="filled"
                onChange={handleNomeChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Idade"
                defaultValue={idade}
                variant="filled"
                onChange={handleIdadeChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Estado civil"
                defaultValue={estadoCivil}
                variant="filled"
                onChange={handleEstadoCivilChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Profissão"
                defaultValue={profissao}
                variant="filled"
                onChange={handleProfissaoChange}
              />
            </div>
            <div className="col-span-1">
              <TextField
                fullWidth
                required
                id="filled-required"
                label="Endereço"
                defaultValue={endereco}
                variant="filled"
                onChange={handleEnderecoChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Bairro"
                defaultValue={bairro}
                variant="filled"
                onChange={handleBairroChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Cidade"
                defaultValue={cidade}
                variant="filled"
                onChange={handleCidadeChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Estado"
                defaultValue={estado}
                variant="filled"
                onChange={handleEstadoChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="CEP"
                defaultValue={cep}
                variant="filled"
                onChange={handleCepChange}
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Telefone"
                defaultValue={telefone}
                variant="filled"
                onChange={handleTelefoneChange}
              />
            </div>
            <div className="col-span-1">
              <TextField
                fullWidth
                required
                id="filled-required"
                label="E-mail"
                defaultValue={email}
                variant="filled"
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="text-3xl mx-36 my-10 flex-1 font-MainFont">
            SOBRE O ANIMAL QUE VOCÊ QUER ADOTAR:
          </div>
          <div className="grid grid-cols-3 mx-36 mt-10 flex-1 overscroll-auto gap-4">
            <div className="col-span-2">
              <TextField
                fullWidth
                required
                id="filled-required"
                label="Por que você quer adotar?"
                defaultValue={adotaRazao}
                variant="filled"
                onChange={handleAdotaRazaoChange}
              />
            </div>
            <h1 className="col-span-3 text-xl font-bold mt-10">
              Deverá ter ciência dos tópicos abaixo
            </h1>
            <div className="col-span-3 mt-1 text-justify text-xl">
               Estou ciente de que um filhote é extremamente suscetível a
              doenças, pois seu sistema imunológico não está completamente
              desenvolvido e não conseguimos prever doenças incubadas ou em seus
              estágios iniciais nos quais os sintomas demoram para serem
              percebidos;
              <br></br> Tenho ciência de que ele deverá receber doses de
              antivermes mensais até os 6 meses de vida;
              <br></br> Tenho ciência de que ele não poderá sair de casa até
              completar o protocolo de vacinas (em torno dos 4/5 meses) e até lá
              precisarei encontrar formas de entretê-lo e gastar energia em
              casa;
              <br></br> Tenho ciência de que após receber todas as doses de
              vacinas, o cão filhote/adolescente, até os dois anos de idade, tem
              muita energia que precisa ser gasta com brincadeiras e passeios
              diários de no mínimo meia hora e pelo menos duas vezes ao dia, do
              contrário poderá gastar a energia acumulada latindo e destruindo
              meus móveis e minha casa;
              <br></br> Cães e gatos podem viver 15 anos ou mais. Estou
              preparado para esse compromisso;
              <br></br> Tenho condições de acrescentar no seu orçamento os
              gastos que terei com alimentação de boa qualidade (aproximadamente
              R$ 200,00/mês) + gastos com higiene (banhos, limpeza de ouvidos e
              limpeza dos pertences do animal, etc.) e saúde (antipulgas,
              vermifugação, vacinas, consultas e exames periódicos com médico
              veterinário);
              <br></br> Estou ciente de que o filhote, por estar em fase
              inicial da vida e em fase de desenvolvimento, é extremamente
              suscetível a doenças, pois seu sistema imunológico não está
              completamente desenvolvido e não conseguimos prever doenças
              incubadas ou em seus estágios iniciais nos quais os sintomas
              demoram para serem percebidos;
              <br></br> Estou ciente de que ao adotar um filhote, deverei me
              comprometer a levá-lo a uma clínica veterinária para que continue
              a desparasitação, a vermifugação, mensalmente, até os 6 meses de
              vida e para que tome as doses de vacina (aos 60 dias de vida: 1ª
              dose da polivalente; aos 90 dias de vida: 2ª dose da polivalente;
              aos 120 dias de vida: 3ª dose da polivalente e a vacina
              antirrábica) e essas vacinas deverão ser reforçadas anualmente
              (uma dose de cada) no animal adulto;
              <br></br> As maiores chances de adoção de um animal acontecem
              quando são filhotes. Ao adotar um filhote e devolvê-lo já adulto
              poderei condenar esse animal à prisão perpetua em baias de abrigos
              pequenas, muitas vezes lotadas ou em gaiolas. O animal, que um dia
              conheceu o carinho de um lar, poderá morrer por depressão e
              tristeza ou por outras doenças que podem acometer um canil/gatil
              lotado, apesar dos cuidados dos protetores e das ongs. Estou
              ciente disso e da minha responsabilidade ao adotar o animal;
            </div>
            <div className="col-span-3 mt-8">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultValue={false} />}
                  defaultValue="false"
                  label="Estou ciente"
                  onChange={handleAgreeChange}
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-1 items-center justify-between mt-5 ml-96">
            {error.trim() !== '' ? (
              <span className="w-11/12 ml-96">
                <Error>{error}</Error>
              </span>
            ) : (
              <span className=" w-11/12 font-semibold text-black p-2 ml-80">
                {success}
              </span>
            )}
          </div>
          <div className="flex flex-row-reverse flex-1">
            <button
              onClick={handleNewFormulario}
              className=" font-MainFont  border-2 border-black bg-gray-400  mt-5 mr-24 px-2"
            >
              Enviar formulário
            </button>
            <button
              onClick={clickExpo}
              className=" font-MainFont  border-2 border-black bg-gray-400  mt-5 mr-24 p-2"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
