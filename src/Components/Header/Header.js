import React from "react";
import LogoSolo from "../../assets/LogoSolo.png";
import Dropdown from "../Dropdown/Dropdown";
import header from "./header.css";


function Header (){
    return(
        <header>
    <section className = "headerIzquierda">
        
        <article><Dropdown/></article>
        <img className="logoheader" src={LogoSolo} alt="Logo Empresa"/>
        <a href="/" className="nombrepagina"><h2 className="nombrepagina">Wawa Max</h2></a>
    </section>


    <nav className="headerDerecha">
        <article className="linksHeader">
            <a className="linkfavoritos" href="/favoritos">Favorites</a>
            <a className="linkfavoritos" href="">Movies</a>
            <a className="linkfavoritos" href="">Series</a>
           
        </article>

        <form className="formbusqueda" action="./searchresults.html" method="get">
            <input className="inputbusqueda" type="text" name="buscar" id="" placeholder="Movie or serie"/>
            <button className="submitbtn" type="submit">Search</button>
        </form>
    </nav>
</header>
    )
}

export default Header;