const Aside = () => {
    return (
        <aside className="mt-5 ms-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="inputUsername" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </aside>
    );
}
export default Aside;