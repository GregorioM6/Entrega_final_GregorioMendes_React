// import React from "react";
// import './NavBar.css';
// import logo from '../../assets/MLA_LOGO.png';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import {CartWidget} from '../CartWidget/CartWidget';
// import { Link } from 'react-router-dom'

// export default function NavBar() {
//     return(
//         <AppBar position="static">
//             <nav>
//                 <div className="container-logo">
//                 <Link to="/">
//                     <img src={logo} alt="Logo ecommerce"/>
//                     </Link>
//                 </div>
//                 <ul>
//                     <li>
//                             <Link to="/">
//                                 <Button variant="outlined">Home</Button>
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/equipos">
//                                 <Button variant="outlined">Equipos</Button>
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/compras">
//                                 <Button variant="outlined">Compras</Button>
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/contacto">
//                                 <Button variant="outlined">Contacto</Button>
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/empresa">
//                                 <Button variant="outlined">Empresa</Button>
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/novedades">
//                                 <Button variant="outlined">Novedades</Button>
//                             </Link>
//                     </li>
//                 </ul>
//                 <CartWidget/> 
//             </nav>
//         </AppBar>
        
//     )
// }

import React from 'react';
import { NavLink } from 'react-router-dom';
import skinCommerceLogo from '../assets/skinCommerce.png';
import { CartWidget } from './CartWidget';
import './NavBar.css';

export const NavBar = () => {

  const logoStyle = {
    maxHeight: '110px',
    maxWidth: '110px'
  }

  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" activeClassName="selected" style={logoStyle} exact to={"/"}>
          <img 
            alt="SkinCommerce"
            src={skinCommerceLogo}
            height='100%'
            width='100%'
          />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/knife"}>Knife</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/pistol"}>Pistol</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/heavy"}>Heavy</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/smg"}>SMG</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/rifle"}>Rifle</NavLink></li>
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
  
}