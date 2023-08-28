import React from "react";
import LogoSolo from "../../assets/LogoSolo.png"
import logo_tmdb from "../../assets/logo_tmdb.jpg"
import footer from "./footer.css"

function Footer(){
    return(
        <footer>
    <p class="nuestrosnombres">Freixas, Manoukian y Lopez Teran</p>  
    <p class="nuestrosnombres">2022 Wawa Max corp.</p>
    <img class="logofooter" src={LogoSolo} alt="Logo"/>  
    <img src={logo_tmdb} alt="" class="logotmdb"/>
    <p class="nuestrosnombres">¿Necesita ayuda? <a href="mailto:help@wawamax.com">help@wawamax.com</a></p>
    </footer>
    )
}

export default Footer;