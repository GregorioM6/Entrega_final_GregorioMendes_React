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
                    <nav className="navBar">
                        <ul className="navBarLista">
                            <li><Link to={`/Inicio`}>Home </Link></li>
                            <li><Link to={`/Productos`}>Productos </Link></li>
                            <li><Link to={`/Equipos`}>Equipos </Link></li>
                            <CartWidget />
                        </ul>
                    </nav>
            </header>
        </div>
    )
}

export default NavBar 

 //FALTA TERMINAR EL MENUHAMBURGUESA
