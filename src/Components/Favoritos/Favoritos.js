import React, { Component } from "react";
import Card from "../Card/Card";
import CardsContainer from "../CardsContainer/CardsContainer";
import favoritos from "./favoritos.css";
import nothing from "../../assets/nothing.gif";

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
    if (arrayRecuperado == null) {
      return []
    } else {
      return arrayRecuperado
    }
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
          console.log(data);

          const listaFavs = this.state.arrayDePelis;
          listaFavs.push(data);
          this.setState({ arrayDePelis: listaFavs });
        })
        .catch((e) => console.log(e));
    });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        {this.state.arrayDePelis.length > 0 ? (
          <CardsContainer
            arrayMovies={this.state.arrayDePelis}
            mostrarCinco={false}
          />
        ) : (
          <React.Fragment>
          <h2 className="textFavs">No favorites found</h2>
          <div className="noFavs">
          <img clssName="gifFavs" src={nothing} alt="No favorites found" />
          </div>
          </React.Fragment>
        )}
      </main>
    );
  }
}

export default Favoritos;
