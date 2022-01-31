// import React, { useContext } from 'react';
// import carrito_img from '../../assets/carrito.png';
// import { NavLink } from 'react-router-dom';
// import CartContext from '../../Context/CardContext';
// import './CartWidget.css';

// export const CartWidget = () => {

//     const { cacheSize } = useContext(CartContext);

//     return (
//         <li className= "nav-item ms-5 me-5">
//             <NavLink className="nav-link" activeClassName="selected" exact to={"/cart"}>
//                 <img src={carrito_img } alt="Logo ecommerce" />{ cacheSize !== 0 && <sup>{cacheSize}</sup> }
//             </NavLink>
//         </li>
//     )
// }


import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const { cacheSize } = useContext(CartContext);

    return (
        <li className= "nav-item ms-5 me-5">
            <NavLink className="nav-link" activeClassName="selected" exact to={"/cart"}>
                <FontAwesomeIcon icon={faShoppingCart} />{ cacheSize !== 0 && <sup>{cacheSize}</sup> }
            </NavLink>
        </li>
    )
}