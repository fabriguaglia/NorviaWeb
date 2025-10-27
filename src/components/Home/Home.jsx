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
import { MdShoppingBag } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { BsDoorOpenFill } from "react-icons/bs";
import { GiCook } from "react-icons/gi";

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
                href="#servicios" 
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
                    href="#inicio" 
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
                    href="#servicios" 
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
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: "none" }}>
                  Solicitar presupuesto
                </button>
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
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
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
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
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
                <button className="btn" style={{ backgroundColor: '#002665', color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none' }}>
                  Solicitar presupuesto
                </button>
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

      {/* Sección de servicios con iconos */}
      <div id="servicios" className="container my-5 py-4">
        <h2 className="text-center mb-5" style={{ color: '#002665', fontWeight: '700', fontSize: '2.5rem' }}>
          Nuestros Servicios
        </h2>
        <div className="row g-4">
          {/* Servicio 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/exportacion-importacion" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <FaShip />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Exportación e Importación
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Gestión completa de procesos de comercio exterior con asesoría especializada
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/servicios-integrales" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <GiBroom />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Servicios Integrales
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Limpieza profesional y mantenimiento de instalaciones empresariales
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/constructora" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <LuConstruction />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Constructora
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Proyectos de construcción y remodelación con equipos especializados
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/logistica" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <FaTruckLoading />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Logística
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Soluciones de transporte y distribución optimizadas para tu negocio
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 5 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/puestos-trabajo" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <MdShoppingBag />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Puestos de Trabajo
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Escritorios, sillas y equipos. Sin mover lo que no debemos, pero dejando todo limpio
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 6 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/salas-reuniones" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <HiBuildingOffice />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Salas de Reuniones
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Cristales, mesas, pantallas y suelos. Todo listo para recibir visitas o equipos internos
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 7 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/zonas-comunes" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <BsDoorOpenFill />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Zonas Comunes y Pasillos
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Tráfico constante, polvo constante. Lo controlamos con rigor y frecuencia
                </p>
              </div>
            </a>
          </div>

          {/* Servicio 8 */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="/cocinas-comedores" style={{ textDecoration: 'none' }}>
              <div className="text-center p-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
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
                  <GiCook />
                </div>
                <h5 style={{ color: '#002665', fontWeight: '600', marginBottom: '15px' }}>
                  Cocinas y Comedores
                </h5>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Limpieza diaria, revisión de residuos, encimeras y electrodomésticos. Sin olores ni manchas
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