import React from "react";
import LogoSolo from "../../assets/LogoSolo.png";
import logo_tmdb from "../../assets/logo_tmdb.jpg";
import footer from "./footer.css";

function Footer(){
    return(
        <footer>
    <p className="nuestrosnombres">Esquivel, Garcia Devesa y Manoukian</p>  
    <p className="nuestrosnombres">2022 Wawa Max Corp.</p>
    <img className="logofooter" src={LogoSolo} alt="Logo"/>  
    <img src={logo_tmdb} alt="" className="logotmdb"/>
    <p className="nuestrosnombres">Need help? <a href="mailto:help@wawamax.com">help@wawamax.com</a></p>
    </footer>
    )
}

export default Footer;
