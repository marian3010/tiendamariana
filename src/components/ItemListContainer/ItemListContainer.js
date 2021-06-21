import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(props) {
    
    return ( 
        <div className = 'item-container'>
            <p> { props.greeting } </p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer