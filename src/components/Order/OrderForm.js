import Order from "../Order/Order"; 
import React, { useState, useEffect } from "react";
import './Order.css';


const OrderForm = () => {
	const [buyer, setBuyer] = useState([]);
			
	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log("entre en el submit", e.target);
		console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
		setBuyer({ ...buyer, [name]: value });
		console.log("buyer", buyer);
		
	};
	
	useEffect (() => {
		if (buyer) {
			<Order order={buyer}/>
		}
		return () => {
			<p>No hay datos cargados</p>
		};
	}, [buyer]);

	

		return (
			<div>
				<form className = "form-buyer" onSubmit={handleOnSubmit}>
					<label>Nombre</label>
					<input className = "campo-buyer"
						placeholder='Nombre completo'
						name='nombre'
						value={buyer.nombre}
					/>
					<label>Teléfono</label>
					<input className = "campo-buyer"
						placeholder='Teléfono'
						name='telefono'
						value={buyer.telefono}
					/>
					<label>eMail</label>
					<input type="email" className = "campo-buyer"
						placeholder='eMail'
						name='email'
						value={buyer.email}
					/>
					<button type="submit" className="boton-submit">
						Enviar Orden
					</button>
					
				</form>
				
			</div>
		)	
};
	
export default OrderForm;

