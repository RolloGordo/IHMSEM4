import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-3 mt-auto">
      <div className="container">
        <p className="mb-1">© 2024 CSGO.SKINS. Todos los derechos reservados.</p>
        <p className="mb-0">Encuentra las mejores skins para tu juego favorito. Síguenos en nuestras redes sociales:</p>
        <div className="mt-2">
          <a href="#" className="text-white me-3"><i data-feather="facebook"></i></a>
          <a href="#" className="text-white me-3"><i data-feather="twitter"></i></a>
          <a href="#" className="text-white"><i data-feather="instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;