import React, { Component } from 'react';
import './App.css';

//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {
    render() {
        return ( 
          <div className = 'App-header'>
            <div>
              <NavBar />
              <ItemListContainer greeting={"Bienvenidos a la galería de Cocó! Proximamente fotos y dibujos a la venta."} />
            </div>
         </div>
        );
    }
}

export default App;
