import React, { useState, useContext } from "react";
import './OrderForm.css';
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';


const OrderForm = () => {
	const [nombre, setNombre] = useState('');
	const [telefono, setTelefono] = useState('');
	const [email, setEmail] = useState('');
	const [orderId, setOrderId] = useState();
    const { cart, totalizarPrecio} = useContext(CartContext);
    const db = getFirestore();
	const ordenes = db.collection("ordenes");
	
	const guardarOrden = (buyer) => {
		const nuevaOrden = {
        	buyer: buyer,
        	items: cart,
       		date: firebase.firestore.Timestamp.fromDate(new Date()),
        	total: totalizarPrecio()
    	};	
		ordenes.add(nuevaOrden).then(({id}) => {
            setOrderId(id);
        });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		
		guardarOrden({ 
			name: nombre,
			phone: telefono,
			email: email,
		 });
	};

		
	return (
		<div>
			<form className = "form-buyer" onSubmit={handleOnSubmit}>
				<label>Nombre</label>
				<input className = "campo-buyer"
					placeholder='Nombre completo'
					name='nombre'
					required
					onChange={ (e) => setNombre(e.target.value)}
					value={nombre}
				/>
				<label>Teléfono</label>
				<input className = "campo-buyer"
					placeholder='Teléfono'
					name='telefono'
					required
					onChange={ (e) => setTelefono(e.target.value)}
					value={telefono}
				/>
				<label>eMail</label>
				<input type="email" className = "campo-buyer"
					placeholder='eMail'
					name='email'
					required
					onChange={ (e) => setEmail(e.target.value)}
					value={email}
				/>
				<button type="submit" className="boton-submit">
					Enviar Orden
				</button>
			</form>
			<div>
				{orderId && <p className="nro-pedido">Tu orden se encuentra registrada con el número: {orderId}</p>}
				
			</div>
			
		</div>
	)	
};
	
export default OrderForm;

