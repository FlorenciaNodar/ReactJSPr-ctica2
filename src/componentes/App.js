import React, { Component } from 'react';
import '../css/app.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helpers/Helpers';
import ControlPresupuesto from './ControlPresupuesto';
class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      presupuesto: '',
      restante: '',
      gastoSemanal: {}
    }
  }
  

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto ?');
    let resultado =  validarPresupuesto(presupuesto);
    if(resultado)
    this.setState({
      presupuesto: presupuesto,
      restante: presupuesto
    })
    else
    this.obtenerPresupuesto();
  }

  //Agregar un nuevo gasto al state
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastoSemanal};
    
    //Agregara el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;

    //restar el presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);
    //Ponerlo en state
    this.setState({
      gastoSemanal: gastos
    })

  }


  //Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad =>{
    //Leer el gasto
    let restar = Number(cantidad);

    //Tomar copia del state actual restante
    let restante = this.state.restante;

    //lo restamos
    let totalRestante = restante - restar;
    //agregamos para actualizar al state con el nuevo dato
    this.setState({restante: totalRestante});
  }

  render() {
    return (
      <div className="App container">
      <Header titulo='Gasto semanal' />
      <div className="contenido-principal contenido">
         <div className="row">
           <div className="one-half column">
              <Formulario agregarGasto={this.agregarGasto}/>
           </div>
           <div className="one-half column">
              <Listado gastos={this.state.gastoSemanal}/>
              <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante}/>
           </div>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
