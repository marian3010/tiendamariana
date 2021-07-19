import Order from "../Order/Order"; 
import React, { useState, useEffect } from "react";
import './Order.css';


const OrderForm = () => {
	const [valores, setValores] = useState([]);
	//const [loading, setLoading] = useState(true);
	
	console.log("entre en orderForm");

	const handleOnSubmit = (e) => {
		e.preventDefault();
        const { name, value } = e.target;
		setValores({ ...valores, [name]: value });
		//setLoading(false);		
	};
	
	function cargoDatos () {
			<form onSubmit={handleOnSubmit}>
				<input
					placeholder='Nombre completo'
					name='nombre'
					value={valores.nombre}
				/>
				<input
					placeholder='Teléfono'
					name='telefono'
					value={valores.telefono}
				/>
				<input
					placeholder='eMail'
					name='email'
					value={valores.email}
				/>
				<button className="boton-submit">
					Enviar Orden
				</button>
			</form>
	}
	
	useEffect(() => {
		cargoDatos();
		
	  },[]);

		return (
			<div>
				<Order order={valores}/>
			</div>
		)	
};
	
export default OrderForm;

