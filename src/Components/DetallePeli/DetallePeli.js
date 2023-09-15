import React, { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Loader from "../Loader/Loader";
import detallepeli from "./detallepeli.css";
import loading from "../../assets/loading.gif";


let imagen = "https://image.tmdb.org/t/p/w342";

class DetallePeli extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      peliDetail: false,
      textoBotonFav: (
        <AiOutlineHeart style={{ color: "white", fontSize: "27px" }} />
      ),
      favoritos: [],
    };
  }

  componentDidMount() {
    let arrayFavoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");
    if (recuperoStorage !== null) {
      arrayFavoritos = JSON.parse(recuperoStorage);

      if (arrayFavoritos.includes(this.state.id)) {
        this.setState({
          textoBotonFav: (
            <AiFillHeart style={{ color: "pink", fontSize: "27px" }} />
          ),
        });
      }
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          peliDetail: data,
        })
      )
      .catch((e) => console.log(e));
  }

  agregarAFavoritos(id) {
    // Agregar un id dentro de array y colocar ese array en localStorage
    let arrayFavoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");

    if (recuperoStorage !== null) {
      arrayFavoritos = JSON.parse(recuperoStorage);

      if (arrayFavoritos.includes(this.state.id)) {
        //Si está el id en el array, sacarlo
        arrayFavoritos = arrayFavoritos.filter(
          (unId) => unId !== this.state.id
        );
        this.setState({
          textoBotonFav: (
            <AiOutlineHeart style={{ color: "white", fontSize: "27px" }} />
          ),
        });
      } else {
        arrayFavoritos.push(this.state.id);
        this.setState({
          textoBotonFav: (
            <AiFillHeart style={{ color: "pink", fontSize: "27px" }} />
          ) /* "Remove from favorites" */,
        });
      }
    }
    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos);
    localStorage.setItem("favoritos", arrayFavoritosAString);
    console.log(localStorage);
  }
  render() {
    console.log(this.state.peliDetail);
    return (
      <main>
      {this.state.peliDetail &&
            this.state.peliDetail.genres.length > 0 ? (
              <React.Fragment>
              <section className="titulo_texto">
          <h1 className="titulo">{this.state.peliDetail.original_title}</h1>
          <article className="texto_arriba_foto">
            <p className="descripcion_arriba" id="año_y_rating">
              Release: {this.state.peliDetail.release_date} - ⭐️:{" "}
              {this.state.peliDetail.vote_average}
            </p>
          </article>
        </section>

        <section className="contenido_principal">
          <article className="imagen_detalle" id="foto_portada">
            <img
              src={imagen + `${this.state.peliDetail.poster_path}`}
              alt="Poster"
              className="tapapelicula"
            />
          </article>

          <article className="texto_abajo_foto">
            <p className="descripcion_abajo" id="duracion">
              Length: {this.state.peliDetail.runtime} minutes.
            </p>
            <p className="descripcion_abajo" id="sinopsis">
              Overview: {this.state.peliDetail.overview}
            </p>
            <p className="descripcion_abajo">Genres:</p>
              
              <p className="descripcion_abajo" id="generos_pelicula">
                {this.state.peliDetail.genres.map((genres) => {
                  return 
                  <React.Fragment>
                  <p className="link_botones_generos">{genres.name}</p>
                  <button
                    onClick={() => this.agregarAFavoritos(this.props.id)}
                    className="linkadetalle"
                    type="button"
                  >
                    {" "}
                    {this.state.textoBotonFav}
                  </button>
                  </React.Fragment>;
                })}
              </p>
              </article>
        </section>
              </React.Fragment>
            ) : (
              <Loader/>
            )




         

             } </main>
    );
  }
}

export default DetallePeli;
