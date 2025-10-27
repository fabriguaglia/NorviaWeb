import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
