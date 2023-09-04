import React, { Component } from "react";
import Card from "../Card/Card";
import cardscontainer from "./cardscontainer.css";

class CardsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrayDePelis : [],
        }
    }

    componentDidMount(){
        console.log("Estamos en componentDidMount");
        let urlPelis = this.props.url
        fetch(urlPelis)
            .then(response => response.json())
            .then( data => this.setState({
                arrayDePelis: data.results,
            }))
            .catch(e => console.log(e))
    }

    render(){
    return(
        <section className="seccionPeliSerie">
        
        {
            this.state.arrayDePelis.map((Obj, i)=>{
                console.log(this.state);
                if (i<=6) {                     // Con esta línea llevamos solo 5 peliculas y no las 20 que guardamos en this.state
                    return( <Card title={ this.props.esPeli ? Obj.title : Obj.name} poster={Obj.poster_path}/> )
                } else{ return (null)}     
            })
        }
        </section>
    )}

    }
    
export default CardsContainer;
