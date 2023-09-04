import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <h3>Películas Populares</h3>
      <CardsContainer esPeli={true} url="https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1"/>
      <h3>Series Populares</h3>
      <CardsContainer esPeli={false} url='https://api.themoviedb.org/3/tv/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
      <h3>Series más vistas</h3>
      <CardsContainer esPeli={false} url='https://api.themoviedb.org/3/tv/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
      <Footer/>
    </div>
  );
}

export default App;
