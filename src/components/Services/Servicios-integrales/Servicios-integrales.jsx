import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Asegúrate de que estas rutas de imagen sean correctas en tu proyecto
import Serviciosintegrales from './Serviciosintegrales.png'; 
import InicioLogo from './inicio.jpg'; 

import { GiVacuumCleaner, GiCook } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaSprayCan } from "react-icons/fa6";

const ServiciosIntegrales = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const primaryColor = '#002665';
    const secondaryColor = '#4fabc4';

    const scrollToContact = () => {
        // La navegación del botón CTA sigue intacta
        window.location.href = '/contacto'; 
    };

    // Define las tarjetas de servicios sin propiedad 'enlace'
    const serviciosLimpieza = [
        {
            titulo: "Puestos de Trabajo y Oficinas",
            descripcion: "Limpieza de escritorios, equipos informáticos, sillas y superficies, manteniendo la ergonomía intacta.",
            icono: HiBuildingOffice,
        },
        {
            titulo: "Zonas Comunes y Pasillos",
            descripcion: "Control de polvo y brillo en áreas de alto tránsito para una bienvenida siempre impecable.",
            icono: BsDoorOpenFill,
        },
        {
            titulo: "Cocinas y Comedores",
            descripcion: "Limpieza y desinfección de encimeras, electrodomésticos y gestión de residuos para evitar malos olores.",
            icono: GiCook,
        },
    ];

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
                                    color: primaryColor, 
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
                                    color: primaryColor, 
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
                                    color: primaryColor, 
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
                                    color: primaryColor, 
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

            {/* Héroe específico de Limpieza */}
            <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
                <img 
                    src={Serviciosintegrales} 
                    alt="Equipo de Limpieza Profesional" 
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
                        LIMPIEZA
                    </h1>
                </div>
            </div>

            {/* Introducción al Servicio */}
            <div className="container my-5 py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h2 className="text-center mb-4" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
                            Limpieza Profesional y Mantenimiento de Instalaciones
                        </h2>
                        <p className="lead text-center mb-5" style={{ color: '#666' }}>
                            Ofrecemos soluciones de limpieza y mantenimiento diseñadas a medida para entornos corporativos, industriales y comerciales. Garantizamos espacios higiénicos, seguros y que proyecten la mejor imagen para su empresa.
                        </p>
                        
                        <div className="row g-4 text-center">
                            <div className="col-md-6">
                                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                                    <GiVacuumCleaner size={40} color={primaryColor} className="mb-3" />
                                    <h4 style={{ color: primaryColor, fontWeight: '600' }}>Limpieza Diaria y Profunda</h4>
                                    <p style={{ color: '#666' }}>Programas de limpieza flexibles que se adaptan a su horario, asegurando la desinfección total de superficies y áreas de alto tráfico.</p>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: `5px solid ${secondaryColor}` }}>
                                    <FaSprayCan size={40} color={primaryColor} className="mb-3" />
                                    <h4 style={{ color: primaryColor, fontWeight: '600' }}>Servicios Especializados</h4>
                                    <p style={{ color: '#666' }}>Limpieza de cristales en altura, tratamiento de suelos, desinfección profunda y control de plagas con protocolos certificados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de Especialidades con Hover y Línea Azul (Sin enlaces) */}
            <div style={{ backgroundColor: '#e9ecef', padding: '60px 0' }}>
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: primaryColor, fontWeight: '700', fontSize: '2.5rem' }}>
                        Servicios Específicos por Área
                    </h2>
                    <div className="row g-5">

                        {serviciosLimpieza.map((servicio, index) => (
                            <div className="col-md-4" key={index}>
                                {/* ELIMINADA la etiqueta <a> */}
                                <div 
                                    className="text-center p-4 h-100" 
                                    style={{ 
                                        backgroundColor: 'white', 
                                        borderRadius: '12px', 
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                        borderBottom: `5px solid ${secondaryColor}`, // Línea azul inferior
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Transición para el hover
                                        cursor: 'default' // Cambia el cursor a la flecha estándar
                                    }}
                                    // Efecto Hover
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
                                {/* FIN de la modificación */}
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
                                ¡Transforma tus Espacios con un Servicio de Confianza!
                            </h3>
                            <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                                Agenda una visita técnica sin compromiso y recibe un plan de limpieza a la medida.
                            </p>
                            <button 
                                className="btn btn-lg" 
                                style={{ backgroundColor: secondaryColor, color: 'white', padding: '12px 30px', fontSize: '1.1rem', border: 'none', fontWeight: '600' }}
                                onClick={scrollToContact}
                            >
                                Solicitar Evaluación Gratuita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiciosIntegrales;