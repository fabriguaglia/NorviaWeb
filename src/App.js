import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import ServiciosIntegrales from './components/Services/Servicios-integrales/Servicios-integrales.jsx';
import Constructora from './components/Services/Constructora/Constructora.jsx';
import Logistica from './components/Services/Logistica/Logistica.jsx';
import MantenimientoIndustrial from './components/Services/Mantenimiento/Mantenimiento.jsx';
import Metalurgica from './components/Services/Metalurgica/Metalurgica.jsx';
import Comercial from './components/Services/Comercial/Comercial.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/limpieza" element={<ServiciosIntegrales />} />
          <Route path="/constructora" element={<Constructora />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/mantenimiento-industrial" element={<MantenimientoIndustrial />} />
          <Route path="/metalurgica" element={<Metalurgica />} />
          <Route path="/comercial" element={<Comercial />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
