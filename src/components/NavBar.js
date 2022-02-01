//Inicia con : npm start (en la terminal)


import { Link, NavLink } from 'react-router-dom';
import MLALogo from './img/MLA_LOGO.png';
import CartWidget from './CartWidget'

import './styles/NavBar.css'


function NavBar() {
    return(
        <div>
            <header className="header">
            <li><Link to={`/Inicio`}><img className="MLALogo" src={MLALogo} alt="Logo"/> </Link></li>
            {/* <a id="logo" href="index.html">
                        <img class="header__logo"
                            src="imagenes/MLA_LOGO.png"
                            alt="LOGO"
                        />
                    </a> */}
                    <nav className="navBar">
                        <ul className="navBarLista">
                            <li><Link to={`/Inicio`}>Home </Link></li>
                            <li><Link to={`/Compras`}>Compras </Link></li>
                            <li><Link to={`/Equipo`}>Equipo </Link></li>
                            <li><Link to={`/Contacto`}>Contacto </Link></li>
                            <li><Link to={`/Empresa`}>Empresa </Link></li>
                            <CartWidget />
                        </ul>
                    </nav>
            </header>
        </div>
    )
}

export default NavBar 

 //FALTA TERMINAR EL MENUHAMBURGUESA
