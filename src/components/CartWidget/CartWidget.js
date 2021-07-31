import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {
    
    const { cart, totalizarPrecio } = useContext(CartContext);
     
    function totalizarCantidad () {
        if (cart.length > 0) {
            let total = 0
            cart.forEach(element => {
                total=total + element.cantCart
            });
           return total;
        }
    }

    return ( 
        <Link to="/cart">
            {cart.length ? <p className="cantidad">{totalizarCantidad()}</p> : null}
            <i className = "fas fa-shopping-cart color-carro" />
            {cart.length ? <p className="totalpesos">Total ${totalizarPrecio()}</p> : null}
        </Link>
    )

}

export default CartWidget