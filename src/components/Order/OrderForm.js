import Order from "../Order/Order"; 
import React, { useState, useEffect } from "react";
import './Order.css';


const OrderForm = () => {
	const [buyer, setBuyer] = useState([]);
	const [nombre, setNombre] = useState('');
	const [telefono, setTelefono] = useState('');
	const [email, setEmail] = useState('');
			
	const handleOnSubmit = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setBuyer({ ...buyer, [name]: value });
				
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
						onChange={ (e) => setNombre(e.target.value)}
						value={nombre}
					/>
					<label>Teléfono</label>
					<input className = "campo-buyer"
						placeholder='Teléfono'
						name='telefono'
						onChange={ (e) => setTelefono(e.target.value)}
						value={telefono}
					/>
					<label>eMail</label>
					<input type="email" className = "campo-buyer"
						placeholder='eMail'
						name='email'
						onChange={ (e) => setEmail(e.target.value)}
						value={email}
					/>
					<button type="submit" className="boton-submit">
						Enviar Orden
					</button>
					
				</form>
				
			</div>
		)	
};
	
export default OrderForm;

