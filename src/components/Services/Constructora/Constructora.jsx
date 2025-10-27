import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConstructoraHero from './maq.png'; 
import InicioLogo from './inicio.jpg'; 

import { GiBrickWall, GiCrane, GiArchitectMask } from "react-icons/gi"; // GiArchitectMask corregido
import { FaHardHat, FaTools } from "react-icons/fa";

const Constructora = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const primaryColor = '#002665';
  const secondaryColor = '#4fabc4';

  const scrollToContact = () => {
     window.location.href = '/contacto'; 
  };

  return (
    <div style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
        
        <img 
          src={InicioLogo}
          alt="Hero" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block'
          }}
        />
        
        
        <nav 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            padding: '5px',
          }}
        >
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'rgba(0, 0, 0, 0)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              padding: '10px 15px',
              cursor: 'pointer',
              borderRadius: '4px',
              marginLeft: 'auto',
              float: 'right'
            }}
            className="d-lg-none d-block"
          >
            ☰
          </button>

          
          <ul 
            style={{ 
              listStyle: 'none', 
              display: 'flex', 
              justifyContent: 'flex-end', 
              margin: 0, 
              padding: "0px 20px",
              gap: '30px'
            }}
            className="d-none d-lg-flex"
          >
            <li>
              <a 
                href="/" 
                style={{ 
                  color: '#002665', 
                  textDecoration: 'none', 
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="/#servicios" 
                style={{ 
                  color: '#002665', 
                  textDecoration: 'none', 
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="/sobre" 
                style={{ 
                  color: '#002665', 
                  textDecoration: 'none', 
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a 
                href="/contacto" 
                style={{ 
                  color: '#002665', 
                  textDecoration: 'none', 
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Contacto
              </a>
            </li>
          </ul>

          
          {menuOpen && (
            <div 
              style={{
                position: 'absolute',
                top: '60px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.9)',
                padding: '20px',
                borderRadius: '8px',
                minWidth: '200px',
                zIndex: 1050
              }}
              className="d-lg-none"
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '15px' }}>
                  <a 
                    href="/" 
                    onClick={() => setMenuOpen(false)}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      fontSize: '18px',
                      fontWeight: '500'
                    }}
                  >
                    Inicio
                  </a>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <a 
                    href="/#servicios" 
                    onClick={() => setMenuOpen(false)}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      fontSize: '18px',
                      fontWeight: '500'
                    }}
                  >
                    Servicios
                  </a>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <a 
                    href="/sobre" 
                    onClick={() => setMenuOpen(false)}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      fontSize: '18px',
                      fontWeight: '500'
                    }}
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a 
                    href="/contacto" 
                    onClick={() => setMenuOpen(false)}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      fontSize: '18px',
                      fontWeight: '500'
                    }}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
        <img 
          src={ConstructoraHero} 
          alt="Obra de construcción con grúa y planos" 
          style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover', 
            display: 'block'
          }}
        />
        
        <div style={{
            position: 'absolute',
            top: '0', bottom: '0', left: '0', right: '0',
            backgroundColor: 'rgba(0, 38, 101, 0.6)', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1 className="text-white text-center" style={{ fontSize: '4rem', fontWeight: '800' }}>
                CONSTRUCTORA
            </h1>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
              Proyectos de Construcción y Remodelación
            </h2>
            <p className="lead text-center mb-5" style={{ color: '#666' }}>
              Lideramos el desarrollo de proyectos residenciales, comerciales e industriales. Desde la cimentación hasta la entrega final, garantizamos calidad, cumplimiento de plazos y máxima seguridad en cada etapa.
            </p>
            
            <div className="row g-4 text-center">
              <div className="col-md-6">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                  <GiArchitectMask size={40} color={primaryColor} className="mb-3" /> {/* Uso del ícono GiArchitectMask corregido */}
                  <h4 style={{ color: primaryColor, fontWeight: '600' }}>Obra Nueva y Edificación</h4>
                  <p style={{ color: '#666' }}>Gestión integral de proyectos de construcción, incluyendo diseño arquitectónico, licencias y ejecución de obra civil.</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                  <FaTools size={40} color={primaryColor} className="mb-3" />
                  <h4 style={{ color: primaryColor, fontWeight: '600' }}>Remodelaciones y Adecuaciones</h4>
                  <p style={{ color: '#666' }}>Modernización y rehabilitación de espacios existentes, maximizando la funcionalidad y el valor estético de tu propiedad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#e9ecef', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
            Nuestras Especialidades
          </h2>
          <div className="row g-5">
            
            <div className="col-md-4">
              <div className="text-center p-4 h-100" style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <div 
                  className="mx-auto mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: primaryColor, 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: 'white'
                  }}
                >
                  <GiBrickWall />
                </div>
                <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                  Ingeniería Civil y Estructural
                </h5>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  Cálculos y ejecución de estructuras sólidas, garantizando la durabilidad y resistencia del proyecto.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 h-100" style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <div 
                  className="mx-auto mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: primaryColor, 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: 'white'
                  }}
                >
                  <GiCrane />
                </div>
                <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                  Gestión y Supervisión de Obra
                </h5>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  Control de calidad, gestión de personal, y manejo de proveedores para asegurar la entrega en tiempo.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 h-100" style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <div 
                  className="mx-auto mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: primaryColor, 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: 'white'
                  }}
                >
                  <FaHardHat />
                </div>
                <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                  Acabados y Entrega Final
                </h5>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  Detalles de terminación, instalaciones eléctricas y sanitarias, listos para la ocupación del inmueble.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center" style={{color: primaryColor}}>
              <h3 style={{ fontWeight: '700', fontSize: '2rem', marginBottom: '15px' }}>
                ¡Da Vida a tu Próximo Proyecto de Construcción!
              </h3>
              <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                Agenda una consulta con nuestros ingenieros y recibe un presupuesto detallado.
              </p>
              <button 
                className="btn btn-lg" 
                style={{ backgroundColor: secondaryColor, color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', fontWeight: '600' }}
                onClick={scrollToContact}
              >
                Comenzar Proyecto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructora;