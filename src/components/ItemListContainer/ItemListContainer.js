import React from 'react'
import './ItemListContainer.css'

function ItemListContainer(props) {
    return ( 
        <div className = 'item-container'>
            <p> { props.greeting } </p>
        </div>
    )
}

export default ItemListContainer