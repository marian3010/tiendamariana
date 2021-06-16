import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, valorInicial, onAdd}) {
    // valorInicial se va a guardar en cantidad, siendo el estado inicial
    // setCantidad va a ser la funcion que utilizo para modificar el estado del componente
  
    const [cantidad, setCantidad] = useState(valorInicial);
    //setCantidad(valorInicial);
    
    const handleAgregar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
          }
    };
  
    const handleDescontar = () => {
      if (cantidad > valorInicial){
        setCantidad(cantidad - 1);
      }
    };
  
    return (
      <div className="contenedor">
        <div className="contador">
            <button className="boton-cantidad" onClick={handleDescontar}>-</button>
            <p>{cantidad}</p>
            <button className="boton-cantidad" onClick={handleAgregar}>+</button>
        </div>
      <button className="boton-carrito" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
      </div>
    );
  }





export default ItemCount

