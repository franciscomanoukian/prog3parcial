import React, { Component } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";

class Home extends Component{
    render(){
        return(
        <div className="main">
        <h3>Películas Populares</h3>
        <CardsContainer esPeli={true} url="https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1"/>
        <h3>Series Populares</h3>
        <CardsContainer esPeli={false} url='https://api.themoviedb.org/3/tv/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
        <h3>Series más vistas</h3>
        <CardsContainer esPeli={false} url='https://api.themoviedb.org/3/tv/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
        </div>
        )
    }
}

export default Home;