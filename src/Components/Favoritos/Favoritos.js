import React, { Component } from "react";
import Card from "../Card/Card";

class Favoritos extends Component {
  constructor() {
    super();
    this.state = {
      arrayDePelis: [],
    };
  }

  recuperoStorage() {
    let arrayFavs = localStorage.getItem("favoritos");
    let arrayRecuperado = JSON.parse(arrayFavs);
    return arrayRecuperado;
  }

  componentDidMount() {
    const listaIds = this.recuperoStorage();
    const listaFavs = [];
    listaIds.map((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          
            const listaFavs = this.state.arrayDePelis;
            listaFavs.push(data)
            this.setState({ arrayDePelis: listaFavs});
          
        })
        .catch((e) => console.log(e));
    });
  }

  render() {
    return (
      <section className="seccionPeliSerie">
        {this.state.arrayDePelis.length>0? (
          this.state.arrayDePelis.map((Obj, i) => {
            console.log(this.state);
            if (i < 5) {
              // Con esta línea llevamos solo 5 peliculas y no las 20 que guardamos en this.state
              return (
                <Card
                  key={i}
                  title={this.props.esPeli ? Obj.title : Obj.name}
                  poster={Obj.poster_path}
                  description={Obj.overview}
                  id={Obj.id}
                  esPeli={this.props.esPeli ? true : false}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <h2>No hay peliculas</h2>
        )}
      </section>
    );
  }
}

export default Favoritos;
