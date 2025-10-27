import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import InicioLogo from './inicio.jpg'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contacto = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      
      {/* Sección Hero con Header superpuesto */}
      <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
        {/* Imagen de fondo */}
        <img 
          src={InicioLogo}
          alt="Hero" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block'
          }}
        />
        
        {/* Header superpuesto */}
        <nav 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            padding: '5px',
          }}
        >
          {/* Burger button para móvil */}
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

          {/* Menu desktop */}
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

          {/* Menu móvil */}
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

      {/* Sección de Contacto */}
      <div className="container my-4 py-2">
        <h2 className="text-center mb-5" style={{ color: '#002665', fontWeight: '700', fontSize: '2.5rem' }}>
          Contáctanos
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="row g-4">
              {/* WhatsApp */}
              <div className="col-12 col-md-6">
                <div 
                  onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
                  style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <FaWhatsapp style={{ fontSize: '40px', color: 'white' }} />
                  </div>
                  <h4 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                    WhatsApp
                  </h4>
                  <span style={{ 
                      color: '#25D366', 
                      textDecoration: 'underline', 
                      fontSize: '1.2rem',
                      fontWeight: '500'
                    }}
                  >
                    +54 9 11 2345-6789
                  </span>
                </div>
              </div>

              {/* Teléfono */}
              <div className="col-12 col-md-6">
                <div 
                  onClick={() => window.location.href = 'tel:+5491234567890'}
                  style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#002665',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <FaPhone style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <h4 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                    Teléfono
                  </h4>
                  <span style={{ 
                      color: '#002665', 
                      textDecoration: 'underline', 
                      fontSize: '1.2rem',
                      fontWeight: '500'
                    }}
                  >
                    +54 9 11 2345-6789
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="col-12 col-md-6">
                <div 
                  onClick={() => window.location.href = 'mailto:gruponorvia@gmail.com'}
                  style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#002665',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <FaEnvelope style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <h4 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                    Email
                  </h4>
                  <span style={{ 
                      color: '#002665', 
                      textDecoration: 'underline', 
                      fontSize: '1.2rem',
                      fontWeight: '500'
                    }}
                  >
                    gruponorvia@gmail.com
                  </span>
                </div>
              </div>

              {/* Dirección */}
              <div className="col-12 col-md-6">
                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#002665',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <FaMapMarkerAlt style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <h4 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                    Dirección
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    margin: 0,
                    textDecoration: 'underline'
                  }}>
                    Salta, Argentina
                  </p>
                </div>
              </div>
            </div>

            {/* Mensaje adicional */}
            <div className="text-center mt-5">
              <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '10px' }}>
                Estamos disponibles de lunes a viernes de 9:00 a 18:00 hs
              </p>
              <p style={{ fontSize: '1rem', color: '#999' }}>
                Respondemos todas las consultas dentro de las 24 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto