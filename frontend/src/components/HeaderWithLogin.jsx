import { useNavigate } from 'react-router-dom';

export default function HeaderLoginButton({ children, secondChildren }) {
  const navigate = useNavigate();
  function clickLogin(event) {
    navigate('/login');
  }

  return (
    <header>
      <div>
        <div className="relative flex flex-row  bg-HeaderColor mx-auto p-4 h-44 ">
          <h1 className=" cursor-default text-5xl mt-10 ml-8 font-MainFont text-white ">
            {children}
          </h1>
          <button
            onClick={clickLogin}
            className="absolute inset-y-0 right-0 mr-36 border-2 border-black font-MainFont mt-16 mb-4 px-1 bg-white"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
