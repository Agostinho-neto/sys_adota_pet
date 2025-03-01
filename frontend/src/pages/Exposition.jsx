import Expo from '../components/Expo';
import { useEffect, useState } from 'react';
import { apiGetAllPets } from '../API/petServiceApi';
import HeaderLoginButton from '../components/HeaderWithLogin';
import Loading from '../components/Loading';
import Main from '../components/Main';
import Error from '../components/Error';

export default function Exposition() {
  const [allPets, setAllPets] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');

  useEffect(() => {
    async function getAllPets() {
      try {
        const backEndAllPets = await apiGetAllPets();

        setAllPets(backEndAllPets);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllPets();
  }, []);

  let expoContent = (
    <div className="flex justify-center flex-1 my-2">
      <Loading />
    </div>
  );

  if (error) {
    expoContent = (
      <p>
        <Error>{error}</Error>
      </p>
    );
  }

  if (!loading) {
    expoContent = (
      <div className="mt-5 flex flex-1">
        <div className="flex flex-col mx-36 my-3 flex-1 overscroll-auto">
          <div className="h-sm overflow-y-auto grid grid-cols-4 gap-10">
            {allPets.map(pet => {
              if (pet.pet_status === 1) {
                console.log(pet.pet_status);
                return (
                  <div>
                    <Expo
                      key={pet.pet_id}
                      id={pet.pet_id}
                      srcEdit={pet.url_imagem}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderLoginButton>SysAdotaPet</HeaderLoginButton>
      <div className="flex justify-center my-2"></div>
      <Main>{expoContent}</Main>
    </>
  );
}
