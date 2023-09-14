import React, {Component} from "react";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import Loader from "../Loader/Loader";
import card from "./card.css";

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            descOculta: true,
            textoBotonDesc: "Show description",
            textoBotonFav: <AiOutlineHeart style={{color: 'white', fontSize: '27px'}}/>,
            gitfavoritos: []
        }
    }

    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        console.log(recuperoStorage)
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.props.id)){
            this.setState({
                textoBotonFav: <AiFillHeart style={{color: 'pink', fontSize: '27px'}}/>
             })
           }     
        }

    }

    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        console.log(recuperoStorage)

        if(recuperoStorage){
            console.log(recuperoStorage);
            arrayFavoritos = JSON.parse(recuperoStorage);
        }
        if(arrayFavoritos.includes(this.props.id)){
            //Si está el id en el array, sacarlo
            arrayFavoritos = arrayFavoritos.filter(unId => unId !== this.props.id);
            this.setState ({
                textoBotonFav: <AiOutlineHeart style={{color: 'white', fontSize: '27px'}}/>
            })
        }else{
            arrayFavoritos.push(this.props.id);
            this.setState({
                textoBotonFav: <AiFillHeart style={{color: 'pink', fontSize: '27px'}}/>/* "Remove from favorites" */
        })
        }
    
    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)
    console.log(localStorage)
    
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
        <button className="linkadetalle">
            <Link className="link" to= {`./detPelicula/${this.props.id}`}>More info</Link>

        </button>
        
        <button onClick={()=>this.agregarAFavoritos(this.props.id)} className='linkadetalle like' type="button"> { this.state.textoBotonFav }</button>
        <button onClick={()=>this.mostrarDesc()} className='linkadetalle' type="button">{ this.state.textoBotonDesc}</button>
        <p className="nombrePeliOSerie">{this.props.title}</p>
        <p className={this.state.descOculta ? 'ocultar':'ver' }>{this.props.description}</p>
        <Loader loading={this.state.loading} />
        </article>
    )
    }
}

export default Card;