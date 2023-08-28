import React from "react";
import LogoSolo from "../../assets/LogoSolo.png"
import header from "./header.css"

function Header (){
    return(
        <header>
    <section class = "headerIzquierda">
        <img class="logoheader" src={LogoSolo} alt="Logo Empresa"/>
        <a href="./home.html" class="nombrepagina"><h2 class="nombrepagina">Wawa Max</h2></a>
    </section>

    <nav class="headerDerecha">
        <article class="linksHeader">
            <a class="linkfavoritos" href="./favoritos.html">Favoritos</a>
            <a class="linkgeneros" href="./generos.html">Géneros</a>
        </article>
        <form class="formbusqueda" action="./searchresults.html" method="get">
            <input class="inputbusqueda" type="text" name="buscar" id="" placeholder="Película o Serie"/>
            <button class="submitbtn" type="submit">Buscar</button>
        </form>
    </nav>
</header>
    )
}

export default Header;