import React from "react";
import LogoSolo from "../../assets/LogoSolo.png";
import header from "./header.css";

function Header (){
    return(
        <header>
    <section className = "headerIzquierda">
        <img className="logoheader" src={LogoSolo} alt="Logo Empresa"/>
        <a href="/" className="nombrepagina"><h2 className="nombrepagina">Wawa Max</h2></a>
    </section>

    <nav className="headerDerecha">
        <article className="linksHeader">
            <a className="linkfavoritos" href="/favoritos">Favoritos</a>
        </article>
        <form className="formbusqueda" action="./searchresults.html" method="get">
            <input className="inputbusqueda" type="text" name="buscar" id="" placeholder="Película o Serie"/>
            <button className="submitbtn" type="submit">Buscar</button>
        </form>
    </nav>
</header>
    )
}

export default Header;