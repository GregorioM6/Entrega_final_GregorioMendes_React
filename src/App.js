// import './App.css';
// import AppRouter from './components/AppRouter/AppRouter';


// function App() {
//   return (
//     <div className="App">
//       <AppRouter />
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import CacheProvider from './provider/CacheProvider';

function App() {
  return (

    <CacheProvider>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer greetings="Productos"/>
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer greetings="Productos"/>
          </Route>

            <Route exact path="/item/:id">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>

        </Switch>

      </BrowserRouter>
    </CacheProvider>
    
  );
}

export default App;