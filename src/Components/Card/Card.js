import React, {Component} from "react";
import card from "./card.css";

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            descOculta: true,
            textoBotonDesc: "Show description",
            textoBotonFav: "Add to favorites",
            favoritos: []
        }
    }

    componentDidMount(){
        let arrayFavoritos = [];

        let recuperoStorage = localStorage.getItem('favoritos')
        
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

           if(arrayFavoritos.includes(this.props.id)){
             this.setState({
                 textoBotonFav: 'Remove from favorites'
             })
           }    
        }

    }

    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = []
        arrayFavoritos.push(this.props.id)

        //Subirlo a local storage stringifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritosAString)

        this.setState({
            textoBotonFav: "Remove from favorites"
        })
        
    }

    mostrarDesc(){
        console.log('click');
        if (this.state.descOculta == true) {
            this.setState({
                descOculta: false,
                textoBotonDesc: "Hide description"
            }) 
        } else {
            this.setState({
                descOculta: true,
                textoBotonDesc: "Show description"
            })
        }
       
    }

    render(){
    return(
        <article className="peliOSerie">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}  alt={this.props.title} className="tapapelicula"/>
        <p className="nombrePeliOSerie">{this.props.title}</p>
        <button onClick={()=>this.mostrarDesc()} className='linkadetalle' type="button">{ this.state.textoBotonDesc}</button>
        <button onClick={()=>this.agregarAFavoritos(this.props.id)} className='linkadetalle' type="button">{ this.state.textoBotonFav }</button>
        <a href="" className="linkadetalle">More info</a>
        
        </article>
    )
    }
}
//FALTA RUTAAAAS EN BOTON VER MAS
export default Card;