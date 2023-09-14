import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Loader from "../Loader/Loader";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: "" };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    let arrayFavoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");
    console.log(recuperoStorage);
    if (recuperoStorage !== null) {
      arrayFavoritos = JSON.parse(recuperoStorage);

      if (arrayFavoritos.includes(this.props.id)) {
        this.setState({
          textoBotonFav: (
            <AiFillHeart style={{ color: "pink", fontSize: "27px" }} />
          ),
        });
      }
    }
  }

  agregarAFavoritos(id) {
    // Agregar un id dentro de array y colocar ese array en localStorage
    let arrayFavoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");
    console.log(recuperoStorage);

    if (recuperoStorage) {
      console.log(recuperoStorage);
      arrayFavoritos = JSON.parse(recuperoStorage);
    }
    if (arrayFavoritos.includes(this.props.id)) {
      //Si está el id en el array, sacarlo
      arrayFavoritos = arrayFavoritos.filter((unId) => unId !== this.props.id);
      this.setState({
        textoBotonFav: (
          <AiOutlineHeart style={{ color: "white", fontSize: "27px" }} />
        ),
      });
    } else {
      arrayFavoritos.push(this.props.id);
      this.setState({
        textoBotonFav: (
          <AiFillHeart style={{ color: "pink", fontSize: "27px" }} />
        ) /* "Remove from favorites" */,
      });
    }

    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos);
    localStorage.setItem("favoritos", arrayFavoritosAString);
    console.log(localStorage);
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <article className="card-container">
          <Link to={`/movies/id/${this.props.data.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`}
              alt="Cartel película"
            />
          </Link>
          <h3>{this.props.data.title}</h3>
          <p>Release date: {this.props.data.release_date}</p>
          {this.state.viewMore ? (
            <section className="extra">
              <p>Description: {this.props.data.overview}</p>
              <p className="more" onClick={() => this.hide()}>
                View less
              </p>
            </section>
          ) : (
            <p className="more" onClick={() => this.show()}>
              View more
            </p>
          )}
          <div>
            <Link
              className="go-to-detail"
              to={`/movies/id/${this.props.data.id}`}
            >
              Go to detail
            </Link>
            <section className="favorite-container">
              <p
                className="favorite"
                onClick={() => this.addAndDeleteFavourites(this.props.data.id)}
              >
                {this.state.favsText}
              </p>
            </section>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default SearchResults;
