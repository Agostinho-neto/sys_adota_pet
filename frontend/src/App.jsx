import Exposition from './pages/Exposition';
import Login from './pages/Login';
import Management from './pages/Management';
import Delete from './pages/Delete';
import DetailInfo from './pages/DetailInfo';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Formulario from './pages/Formulario';
import Administrador from './pages/Administrador';

export default function App() {
  return (
    <>
      {/* <FreelancerProvider value={localStorage.getItem('idPet')}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/gerenciar" element={<Management />} />
          <Route path="/" element={<Exposition />} />
          <Route path="/deletar" element={<Delete />} />
          <Route path="/detalhes/:id" element={<DetailInfo />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/adm" element={<Administrador />} />
        </Routes>
      </BrowserRouter>
      {/* </FreelancerProvider> */}
    </>
  );
}
