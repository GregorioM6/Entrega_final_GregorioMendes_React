import './styles/CartWidget.css'
import imagenCarrito from './img/carritoCompras.png';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';



export const CartWidget = () => {

    const { cacheSize } = useContext(CartContext);

    return(
        <div> 
            
            <Link className="nav-link" to={`/cart`}>
            <img className="imagenCarrito" src={imagenCarrito} alt="carrito" /> { cacheSize !== 0 && <sup>{cacheSize}</sup> }
            </Link>
        </div> 
    )
}

export default CartWidget 

