import React, { createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();


export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);
    
    const agregarProd = (id, title, price, cantCart) => {
        const indice = cart.findIndex((prod) => prod.id ===id);
        if (indice < 0) {
            setCart([...cart,{id: id, title: title, price: price, cantCart: cantCart,},]);
        } else {
            cart[indice] = {...cart[indice], cantCart:cart[indice].cantCart + cantCart,};
        };
    }

    function clear () {
        setCart([]);
    }

        const eliminoProduct = (prodInCart) => {
        const indiceDelete = cart.findIndex((item) => item.id === prodInCart.id);
        const copiaCart = Array.from(cart);

        if (indiceDelete >= 0) {
          copiaCart.splice(indiceDelete, 1);
          setCart(copiaCart);   

        }
      };

    return ( 
        <CartContext.Provider value={{agregarProd, cart, setCart, eliminoProduct, clear}}>  
            {children}
        </CartContext.Provider>
    );
};