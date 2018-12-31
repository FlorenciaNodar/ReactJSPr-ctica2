import React, {Component} from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
class ControlPresupuesto extends Component
{
    render(){
        return(
            <React.Fragment>
                <Presupuesto>

                </Presupuesto>
                <Restante>

                </Restante>
            </React.Fragment>
        );
    }
}

export default ControlPresupuesto;
