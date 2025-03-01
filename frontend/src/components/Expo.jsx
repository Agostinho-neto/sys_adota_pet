import { useNavigate } from 'react-router-dom';

export default function Expo({ srcEdit = 'urldaimagem', id }) {
  const navigate = useNavigate();
  function clickExpo() {
    localStorage.setItem('idPet', id);
    navigate(`/detalhes/${id}`);
  }
  return (
    <div className="w-48 h-80 bg-HeaderColor flex flex-col">
      <div className="flex flex-1">
        <img
          className="min-h-60 max-h-60   min-w-full  p-2"
          src={srcEdit}
          alt="Pet1"
        />
      </div>
      <div className="place-content-center flex flex-1 ">
        <button
          onClick={clickExpo}
          className="my-10 px-8 font-MainFont border-2 border-black bg-white"
        >
          Gostei!
        </button>
      </div>
    </div>
  );
}
