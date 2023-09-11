import React from "react";
import error404 from "../../assets/ERROR 404.jpg";
import notFound from "./notFound.css"

function NotFound () {
    return(
        <div class="sketchfab-embed-wrapper">
{/*             <img src={error404}/> */} {/* VER COMO PONER CARROUSEL PARA EL ERROR */}
         
        <iframe title="dinosaur_animation" frameborder="0" allowfullscreen allow="autoplay" src="https://sketchfab.com/models/e0213e4821ec407eb9921673b387770c/embed" />
        </div>
    )
}

export default NotFound;