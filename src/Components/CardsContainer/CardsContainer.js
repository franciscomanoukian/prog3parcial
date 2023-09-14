import React, { Component } from "react";
import Card from "../Card/Card";
import cardscontainer from "./cardscontainer.css";

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <section className="seccionPeliSerie">
        {this.props.arrayMovies.map((Obj, i) => {
          console.log(this.state);
          if (this.props.mostrarCinco) {
            if (i < 5) {
              // Con esta línea llevamos solo 5 peliculas y no las 20 que guardamos en this.state
              return (
                <Card
                  title={Obj.title}
                  poster={Obj.poster_path}
                  description={Obj.overview}
                  id={Obj.id}
                />
              );
            } else {
              return null;
            }
          } else {
            return (
              <Card
                title={Obj.title}
                poster={Obj.poster_path}
                description={Obj.overview}
                id={Obj.id}
              />
            );
          }
        })}
      </section>
    );
  }
}

export default CardsContainer;
