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
    
	const nuevaOrden = {
        buyer: ({buyer}),
        items: cart,
        //date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalizarPrecio()
    }
    
    const guardarOrden = () =>{
        console.log("estoy guardando la orden");
        ordenes.add(nuevaOrden).then(({id}) => {
            setOrderId(id);
        }).finally(() => {
            setLoading(false);
        }); 
    }
     
    useEffect(() => {
        guardarOrden();
    },[buyer])

     
    return (
        <div>
            {loading? (<p>Loading ...</p>) : (<p>Tu orden se encuentra registrada con el número: {orderId}</p>)}
        </div>
    )
	
};

export default Order;