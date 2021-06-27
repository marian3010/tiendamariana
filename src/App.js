import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//IMPORTO VISTAS
import Contact from './Views/Contact/Contact';
import Cart from './Views/Cart/Cart';


//IMPORTO COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App () {
    return ( 
      <Router>
        <div className = 'App-header'>
          <NavBar />
            <Switch>
              <Route path="/Contact" component ={Contact} />
              <Route path="/Cart" component ={Cart} />
              <Route path="/category/:id">
                <ItemListContainer />
              </Route>
              <Route path="/products/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/">
                <ItemListContainer />
              </Route>
            </Switch>
        </div>
      </Router>
    );
}

export default App;
