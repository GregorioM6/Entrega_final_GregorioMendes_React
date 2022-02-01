import './components/styles/App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer  from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { Cart } from './components/Cart';
import CacheProvider from './provider/CacheProvider';
import {FinalOrden} from './components/FinalOrden';
import {HomePage} from './components/HomePage';
import {EquiposPage} from './components/EquiposPage';

function App() {

  return (
    <CacheProvider>
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route exact path='/Inicio' element={<HomePage/>}/>
        <Route exact path='/Equipos' element={<EquiposPage/>}/>
        <Route exact path='/Productos' element={<ItemListContainer/>}/>
        <Route exact path='/product' element={<ItemListContainer/>}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/FinalOrden' element={<FinalOrden/>}/>
      </Routes> 
    </BrowserRouter>
    </CacheProvider>
    );
}

export default App;
