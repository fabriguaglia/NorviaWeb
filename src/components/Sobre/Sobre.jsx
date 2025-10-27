import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InicioLogo from './inicio.jpg';
import { RxStarFilled } from "react-icons/rx";
import { FaHandshake } from "react-icons/fa";


const SobreNosotros = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      
      {/* Sección Hero con Header superpuesto */}
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

      {/* Sección Quiénes Somos */}
      <div className="container my-4 py-2">
        <div className="row align-items-center mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4" style={{ color: '#002665', fontWeight: '700', fontSize: '2.5rem' }}>
              Quiénes Somos
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
              Somos <strong style={{ color: '#002665' }}>Grupo Norvia</strong>, una empresa salteña con presencia nacional e internacional, 
              comprometida con la excelencia en cada uno de nuestros servicios. Desde Salta, Argentina, trabajamos con 
              profesionalismo y dedicación para brindar soluciones integrales en comercio exterior, logística, construcción 
              y servicios de limpieza especializados.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6">
            <div 
              style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '40px', 
                borderRadius: '12px',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ color: '#002665', fontWeight: '700', marginBottom: '20px', fontSize: '2rem' }}>
                Nuestra Misión
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Proveer servicios de alta calidad que superen las expectativas de nuestros clientes, 
                generando valor agregado a través de la innovación, el compromiso y la responsabilidad 
                en cada proyecto que emprendemos.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div 
              style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '40px', 
                borderRadius: '12px',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ color: '#002665', fontWeight: '700', marginBottom: '20px', fontSize: '2rem' }}>
                Nuestra Visión
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Consolidarnos como el grupo empresarial líder en servicios integrales a nivel nacional e 
                internacional, reconocidos por nuestra excelencia operativa, innovación constante y 
                compromiso con el desarrollo sostenible.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center mb-5" style={{ color: '#002665', fontWeight: '700', fontSize: '2.2rem' }}>
              Nuestros Valores
            </h3>
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="text-center">
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#002665',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '2.5rem'
                    }}
                  >
                    <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
                    </svg>

                  </div>
                  <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px', fontSize: '1.3rem' }}>
                    Excelencia
                  </h5>
                  <p style={{ color: '#666', fontSize: '1rem' }}>
                    Buscamos la perfección en cada servicio que brindamos
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="text-center">
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#002665',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '2.5rem'
                    }}
                  >
                    <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 640 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                    </svg>

                  </div>
                  <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px', fontSize: '1.3rem' }}>
                    Compromiso
                  </h5>
                  <p style={{ color: '#666', fontSize: '1rem' }}>
                    Cumplimos nuestras promesas y superamos expectativas
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="text-center">
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#002665',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '2.5rem'
                    }}
                  >
                    <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 384 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path>
                    </svg>
                  </div>
                  <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px', fontSize: '1.3rem' }}>
                    Innovación
                  </h5>
                  <p style={{ color: '#666', fontSize: '1rem' }}>
                    Evolucionamos constantemente para ofrecer mejores soluciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Por qué elegirnos */}
        <div className="row">
          <div className="col-12">
            <div 
              style={{ 
                backgroundColor: '#002665', 
                padding: '50px 40px', 
                borderRadius: '12px',
                color: 'white'
              }}
            >
              <h3 className="text-center mb-4" style={{ fontWeight: '700', fontSize: '2.2rem' }}>
                ¿Por Qué Elegirnos?
              </h3>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    ✓ <strong>Experiencia comprobada</strong> en el mercado nacional e internacional
                  </p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    ✓ <strong>Equipo profesional</strong> altamente capacitado y comprometido
                  </p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    ✓ <strong>Soluciones personalizadas</strong> adaptadas a cada cliente
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    ✓ <strong>Tecnología de punta</strong> en todos nuestros procesos
                  </p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    ✓ <strong>Compromiso con la calidad</strong> en cada proyecto
                  </p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                    ✓ <strong>Presencia local</strong> con alcance global
                  </p>
                </div>
              </div>
              <div className="text-center mt-4">
                <a 
                  href="/contacto"
                  style={{
                    backgroundColor: 'white',
                    color: '#002665',
                    padding: '15px 40px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;