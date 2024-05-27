import { useEffect } from 'react';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i data-feather="box" className="me-2"></i> CSGO.SKINS
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                style={{
                  width: 'auto',
                  backgroundColor: 'var(--neutral-color)',
                  color: 'var(--background-color)',
                }}
              />
              <button className="btn btn-primary" type="submit">
                <i data-feather="search"></i> Buscar
              </button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <i data-feather="user" className="me-2"></i> Mi cuenta
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i data-feather="mail" className="me-2"></i> Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i data-feather="info" className="me-2"></i> Acerca de
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  <i data-feather="help-circle" className="me-2"></i> Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;