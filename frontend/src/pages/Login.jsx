import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGetAllGestores } from '../API/gestorServiceApi';
import Header from '../components/Header';

import TextInput from '../components/TextInput';

export default function Login() {
  const [entrar, setEntrar] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function getAllGestores() {
      const backEndAllGestores = await apiGetAllGestores();

      setEntrar(backEndAllGestores);
    }
    getAllGestores();
  }, []);

  function handleLoginChange(newLogin) {
    setLogin(newLogin);
  }

  function handlePasswordChange(newPassword) {
    setPassword(newPassword);
  }
  const navigate = useNavigate();

  function clickEntrar(event) {
    const usuario = entrar.findIndex(
      user => String(user.email) === String(login)
    );

    if (usuario !== -1) {
      navigate('/adm');
    }
  }

  return (
    <>
      <Header>SysAdotaPet</Header>
      <div className="flex ">
        <div className="flex-auto ml-10 ">
          <img
            className="mt-20 ml-16"
            src="https://images2.imgbox.com/a1/0e/Z2lq9Oau_o.png"
            alt="Login"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex-auto"></div>
          <div className="relative flex flex-col flex-1 ">
            <div className="ml-1 absolute inset-x-0 bottom-10 ">
              <TextInput
                id="loginInput"
                labelDescription="Login:"
                inputValue={login}
                onInputChange={handleLoginChange}
                autoFocus
              />
            </div>

            <div className=" absolute inset-x-0 bottom-0 ">
              <TextInput
                id="passwordInput"
                labelDescription="Senha:"
                inputValue={password}
                onInputChange={handlePasswordChange}
                textType="password"
              />
            </div>
          </div>
          <div className="flex-1 ">
            <button
              onClick={clickEntrar}
              className="ml-24 mx-8 my-5 inline-block flex-row border-2 border-black py-1 px-7"
            >
              Entrar
            </button>
          </div>
        </div>
        <div className="flex-auto"></div>
      </div>
    </>
  );
}
