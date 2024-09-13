import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './tailwind.css';
import Navbar from './components/Navbar/navbar';
import Politica from './components/Politica/politica';
import Home from './components/Home/home';
import Card from './components/Card/card';
import Finalizado from './components/Finalizado/finalizado';

function App() {
  return (
    <Router> {/* Mueve Router aquí para envolver todo */}
      <div>
        <Navbar /> {/* Navbar visible en todas las secciones */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
          <Route path="/politica" element={<Politica />} /> {/* Ruta para la política */}
          <Route path="/pagar" element={<Card />} /> {/* Ruta para la política */}
          <Route path="/pagado" element={<Finalizado />} /> {/* Ruta para la política */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
