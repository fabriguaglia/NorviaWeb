import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InicioLogo from './inicio.jpg';
import barco from './barco.png';
import limp from './limp.png';
import maq from './maq.png';
import camion from './camion.png';

import { GiBroom } from "react-icons/gi";
import { FaShip } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { FaTruckLoading } from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para hacer scroll suave a la sección de servicios
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Carrusel de servicios */}
      <div id="servicesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={barco} className="d-block w-100" alt="Comercial" style={{ height: '600px', objectFit: 'cover' }} />
            <div className="carousel-caption d-flex align-items-center" style={{ left: '5%', right: 'auto', textAlign: 'left', top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
              <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.8)', padding: '30px 40px', borderRadius: '8px', maxWidth: '500px' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>EXPORTACIÓN E IMPORTACIÓN</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Nuestros servicios comerciales incluyen la compra y venta de materiales, equipos y suministros.</p>
                <a href="/contacto">
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
                </a>
                <button 
                  className="btn" 
                  style={{ backgroundColor: '#4fabc4', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', marginLeft: '15px' }}
                  onClick={scrollToServices}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={camion} className="d-block w-100" alt="Logística" style={{ height: '600px', objectFit: 'cover' }} />
            <div className="carousel-caption d-flex align-items-center" style={{ left: '5%', right: 'auto', textAlign: 'left', top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
              <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.8)', padding: '30px 40px', borderRadius: '8px', maxWidth: '500px' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>LOGÍSTICA</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Soluciones de transporte y distribución optimizadas para tu negocio.</p>
                <a href="/contacto">
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
                </a>
                <button 
                  className="btn" 
                  style={{ backgroundColor: '#4fabc4', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', marginLeft: '15px' }}
                  onClick={scrollToServices}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={maq} className="d-block w-100" alt="Construcción" style={{ height: '600px', objectFit: 'cover' }} />
            <div className="carousel-caption d-flex align-items-center" style={{ left: '5%', right: 'auto', textAlign: 'left', top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
              <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.8)', padding: '30px 40px', borderRadius: '8px', maxWidth: '500px' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>CONSTRUCCIÓN</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Proyectos de construcción y remodelación con equipos especializados.</p>
                <a href="/contacto">
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
                </a>
                  <button 
                  className="btn" 
                  style={{ backgroundColor: '#4fabc4', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', marginLeft: '15px' }}
                  onClick={scrollToServices}
                  >
                  Más información
                  </button>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <img src={limp} className="d-block w-100" alt="Servicios Integrales" style={{ height: '600px', objectFit: 'cover' }} />
            <div className="carousel-caption d-flex align-items-center" style={{ left: '5%', right: 'auto', textAlign: 'left', top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
              <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.8)', padding: '30px 40px', borderRadius: '8px', maxWidth: '500px' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>SERVICIOS INTEGRALES</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Limpieza profesional y mantenimiento de instalaciones empresariales.</p>
                <a href="/contacto">
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
                </a>
                <button 
                  className="btn" 
                  style={{ backgroundColor: '#4fabc4', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', marginLeft: '15px' }}
                  onClick={scrollToServices}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* --- SECCIÓN QUIÉNES SOMOS --- */}
      <div id="quienes-somos" className="container my-4 py-5" style={{ backgroundColor: '#e9f5fb', borderRadius: '8px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-5" style={{ color: '#002665', fontWeight: '800', fontSize: '2.5rem' }}>
              Quiénes Somos
            </h2>
            <p className="lead text-center mb-5" style={{ color: '#666', maxWidth: '850px', margin: '0 auto', fontSize: '1.4rem' }}>
              Somos <strong style={{color:"#002665"}}>Grupo Norvia</strong>, una empresa de servicios integrales con <strong style={{color:"#002665"}}>raíces en Salta, Argentina</strong>, pero con una visión y <strong style={{color:"#002665"}}>alcance global</strong>. Nacimos con el propósito de ser el socio estratégico de negocios que combina la <strong style={{color:"#002665"}}>eficiencia operativa</strong> con la <strong style={{color:"#002665"}}>excelencia en el servicio</strong>.
            </p>
            
            <div className="row g-4 text-center">
              {/* Pilar 1: Misión */}
              <div className="col-md-4">
                <div 
                  className="p-4 h-100" 
                  style={{ 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '8px', 
                    borderBottom: '5px solid #4fabc4',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)'; // Sombra basada en el color primario
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={{ color: '#002665', fontWeight: '700', marginBottom: '15px' }}>Misión</h4>
                  <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Ofrecer soluciones innovadoras en <strong>Logística, Construcción y Comercio Exterior</strong>, superando consistentemente las expectativas de nuestros clientes.
                  </p>
                </div>
              </div>
              
              {/* Pilar 2: Visión */}
              <div className="col-md-4">
                <div 
                  className="p-4 h-100" 
                  style={{ 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '8px', 
                    borderBottom: '5px solid #4fabc4',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={{ color: '#002665', fontWeight: '700', marginBottom: '15px' }}>Visión</h4>
                  <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Consolidarnos como el grupo de servicios líder en el Norte de Argentina, reconocido por nuestro <strong>compromiso ético</strong> y <strong>calidad global</strong>.
                  </p>
                </div>
              </div>
              
              {/* Pilar 3: Valores */}
              <div className="col-md-4">
                <div 
                  className="p-4 h-100" 
                  style={{ 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '8px', 
                    borderBottom: '5px solid #4fabc4',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={{ color: '#002665', fontWeight: '700', marginBottom: '15px' }}>Valores</h4>
                  <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Nuestra base es la <strong>integridad</strong>, la <strong>innovación</strong> y la <strong>responsabilidad</strong> con cada cliente y proyecto.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-5">
              <a 
                href="/sobre"
                className="btn btn-lg" 
                style={{ 
                  backgroundColor: '#002665', 
                  color: 'white', 
                  padding: '15px 40px', 
                  fontSize: '1.2rem', 
                  border: 'none', 
                  fontWeight: '600',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease-in-out' // Transición para el botón
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Conoce más sobre nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* --- FIN SECCIÓN QUIÉNES SOMOS --- */}

      {/* Sección de servicios con iconos y Hover */}
      {/* Sección de servicios con iconos y línea azul inferior */}
      <div id="servicios" className="container my-4 py-4">
        <h2 className="text-center mb-5" style={{ color: '#002665', fontWeight: '700', fontSize: '2.5rem' }}>
          Nuestros Servicios
        </h2>
        <div className="row g-4">
          {/* Servicio 1: Exportación e Importación */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/exportacion-importacion" style={{ textDecoration: 'none' }}>
              <div 
                className="text-center p-3 h-100" 
                style={{
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  borderBottom: '5px solid #4fabc4', // ESTILO AÑADIDO
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: '#002665', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '40px',
                    color: 'white'
                  }}
                >
                  {/* Asegúrate de importar FaShip */}
                  <FaShip /> 
                </div>
                <h5 className="text-decoration-underline" style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Exportación e Importación
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Gestión completa de procesos de comercio exterior con asesoría especializada
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 2: Servicios Integrales (Limpieza) */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/servicios-integrales" style={{ textDecoration: 'none' }}>
              <div 
                className="text-center p-3 h-100" 
                style={{
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  borderBottom: '5px solid #4fabc4', // ESTILO AÑADIDO
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: '#002665', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '40px',
                    color: 'white'
                  }}
                >
                  {/* Asegúrate de importar GiBroom */}
                  <GiBroom /> 
                </div>
                <h5 className="text-decoration-underline" style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Servicios Integrales
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Limpieza profesional y mantenimiento de instalaciones empresariales
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 3: Constructora */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/constructora" style={{ textDecoration: 'none' }}>
              <div 
                className="text-center p-3 h-100" 
                style={{
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  borderBottom: '5px solid #4fabc4', // ESTILO AÑADIDO
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: '#002665', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '40px',
                    color: 'white'
                  }}
                >
                  {/* Asegúrate de importar LuConstruction */}
                  <LuConstruction /> 
                </div>
                <h5 className="text-decoration-underline" style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Constructora
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Proyectos de construcción y remodelación con equipos especializados
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 4: Logística */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/logistica" style={{ textDecoration: 'none' }}>
              <div 
                className="text-center p-3 h-100" 
                style={{
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  borderBottom: '5px solid #4fabc4', // ESTILO AÑADIDO
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 38, 101, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: '#002665', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '40px',
                    color: 'white'
                  }}
                >
                  {/* Asegúrate de importar FaTruckLoading */}
                  <FaTruckLoading /> 
                </div>
                <h5 className="text-decoration-underline" style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Logística
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Soluciones de transporte y distribución optimizadas para tu negocio
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;