import React, { Component } from "react";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import detallepeli from "./detallepeli.css"

let imagen = "https://image.tmdb.org/t/p/w342"

class DetallePeli extends Component{
    constructor(props){
        super(props)
       
        this.state = {
            id: this.props.match.params.id,
            peliDetail : {},
            textoBotonFav: <AiOutlineHeart style={{color: 'white', fontSize: '27px'}}/>,
            favoritos: []
        }
    }
    
    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.state.id)){
            this.setState({
                textoBotonFav: <AiFillHeart style={{color: 'pink', fontSize: '27px'}}/>
             })
           }     
        }

        //OJO!!!!!!!!!! ES OTRO URL
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`)
            .then(response => response.json())
            .then( data => this.setState({
                peliDetail: data
            }))
            .catch(e => console.log(e))
    }


    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.state.id)){
            //Si está el id en el array, sacarlo
            arrayFavoritos = arrayFavoritos.filter(unId => unId !== this.state.id);
            this.setState ({
                textoBotonFav: <AiOutlineHeart style={{color: 'white', fontSize: '27px'}}/>
            })
        }else{
            arrayFavoritos.push(this.state.id);
            this.setState({
                textoBotonFav: <AiFillHeart style={{color: 'pink', fontSize: '27px'}}/>/* "Remove from favorites" */
        })
        }
    }
    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)
    console.log(localStorage)
    
}
    render(){
        console.log(this.state.peliDetail);
        return(
            
                <section>
           
          

        
            <article className="imagen_detalle">
                <div> <img src= { imagen + `${this.state.peliDetail.poster_path}`} alt="Poster" id="foto_portada"/></div>
                <div>
                <p className="descripcion_abajo" id="rating">Rating: {this.state.peliDetail.vote_average}</p>
                <p className="descripcion_abajo" id="releaseDate">Release Date: {this.state.peliDetail.release_date}</p>
                <p className="descripcion_abajo" id="duracion">Length: {this.state.peliDetail.runtime} mins.</p>
                <p className="descripcion_abajo" id="sinopsis">{this.state.peliDetail.overview}</p>
                  {/* VER  */} {/*   <p class="descripcion_abajo">Géneros: {this.state.peliDetail.genres} </p> */}
                <button onClick={()=>this.agregarAFavoritos(this.props.id)} className='linkadetalle' type="button"> { this.state.textoBotonFav }</button>
                
                </div>
            </article>
        </section>
    
        )
    }
}

export default DetallePeli;