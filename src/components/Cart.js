import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'
import { CartItem } from './CartItem';
import './styles/Cart.css'

export const Cart = () => {

    const { cache, clear, cacheSize, cartTotalAmount } = useContext(CartContext);
    return (
        <div >
            <h1>CART</h1> 
            { cacheSize === 0 && 
                <div className="estiloSinItems" >
                    <div>
                        <p >No tiene items agregados</p>
                    </div>
                    <Link  to={"/"}>Volver al inicio</Link>
                </div>
            }


            { cacheSize !== 0 &&
                <div>
                    <div>
                        <div className="containerCart">
                        { cache.map((item) => 
                    <CartItem key={item.id} item={item}/> )
                        }
                        </div>
                        <div className="containerVaciarSeguir ">
                            <button  >Total de compra: $ {cartTotalAmount}</button>
                            <Link to={"/Productos"}> <button className="btn btn-success">Seguir Comprando</button></Link>
                            <button className="btn btn-danger" onClick={() => clear()}>Vaciar carrito</button>
                            <button className="btn btn-outline-secondary"> <Link  to={"/finalOrden"}>Finalizar mi compra</Link> </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}