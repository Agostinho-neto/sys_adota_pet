import { useNavigate } from 'react-router-dom';

export default function Header({ children }) {
  const navigate = useNavigate();
  function clickMain(event) {
    navigate('/');
  }

  return (
    <header>
      <div>
        <div className=" flex flex-row  bg-HeaderColor mx-auto p-4 h-44 ">
          <h1
            onClick={clickMain}
            className="   cursor-pointer text-5xl mt-10 ml-8 font-MainFont text-white "
          >
            {children}
          </h1>
        </div>
      </div>
    </header>
  );
}
