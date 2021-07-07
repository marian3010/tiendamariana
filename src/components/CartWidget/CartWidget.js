import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {
    
    const { cart } = useContext(CartContext);
     
    function totalizarCantidad () {
        if (cart.length > 0) {
            let total = 0
            cart.forEach(element => {
                total=total + element.cantCart
            });
           return total;
    
        }
    }

    function totalizarPrecio () {
        if (cart.length > 0) {
            let totalPrecio = 0
            cart.forEach(element => {
                totalPrecio=totalPrecio + (element.cantCart*element.price)
            });
           return totalPrecio;
    
        }
    }
 
        return ( 
            
            <Link to="/cart">
                {cart.length ? <p className="cantidad">{totalizarCantidad()}</p> : null}
                <i class = "fas fa-shopping-cart color-carro" />
                {cart.length ? <p className="totalpesos">Mi carrito ${totalizarPrecio()}</p> : null}
            </Link>
        )
  
}

export default CartWidget