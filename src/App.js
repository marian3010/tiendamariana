import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//IMPORTO VISTAS
import Contact from './Views/Contact/Contact';
import Cart from './Views/Cart/Cart';


//IMPORTO COMPONENTES
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCategoryContainer from './components/ItemListContainer/ItemCategoryContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import OrderForm from './components/Order/OrderForm';
import { CartProvider } from "./context/CartContext";

function App () {
    return ( 
      <Router>
        <CartProvider>
          <div className = 'App-header'>
            <NavBar />
            <Switch>
              <Route path="/Contact" component ={Contact} />
              <Route path="/Cart" component ={Cart} />
              <Route path="/category/:id">
                <ItemCategoryContainer />
              </Route>
              <Route path="/products/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/order">
                <OrderForm />
              </Route>
              <Route path="/">
                <ItemListContainer />
              </Route>
            </Switch>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    );
}

export default App;
