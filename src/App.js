import React from 'react';


function App() {
  return (
    <React.Fragment>
      {/* Barra de navegacion Superior */}
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          {/* Boton para Menu Desplegable */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu de Navegacion">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Galeria</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Sobre Mi</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Contacto</a>
              </li>
            </ul>
          </div>
          <img src="assets/images/textoSm.png" className="img-fluid" alt="smLogo"/>
        </div>
      </nav>
      {/* Fin de la barra de Navegacion */}

      {/* Imagen Principal */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <img src="assets/images/mainPictureSm.jpg" alt="logoSm" className="img-fluid no-gutters d-md-none"/>
            <img src="assets/images/mainPicture.jpg" alt="logoSm" className="img-fluid no-gutters d-none d-md-block"/>
          </div>


          {/* Descripcion */}
          <div className="col-12 col-md-10 col-lg-6">
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident, rem autem et obcaecati reiciendis excepturi natus error eaque dignissimos aliquid quos ipsam quis molestias consectetur delectus tenetur, sunt deleniti!</p>
          </div>

          {/* Albumes */}
          <div className="col-12 description">
            <h4>Algunas de mis Fotos:</h4>
            <div className="row">
              <div className="col-4 picture">
                <img src="assets/images/varias/camera.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/dog.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/louvre.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/mountainDock.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/paris.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/sideline.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/squirrel.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>
              <div className="col-4 picture">                
                <img src="assets/images/varias/wedding.jpg" className="img-fluid no-gutters" alt="sampleImg"/>
              </div>              
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
