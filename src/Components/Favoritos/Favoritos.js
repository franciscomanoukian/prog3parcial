import React, { Component } from "react";

class Favoritos extends Component{
    constructor(){
    super();
    }

   recuperoStorage(){
    let arrayFavs = localStorage.getItem('favoritos');
    let arrayRecuperado = JSON.parse(arrayFavs);
    return arrayRecuperado
   }

   componentDidMount(){
    console.log(this.recuperoStorage()) 
   }

    

    
    
    
    
    
    
    
    render(){
       
        return(
            <h1>My favorites</h1>
        )
    }
}

export default Favoritos;