import "./Footer.css";
import logoCeleste from '../../../assets/icons/logoceleste.png';
import logoInstagram from '../../../assets/icons/instagram.png';
import logoWhatsapp from '../../../assets/icons/whatsapp.png';
import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className= "footer">

        <div className="foot-container">

            <figure>
                <Link to="/"><img className="logofooter" src={logoCeleste} alt="Logo Consultorios Podológicos" /></Link>
            </figure>

            <div className="linkfoot">

                <figure>
                    <a href="https://api.whatsapp.com/send?phone=5491127693304" target="_blank"><img className="icons" src={logoWhatsapp} alt="Logo Whatsapp"/></a>
                </figure>

                <figure>
                    <a href="https://www.instagram.com/consultoriopodologico33/" target="_blank"><img className="icons" src={logoInstagram} alt="Logo Instagram"/></a>
                </figure>

            </div>

        </div>
    
    <h5>33 Orientales y Av. Independencia - Boedo - CABA. Argentina. Tel/Cel: 11-2769-3304</h5>

    <p>© 2025. All rights reserved.</p>

    </div>
  );
};