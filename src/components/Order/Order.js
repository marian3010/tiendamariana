import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase";
//import * as firebase from 'firebase/app';
import 'firebase/firestore';


const Order = (buyer) => {
	const [loading, setLoading] = useState(true);
    const [orderId, setOrderId] = useState();
    const { cart, totalizarPrecio} = useContext(CartContext);
    const ordenes = db.collection("ordenes");
    
    console.log("entre a Order");
    console.log(buyer);

	const nuevaOrden = {
        buyer: buyer,
        items: cart,
        //date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalizarPrecio()
    }
    
    function guardarOrden () {
        console.log("estoy guardando la orden", nuevaOrden);
        ordenes.add(nuevaOrden).then(({id}) => {
            setOrderId(id);
        }).finally(() => {
            setLoading(false);
            
        }); 
    }
     
    useEffect(() => {
        console.log ("entro al useEfect de Order");
        guardarOrden();
    },[nuevaOrden])

     
    return (
        <div>
            {loading? (<p>Loading ...</p>) : (<p>Tu orden se encuentra registrada con el número: {orderId}</p>)}
        </div>
    )
	
};

export default Order;