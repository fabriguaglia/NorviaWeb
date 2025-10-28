import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Reemplaza estas rutas con tus imágenes reales:
import ComercialHero from './comercial.png'; 
import InicioLogo from './inicio.jpg'; 

// Iconos específicos para Comercio Exterior
import { FaGlobe, FaShip, FaTruckLoading, FaFileInvoiceDollar  } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

const Comercial = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Colores definidos en tu estética
  const primaryColor = '#002665';
  const secondaryColor = '#4fabc4';

  const scrollToContact = () => {
      window.location.href = '/contacto'; 
  };
  
  // Array de tarjetas de especialidades con hover
  const especialidadesComercial = [
    {
      titulo: "Gestión de Exportación",
      descripcion: "Asesoría y ejecución de procesos logísticos, documentales y aduaneros para colocar sus productos en mercados internacionales.",
      icono: FaShip
    },
    {
      titulo: "Gestión de Importación",
      descripcion: "Manejo completo de la cadena de suministro internacional, desde la compra hasta la nacionalización y entrega en destino final.",
      icono: FaTruckLoading
    },
    {
      titulo: "Trámites Aduaneros",
      descripcion: "Despacho ágil y eficiente de mercancías, cumplimiento normativo y clasificación arancelaria precisa para evitar demoras y multas.",
      icono: FaBoxesPacking
    },
  ];

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
            <li><a href="/" style={{ color: primaryColor, textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Inicio</a></li>
            <li><a href="/#servicios" style={{ color: primaryColor, textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Servicios</a></li>
            <li><a href="/sobre" style={{ color: primaryColor, textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Sobre Nosotros</a></li>
            <li><a href="/contacto" style={{ color: primaryColor, textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Contacto</a></li>
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
                <li style={{ marginBottom: '15px' }}><a href="/" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Inicio</a></li>
                <li style={{ marginBottom: '15px' }}><a href="/#servicios" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Servicios</a></li>
                <li style={{ marginBottom: '15px' }}><a href="/sobre" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Sobre Nosotros</a></li>
                <li><a href="/contacto" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Contacto</a></li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Sección Héroe específica de Comercial */}
      <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
        <img 
          src={ComercialHero} 
          alt="Comercio Exterior Global" 
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
              COMERCIO EXTERIOR Y ADUANAS
          </h1>
        </div>
      </div>

      {/* Introducción al Servicio */}
      <div className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
              Facilitando sus Operaciones Globales
            </h2>
            <p className="lead text-center mb-5" style={{ color: '#666' }}>
              Ofrecemos gestión integral de comercio exterior, cubriendo todos los aspectos de la exportación e importación con un enfoque en el <strong style={{color:"#002665"}}>cumplimiento normativo</strong> y la <strong style={{color:"#002665"}}>eficiencia logística</strong>.
            </p>
            
            <div className="row g-4 text-center">
              <div className="col-md-6">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                  <FaFileInvoiceDollar size={40} color={primaryColor} className="mb-3" />
                  <h4 style={{ color: primaryColor, fontWeight: '600' }}>Asesoría en Regímenes Aduaneros</h4>
                  <p style={{ color: '#666' }}>Consultoría especializada en regulaciones, tratados de libre comercio y optimización de costos arancelarios.</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                  <FaGlobe size={40} color={primaryColor} className="mb-3" />
                  <h4 style={{ color: primaryColor, fontWeight: '600' }}>Seguro y Financiación Comercial</h4>
                  <p style={{ color: '#666' }}>Gestión de pólizas de seguro de carga y soluciones financieras para operaciones de comercio internacional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Especialidades (Exportación e Importación - Con efecto Hover) */}
      <div style={{ backgroundColor: '#e9ecef', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
            Nuestros Pilares de Comercio Exterior
          </h2>
          <div className="row g-5 justify-content-center">
            
            {especialidadesComercial.map((servicio, index) => (
              <div className="col-md-4" key={index}>
                  <div 
                    className="text-center p-4 h-100" 
                    style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '12px', 
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      borderBottom: `5px solid ${secondaryColor}`, // Línea inferior
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Transición para el hover
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = `0 15px 30px ${primaryColor}40`; // Sombra al hacer hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
                    }}
                  >
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
                      <servicio.icono />
                    </div>
                    <h5 style={{ color: primaryColor, fontWeight: '600', marginBottom: '15px' }}>
                      {servicio.titulo}
                    </h5>
                    <p style={{ color: '#666', fontSize: '1rem' }}>
                      {servicio.descripcion}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action (CTA) - Fondo Blanco */}
      <div className="container-fluid py-5" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center" style={{color: primaryColor}}>
              <h3 style={{ fontWeight: '700', fontSize: '2rem', marginBottom: '15px' }}>
                ¡Expande tu Negocio Globalmente con Confianza y Eficiencia!
              </h3>
              <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                Agenda una reunión con nuestros expertos en comercio exterior para optimizar tus operaciones.
              </p>
              <button 
                className="btn btn-lg" 
                style={{ backgroundColor: secondaryColor, color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', fontWeight: '600' }}
                onClick={scrollToContact}
              >
                Contactar a un Asesor Aduanero
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comercial;