const Main = () => {
    return (
        <main className="mt-5 ms-md-3">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://skinlords.com/wp-content/uploads/2022/11/most-expensive-awp-skins-in-csgo-1.jpg" className="d-block w-100" alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.mos.cms.futurecdn.net/kRXCr3PNhV5bppZsvnkkCk-1200-80.png" className="d-block w-100" alt="Imagen 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/WTef44bNNzg/maxresdefault.jpg" className="d-block w-100" alt="Imagen 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    );
}

export default Main;