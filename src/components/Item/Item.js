// import React from 'react';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom'

// export const Item = ({ id, name, description, price, stock, color, img}) => {

//     const cardStyle = {
//         background: 'linear-gradient(to right bottom, #808080 5%, #E4E8EF 95%)'
//     }

//     return (
//         <div className="col animate__animated animate__fadeIn">
//             <div className="card border-dark" style={cardStyle}>
//                 <img className="m-3" alt={description} src={ process.env.PUBLIC_URL + `/productos/${img}`} />
//                 <div className="card-body">
//                     <h5 className="card-title">{ name }</h5>
//                     <p className="card-text">{ description }</p>
//                     <p className="card-text">{ stock }</p>
//                     <p className="card-text">{ color }</p>
//                     <p className="card-text text-end text-muted">$ { price }</p>
//                 </div>
//                 <Button variant="contained" color="background" style={{marginBottom: 10, textDecoration: 'none'}}>
//                             <Link to={`/products/${img}`} style={{textDecoration: 'none'}}>Ver Detalle</Link>
//                         </Button>
//                         <Button variant="contained" color="background">Agregar al carrito</Button>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import './Item.css';

export const Item = ({ id, title, description, price, pictureUrl}) => {

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card border-dark myCard">
                <img className="m-3" alt={description} src={`${process.env.PUBLIC_URL}${pictureUrl}`}/>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text text-end text-muted">$ { price }</p>
                </div>
            </div>
        </div>
    );

}