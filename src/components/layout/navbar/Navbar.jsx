import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import logoCelesteTienda from '../../../assets/icons/logocelesteTienda.png';

export const Navbar = ({ contador }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-estilopropio fixed-top">
      <div className="container-fluid">

        <div className="d-flex align-items-center gap-3">
            <CartWidget />
            <span className="counterClass"> {contador} </span> 
          </div>

        <a href="#"><img className="logonav" src={logoCelesteTienda} alt="Logo Consultorios Podológicos"/></a>

        <button class="navbar-toggler navbar-buttonpropio" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon navbar-buttonpropio"></span>
            </button>
            <div class="collapse navbar-collapse navbar-collapse-propia" id="navbarNav">
              <ul class="navbar-nav navegacionpropia">
                <li class="nav-item">
                  <a class="nav-link links-propios" href="#">Categoría 1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links-propios" href="#">Categoría 2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links-propios" href="#">Categoría 3</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links-propios" href="#">Categoría 4</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links-propios" href="#">Categoría 5</a>
                </li>
              </ul>
            </div>

      </div>
    </nav>
  );
};