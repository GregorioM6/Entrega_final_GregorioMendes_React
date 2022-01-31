// import React, { useState, useEffect } from 'react'
// import { ItemList } from '../ItemList/ItemList';


// const productList = [
//     {
//         id: '0',
//         name: 'Monitor Gamer',
//         description: 'Monitor Gamer de la marca MLA',
//         price: 60000,
//         stock: 15,
//         color: 'negro',
//         img: 'monitorgamer.jpg'
//     },
//     {
//         id: '1',
//         name: 'Mouse Gamer',
//         description: 'Mouse Gamer de la marca MLA',
//         price: 6000,
//         stock: 20,
//         color: 'negro',
//         img: 'mousegamer.png'
//     }
// ];

// const productListPromise = new Promise((resolve, reject) => {
//     console.log('Esperando 2 segundos');
//     setTimeout(function() {
//     resolve(productList);
//     }, 2000);
// });

// export const ItemListContainer = ({ greetings }) => {
    
//     const [productos, setProductos] = useState({
//         data: [],
//         loading: true
//     });
    
//     useEffect( () => {
//         productListPromise.then( data => {
//             setProductos({
//                 data: data,
//                 loading: false
//             })
//         })
//     }, []);

//     return (
//         <div className="m-3">
//             <h1>{ greetings }</h1>
//             <ItemList productos = { productos } />
//         </div>
//     );

// }

// export default ItemListContainer


import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { productList } from '../data/productList';
import { useParams } from 'react-router-dom';


const productListPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(productList);
    }, 2000);
});

export const ItemListContainer = ({ greetings }) => {
    
    const { category } = useParams();

    const [productos, setProductos] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {

        productListPromise.then( data => {
            if( category === undefined ) {
                setProductos({
                    data: data,
                    loading: false
                })
            } else {
                setProductos({
                    data: data.filter( product => product.category === category ),
                    loading: false
                });
            }
        });
    }, [category]);

    return (
        <div className="m-3">
            <h1>{ greetings }</h1>
            <ItemList productos = { productos } />
        </div>
    );
    
}
