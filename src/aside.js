import { useEffect } from 'react';
import feather from 'feather-icons';

const Aside = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <aside className="mt-5 ms-3">
      <form>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Nombre de Usuario
          </label>
          <input type="text" className="form-control" id="inputUsername" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            <i data-feather="mail" className="me-2"></i>
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            <i data-feather="lock" className="me-2"></i>
            Contraseña
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <button type="submit" className="btn btn-primary">
          <i data-feather="user-plus" className="me-2"></i>
          Registrarse
        </button>
      </form>
    </aside>
  );
};

export default Aside;