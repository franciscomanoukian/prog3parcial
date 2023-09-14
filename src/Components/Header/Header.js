import React from "react";
import LogoSolo from "../../assets/LogoSolo.png";
import { CgSearch } from "react-icons/cg";
import header from "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section className="headerIzquierda">
        <img className="logoheader" src={LogoSolo} alt="Logo Empresa" />
        <a href="/" className="nombrepagina">
          <h2 className="nombrepagina">Wawa Max</h2>
        </a>
      </section>

      <nav className="headerDerecha">
        <article className="linksHeader">
          <Link to="/favoritos" className="linkfavoritos">
            My Favorites
          </Link>
          <Link to="/popular" className="linkfavoritos">
            Popular
          </Link>
          <Link to="/toprated" className="linkfavoritos">
            Top Rated
          </Link>
        </article>
      </nav>
    </header>
  );
}

export default Header;
