import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import logoCelesteTienda from '../../../assets/icons/logocelesteTienda.png';
import { Link } from "react-router";

export const Navbar = ({ contador }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-estilopropio fixed-top">
      <div className="container-fluid">

        <div className="d-flex align-items-center gap-3">
            <CartWidget />
            <span className="counterClass"> {contador} </span> 
          </div>

        <Link to="/"><img className="logonav" src={logoCelesteTienda} alt="Logo Consultorios Podológicos" /></Link>

        <button class="navbar-toggler navbar-buttonpropio" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon navbar-buttonpropio"></span>
            </button>
            <div class="collapse navbar-collapse navbar-collapse-propia" id="navbarNav">
              <ul class="navbar-nav navegacionpropia">
                <li class="nav-item">
                  <Link className="nav-link links-propios" to="/categoria1">Categoría 1</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link links-propios" to="/categoria1">Categoría 2</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link links-propios" to="/categoria1">Categoría 3</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link links-propios" to="/categoria1">Categoría 4</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link links-propios" to="/categoria1">Categoría 5</Link>
                </li>
              </ul>
            </div>

      </div>
    </nav>
  );
};