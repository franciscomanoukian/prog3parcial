import React from "react";
import card from "./card.css";

function Card(props){
    return(
        <article className="peliOSerie">
        <p className="nombrePeliOSerie">{props.title}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`}  alt={props.title} className="tapapelicula"/>
        <a href="" className="linkadetalle">Ver más</a>                  
        </article>
    )
}
//FALTA RUTAAAAS EN BOTON VER MAS
export default Card;