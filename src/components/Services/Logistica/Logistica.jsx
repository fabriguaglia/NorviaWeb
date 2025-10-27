import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogisticaHero from './logi.png'; 
import InicioLogo from './inicio.jpg'; 

import { FaTruck, FaWarehouse, FaShippingFast, FaRoute, FaBoxOpen } from "react-icons/fa";

const Logistica = () => {
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

      {/* Sección Hero con Header superpuesto (copia de Constructora) */}
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

      {/* Sección Héroe específica de Logística */}
      <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
        <img 
          src={LogisticaHero} 
          alt="Operación de Logística y transporte" 
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
                LOGÍSTICA Y TRANSPORTE
            </h1>
        </div>
      </div>

      {/* Introducción al Servicio */}
      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
              Gestión Integral de Cadena de Suministro
            </h2>
            <p className="lead text-center mb-5" style={{ color: '#666' }}>
              Optimizamos el flujo de mercancías desde el origen hasta el consumidor final. Ofrecemos soluciones eficientes y seguras en transporte, almacenamiento y distribución.
            </p>
            
            <div className="row g-4 text-center">
              <div className="col-md-6">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                  <FaShippingFast size={40} color={primaryColor} className="mb-3" />
                  <h4 style={{ color: primaryColor, fontWeight: '600' }}>Transporte Nacional e Internacional</h4>
                  <p style={{ color: '#666' }}>Servicios de carga terrestre, marítima y aérea, asegurando la entrega puntual y el manejo especializado de su mercancía.</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                  <FaWarehouse size={40} color={primaryColor} className="mb-3" />
                  <h4 style={{ color: primaryColor, fontWeight: '600' }}>Almacenamiento y Distribución</h4>
                  <p style={{ color: '#666' }}>Centros de distribución estratégicamente ubicados con gestión de inventarios (WMS) y preparación de pedidos (picking).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Especialidades */}
      <div style={{ backgroundColor: '#e9ecef', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
            Servicios Clave para su Operación
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
                  <FaTruck />
                </div>
                <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                  Fletes y Carga Completa (FTL)
                </h5>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  Transporte exclusivo para grandes volúmenes, garantizando la seguridad y minimizando los tiempos de tránsito.
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
                  <FaRoute />
                </div>
                <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                  Rastreo y Trazabilidad
                </h5>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  Monitoreo en tiempo real de su envío, desde la recogida hasta la entrega, con reportes detallados.
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
                  <FaBoxOpen />
                </div>
                <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                  Embalaje y Consolidación
                </h5>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  Servicios de empaque profesional y consolidación de pedidos para optimizar costos y espacio.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action (CTA) - Fondo Blanco */}
      <div className="container-fluid py-5" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center" style={{color: primaryColor}}>
              <h3 style={{ fontWeight: '700', fontSize: '2rem', marginBottom: '15px' }}>
                ¡Potencia tu Cadena de Suministro con Soluciones Logísticas!
              </h3>
              <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                Contáctanos hoy para diseñar un plan logístico que impulse la eficiencia de tu negocio.
              </p>
              <button 
                className="btn btn-lg" 
                style={{ backgroundColor: secondaryColor, color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', fontWeight: '600' }}
                onClick={scrollToContact}
              >
                Solicitar Cotización de Envío
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistica;