import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002665', color: 'white', padding: '40px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <a href="/">
              <img 
              src={Logo} 
              alt="Logo" 
              style={{ maxWidth: '150px', height: 'auto' }}
              />
            </a>
          </div>

          {/* Links de navegación */}
          <div className="col-12 col-md-8">
            <ul 
              style={{ 
                listStyle: 'none', 
                display: 'flex', 
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: 0, 
                padding: 0,
                gap: '20px'
              }}
              className="justify-content-md-end"
            >
              <li>
                <a 
                  href="/" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontSize: '16px',
                    fontWeight: '400'
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="/#servicios" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontSize: '16px',
                    fontWeight: '400'
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="/sobre" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontSize: '16px',
                    fontWeight: '400'
                  }}
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="/contacto" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontSize: '16px',
                    fontWeight: '400'
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea separadora */}
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '30px 0' }} />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
              Grupo Norvia © {new Date().getFullYear()}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;