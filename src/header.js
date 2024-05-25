import { useEffect } from 'react';
import feather from 'feather-icons';

const Header = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i data-feather="box" className="me-2"></i> {/* Cambia "box" por el ícono que elijas */}
            CSGO.SKINS
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                style={{
                  width: 'auto',
                  backgroundColor: '#343a40',
                  color: '#fff',
                }}
              />
              <button className="btn btn-outline-success" type="submit" style={{ padding: '0.375rem 0.75rem' }}>
                <i data-feather="search"></i> Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;