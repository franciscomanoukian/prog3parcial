import React from "react";
import LogoSolo from "../../assets/LogoSolo.png";
import Dropdown from "../Dropdown/Dropdown";
import {CgSearch} from "react-icons/cg";
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

        <form className="formbusqueda" action="./searchResults" method="get">
            <input className="inputbusqueda" type="text" name="buscar" id="" placeholder="Movie or serie"/>
            <button className="submitbtn" type="submit"><CgSearch style={{color: 'white', fontSize: '1vw'}}/></button>
        </form>
    </nav>
</header>
    )
}

export default Header;