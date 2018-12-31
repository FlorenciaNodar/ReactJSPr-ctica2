import React, {Component} from 'react';

class Restante extends Component
{
    render(){
        return(
            <div className="alert alert-success">
            <p>Restante: ${this.props.restante}</p>
            </div>        
            );
    }
}

export default Restante;
