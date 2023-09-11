import React from "react";
import LogoSolo from "../../assets/LogoSolo.png";
import Dropdown from "../Dropdown/Dropdown";
import {CgSearch} from "react-icons/cg";
import header from "./header.css";
import {Link} from "react-router-dom"


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
        <Link to="/favoritos" className="linkfavoritos">Favorites</Link>
        <Link to="/movies" className="linkfavoritos">Movies</Link>
        <Link to="/series" className="linkfavoritos">Series</Link>
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