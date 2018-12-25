import React, {Component} from 'react';
import Gasto from './Gasto';

class Listado extends Component{
render(){
    return(
        <div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(this.props.gastos).map(key=>(
            <Gasto key={key} gasto={this.props.gastos[key]} />
         ))} {/*Recorro el objeto this.props.gastos y con el Object.key lo recorre, y lo va mostrando cada item en distinto objeto */}
         {/*El key es para ver que elemento estoy renderizando*/}
        </div>
    )
}

}

export default Listado;