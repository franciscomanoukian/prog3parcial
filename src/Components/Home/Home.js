import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardsContainer from "../CardsContainer/CardsContainer";
import Search from "../Search/Search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDePelisPopulares: [],
      arrayDePelisTopRated: [],
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Estamos en componentDidMount");
    let urlPelisPopulares =
      "https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1";
    let urlPelisTop =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1";
    fetch(urlPelisPopulares)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          arrayDePelisPopulares: data.results,
          loading: false,
        })
      )
      .catch((e) => console.log(e));
    fetch(urlPelisTop)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          arrayDePelisTopRated: data.results,
          loading: false,
        })
      )
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <main>
        <h3>Search all movies</h3>
        <Search/>
        <h3>
          Popular Movies{" "}
          <button className="linkadetalle">
            <Link to="/popular" className="linkfavoritos">
              See all
            </Link>
          </button>
        </h3>
        <CardsContainer
          arrayMovies={this.state.arrayDePelisPopulares}
          mostrarCinco={true}
        />
        <h3>
          Top Rated Movies{" "}
          <button className="linkadetalle">
            <Link to="/toprated" className="linkfavoritos">
              See all
            </Link>
          </button>
        </h3>
        <CardsContainer
          arrayMovies={this.state.arrayDePelisTopRated}
          mostrarCinco={true}
        />
      </main>
    );
  }
}

export default Home;
