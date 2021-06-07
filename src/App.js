import React, { Component } from 'react';
import './App.css';

//COMPONENTES
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return ( 
          <div className = 'App-header'>
            <div>
              <NavBar />
              <h4>Esta es la galería de fotos y dibujos de Coco.</h4>
            </div>
         </div>
        );
    }
}

export default App;
