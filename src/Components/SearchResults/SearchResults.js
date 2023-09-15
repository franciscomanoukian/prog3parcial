import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import nothing from "../../assets/nothing.gif";
import searchResults from "./searchResults.css"
import CardsContainer from "../CardsContainer/CardsContainer";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { resultado: [] };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          resultado: data.results,
        })
      )
      .catch((e) => console.log(e));
  }
  controlarCambios(event) {
    this.setState({ valor: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <h2 className="resultados">Results for: '{this.props.match.params.query}'</h2>
        {this.state.resultado.length > 0 ?  <CardsContainer
          arrayMovies={this.state.resultado}
          mostrarCinco={true}
        />: <React.Fragment>
             <img src={nothing} alt="No results found"/>
            </React.Fragment>
        }
      
      </React.Fragment>
    );
  }
}

export default SearchResults;
