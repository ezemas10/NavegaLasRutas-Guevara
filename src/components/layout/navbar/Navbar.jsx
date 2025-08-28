import "./Navbar.css";

import { CartWidget } from "../../common/cartWidget/CartWidget";
import logoCelesteTienda from '../../../assets/icons/logocelesteTienda.png';
import { Link } from "react-router";

export const Navbar = ({contador}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-estilopropio fixed-top">
      <div className="container-fluid">

        <div className="d-flex align-items-center gap-3">
            <CartWidget/>
          </div>

        <Link to="/"><img className="logonav" src={logoCelesteTienda} alt="Logo Consultorios Podológicos" /></Link>

        <button className="navbar-toggler navbar-buttonpropio" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon navbar-buttonpropio"></span>
            </button>
            <div className="collapse navbar-collapse navbar-collapse-propia" id="navbarNav">
              <ul className="navbar-nav navegacionpropia">
                <li className="nav-item">
                  <Link className="nav-link links-propios" to="/">Todos los Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link links-propios" to="/categoria/ortopedia">Productos Ortopédicos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link links-propios" to="/categoria/cremas">Cremas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link links-propios" to="/categoria/preparados">Preparados</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link links-propios" to="/categoria/categoria4">Categoría 4</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link links-propios" to="/categoria/categoria5">Categoría 5</Link>
                </li> */}
              </ul>
            </div>

      </div>
    </nav>
  );
};