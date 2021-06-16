import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer(props) {
    
    
    const onAdd = (cantCart) => {
       alert(`Se agregaron al carrito ${cantCart} items`);
    };
    
    return ( 
        <div className = 'item-container'>
            <p> { props.greeting } </p>
            <ItemCount stock={0} valorInicial={1} onAdd={onAdd} /> 
        </div>
    )
}

export default ItemListContainer