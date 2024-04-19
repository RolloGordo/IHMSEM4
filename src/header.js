const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CSGO.SKINS</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;