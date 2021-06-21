import { useState, useEffect } from "react"
import './ItemList.css'
import {item} from "../Item/item"
import ItemCount from '../ItemCount/ItemCount'

const ItemList = () => {
    
    const [productos, setProductos] = useState([]);
    const prom= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(item);
        }, 2000)
    })

    useEffect(() => {
        prom.then((resultado)=>{
            setProductos(resultado);
        })
        prom.catch((err) => alert (err))
    })

    console.log('productos', productos);
    const onAdd = (cantCart) => {
        alert(`Se agregaron al carrito ${cantCart} items`);
     };
    return ( 
        <div className="grilla">
            {productos.map(prod => 
                <div className="productWrapper">
                    <img src={prod.img} alt="producto" />
                    <h3>{prod.title}</h3>
                    <h5>${prod.price}</h5>
                    <ItemCount stock={prod.stock} valorInicial={1} onAdd={onAdd} /> 
                </div>)}
       
        </div>
    )
}
 
export default ItemList;