import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Exportacionimpo from './components/Services/Expoimpo/Expoimpo.jsx';
import ServiciosIntegrales from './components/Services/Servicios-integrales/Servicios-integrales.jsx';
import Constructora from './components/Services/Constructora/Constructora.jsx';
import Logistica from './components/Services/Logistica/Logistica.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/exportacion-importacion" element={<Exportacionimpo />} />
          <Route path="/servicios-integrales" element={<ServiciosIntegrales />} />
          <Route path="/constructora" element={<Constructora />} />
          <Route path="/logistica" element={<Logistica />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
