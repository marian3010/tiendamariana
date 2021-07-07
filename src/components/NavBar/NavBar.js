import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import logo from './cocoLogoNuevo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import DropDown from "./DropDown";

function NavBar () {
    return ( 
        
        <nav className = "barra-menu">
            <ul className="lista-menu">
                <li className="item-menu">
                 <Link to="/"><img className="logo" src = { logo } alt = "Logo" /></Link>   
                </li>
                <li className="item-menu">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="item-menu dropdown">
                    <DropDown />
                </li>
                <li className="item-menu">
                    <Link to="/Contact">Contacto</Link>
                </li>
                <li className="item-menu">
                    < CartWidget />
                </li>
            </ul>
        </nav>
          

    );
}

export default NavBar;