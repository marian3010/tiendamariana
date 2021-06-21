import React, { Component } from 'react';
import './NavBar.css';
import logo from './logo192.png';
import CartWidget from '../CartWidget/CartWidget';

class NavBar extends Component {
    render() {
        return ( 
			<div>
            	<nav className = 'barra-menu'>
           			<a href = "index.html" > < img src = { logo } alt = "Logo" /> </a>
					<a href = "index.html" > Inicio </a>
					<a href = "#Planetas" > Planetas </a>
					<a href = "#Flores" > Flores </a>
					<a href = "#Contacto" > Contacto </a>
					<a href = "#Cart" > <CartWidget /> </a>
				</nav>
				<p className = 'tit-aqua' > Coco's Gallery</p>
				
			</div>
		
        );
    }
}

export default NavBar;