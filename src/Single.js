import React from 'react';
import { useParams } from 'react-router-dom';

const Single = () => {
  const { id } = useParams();
  
  let content;
  if (id === '1') {
    content = (
      <>
        <h1>AWP Dragon Lore</h1>
        <p>La AWP Dragon Lore es una de las skins más icónicas y caras en el juego de Counter-Strike: Global Offensive. Con un diseño inspirado en dragones y un precio que puede llegar a miles de dólares, es una de las más buscadas por los coleccionistas.</p>
        <img src="https://skinlords.com/wp-content/uploads/2022/11/most-expensive-awp-skins-in-csgo-1.jpg" className="img-detail" alt="AWP Dragon Lore" />
      </>
    );
  } else if (id === '2') {
    content = (
      <>
        <h1>Karambit</h1>
        <p>Las cuchillas Karambit en CS:GO son conocidas por su estilo único y atractivo. Con un diseño curvo y elegante, estas cuchillas son altamente valoradas por su rareza y apariencia.</p>
        <img src="https://cdn.mos.cms.futurecdn.net/kRXCr3PNhV5bppZsvnkkCk-1200-80.png" className="img-detail" alt="Karambit" />
      </>
    );
  } else if (id === '3') {
    content = (
      <>
        <h1>Guantes Rosados</h1>
        <p>Los guantes rosados en CS:GO son muy codiciados por su diseño llamativo y raro. Estos guantes no solo ofrecen protección, sino que también añaden un toque de estilo a tu personaje.</p>
        <img src="https://i.ytimg.com/vi/WTef44bNNzg/maxresdefault.jpg" className="img-detail" alt="Guantes Rosados" />
      </>
    );
  } else {
    content = <p>Elemento no encontrado.</p>;
  }

  return (
    <div className="container mt-5">
      {content}
    </div>
  );
};

export default Single;