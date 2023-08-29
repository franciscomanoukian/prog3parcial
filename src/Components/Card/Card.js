import React from "react";
import card from "./card.css";

function Card(){
    return(
        <article class="peliOSerie">
        <p class="nombrePeliOSerie">TÍTULO SERIE/PELI</p>
        <img src=''  alt="nombre de la peli" class="tapapelicula"/>
        <a href="" class="linkadetalle">Ver más</a>
        </article>
    )
}

export default Card;