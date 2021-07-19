import React, { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase";
import * as firebase from '../../firebase'; 


const Order = (order) => {
	const [loading, setLoading] = useState(true);
    const [orderId, setOrderId] = useState();
    const { cart, totalizarPrecio} = useContext(CartContext);
    const ordenes = db.collection("ordenes");
    
	const nuevaOrden = {
        buyer: ({order}),
        items: cart,
        //date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalizarPrecio()
    }
    
    ordenes.add(nuevaOrden).then(({id}) => {
            setOrderId(id);
        }).finally(() => {
            setLoading(false);
        });    

     
    return (
        <div>
            {loading? (<p>Loading ...</p>) : (<p>Tu orden se encuentra registrada con el número: {orderId}</p>)}
        </div>
    )
	
};

export default Order;