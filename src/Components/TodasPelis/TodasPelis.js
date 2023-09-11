import React, {Component} from 'react';
import Filtro from "../Filtro/Filtro";
import Card from '../Card/Card';
import todaspelis from "./todaspelis.css";


class TodasPelis extends Component{
    constructor(){
        super();
        this.state = {
           peliculas : [],
           filtraste : false,
           paginaPelis : 1,
           nextPage : 0
        }
    }

    componentDidMount(){
        console.log("En componentDidMount");
        this.cargarPeliculas()
        
    }

    cargarPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=${this.state.paginaPelis}`)
        .then(response => response.json())
        .then( data => this.setState({
            peliculas: this.state.peliculas.concat(data.results),
            paginaPelis: this.state.paginaPelis+1
        }))
        .catch(e => console.log(e))
        
    }

    filtrarPeliculas=(textoAFiltrar)=>{
        console.log(textoAFiltrar);
    //  Desarrollar el método
       let pelisFiltradas = this.state.peliculas.filter(function(unaPelicula){
            //tenemos que chequear si el texto a filtrar está dentro del nombre del personaje. Usemos la funcuión includes()
            return unaPelicula.title.toUpperCase().includes(textoAFiltrar.toUpperCase())
        })
        console.log(pelisFiltradas);

        this.setState({
            peliculas: pelisFiltradas,
            filtraste: true
        })
        
    }

    render(){
        console.log(this.state.paginaPelis);
    return(
       <div>
       <Filtro handle={this.filtrarPeliculas}/>
        {this.state.filtraste?<p>No puede cargar pelis luego de filtro</p>:<button onClick={()=>this.cargarPeliculas()} className='linkadetalle'>Cargar más</button>}
       
        <section className="seccionPeliSerie">
        
        {
            this.state.peliculas.map((Obj)=>{

                    return( <Card title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id}/> )
                     
            })
        }
        </section>
        </div>
    )
}
}

export default TodasPelis