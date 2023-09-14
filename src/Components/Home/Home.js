import React, { Component } from "react";
import {Link} from "react-router-dom"
import CardsContainer from "../CardsContainer/CardsContainer";

class Home extends Component{
    render(){
        return(
        <div className="main">
        <h3>Popular Movies <button><Link to="/popular" className="linkfavoritos">See all</Link></button></h3>
        <CardsContainer url="https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1"/>
        <h3>Top Rated Movies <button><Link to="/toprated" className="linkfavoritos">Se all</Link></button></h3>
        <CardsContainer url='https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
        </div>
        )
    }
}

export default Home;