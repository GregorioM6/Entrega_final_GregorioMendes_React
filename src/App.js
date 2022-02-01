import './components/styles/App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer  from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { Cart } from './components/Cart';
import CacheProvider from './provider/CacheProvider';
import {FinalOrden} from './components/FinalOrden';


function App() {

  return (
    <CacheProvider>
    <BrowserRouter>
      {<NavBar />}
        <Routes>
        <Route exact path='/Compras' element={<ItemListContainer/>}/>
        <Route exact path='/product' element={<ItemListContainer/>}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/FinalOrden' element={<FinalOrden/>}/>
      {/*
        <Route exact path="/product">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
            <ItemListContainer/>
          </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route> 
        <Route exact path="/cart">
          <Cart />
        </Route>
          <Route exact path="/FinalOrden">
          <FinalOrden/>
        </Route>
      */}
      </Routes> 
    </BrowserRouter>
    </CacheProvider>
    );
}

export default App;
