import React, { Component } from "react";
import Filtro from "../Filtro/Filtro";
import Card from "../Card/Card";
import pelistop from "./pelistop.css";
import CardsContainer from "../CardsContainer/CardsContainer";

class PelisTop extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      filtraste: false,
      paginaPelis: 1,
      nextPage: 0,
    };
  }

  componentDidMount() {
    console.log("En componentDidMount");
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=${this.state.paginaPelis}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          paginaPelis: this.state.paginaPelis + 1,
        })
        
      )
      .catch((e) => console.log(e));
      
  }

  filtrarPeliculas = (textoAFiltrar) => {
    console.log(textoAFiltrar);
    //  Desarrollar el método
    let pelisFiltradas = this.state.peliculas.filter(function (unaPelicula) {
      //tenemos que chequear si el texto a filtrar está dentro del nombre del personaje. Usemos la funcuión includes()
      return unaPelicula.title
        .toUpperCase()
        .includes(textoAFiltrar.toUpperCase());
    });
    console.log(pelisFiltradas);

    this.setState({
      peliculas: pelisFiltradas,
      filtraste: true,
    });
  };

  render() {
    console.log(this.state.paginaPelis);
    return (
      <main>
        <h1>Top rated movies</h1>
        {this.state.filtraste ? (
          <h2>Can't load more after filter!</h2>
        ) : (
          <button
            onClick={() => this.cargarPeliculas()}
            className="linkadetalle"
          >
            Show more
          </button>
        )}
        <h3>Filter results:</h3>
        <Filtro handle={this.filtrarPeliculas} />
        

        <section className="seccionPeliSerie">
          <CardsContainer
            arrayMovies={this.state.peliculas}
            mostrarCinco={false}
          />
        </section>
        {this.state.filtraste ? (
          <h2>Can't load more after filter!</h2>
        ) : (
          <button
            onClick={() => this.cargarPeliculas()}
            className="linkadetalle"
          >
            Show more
          </button>
        )}
      </main>
    );
  }
}

export default PelisTop;
