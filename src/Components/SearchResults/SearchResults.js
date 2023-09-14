import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: "" };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    let favourites = [];
    let recuperoStorage = localStorage.getItem("favourites");

    if (recuperoStorage !== null) {
      let storageToArray = JSON.parse(recuperoStorage);
      favourites = storageToArray;

      console.log(favourites);
      if (favourites.includes(this.props.data.id)) {
        this.setState({
          favsText: "Delete from favourites",
        });
      }
    }
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
    console.log(this.state);
  }
  render() {
    return <h2>Hola</h2>;
  }
}

export default SearchResults;
