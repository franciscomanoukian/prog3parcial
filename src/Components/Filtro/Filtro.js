import React, { Component } from "react";
import filtro from "./filtro.css";

class Filtro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorDelInput: "",
    };
  }

  controlarEnvio(event) {
    event.preventDefault();
    console.log(this.state.valorDelInput);
    this.props.handle(this.state.valorDelInput);
  }

  guardarDatosDelInput(eventoEnCampoInput) {
    this.setState(
      {
        valorDelInput: eventoEnCampoInput.target.value,
      },
      () => console.log(this.state.valorDelInput)
    ); //Usando el 2do parámetro de setState nos aseguramos que la función trabaje con el estado actualizado

    //console.log(this.state.valorDelInput); //Ejecutar una función acá puede que falle por tener info incompleta
  }

  render() {
    return (
      <form
        className="formbusqueda"
        action=""
        onSubmit={(e) => this.controlarEnvio(e)}
      >
        <input
          classname="inputbusqueda"
          placeholder="Filter Movies"
          type="text"
          name="filtro"
          onChange={(e) => this.guardarDatosDelInput(e)}
          value={this.state.valorDelInput}
        />
        <button className="submitbtn" type="submit">
          Filter
        </button>
      </form>
    );
  }
}

export default Filtro;
