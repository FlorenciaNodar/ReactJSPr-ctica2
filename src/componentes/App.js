import React, { Component } from 'react';
import '../css/app.css';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header titulo='Gasto semanal' />
      <div className="contenido-principal contenido">
         <div className="row">
           <div className="one-half column"></div>
           <div className="one-half column"></div>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
