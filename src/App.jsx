import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import { useState } from 'react';
import CartContextComponent from './components/CartContext/CartContextComponent';


function App() {
    
  return (
    <>
    <CartContextComponent>
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
      <Route path='/category/:category' element= {<ItemListContainer/>}/>
      <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
      <Route path='/checkout' element= {<Checkout/>}/>
      <Route path='/cart' element= {<Cart/>}/>
    </Routes>
      
    <div className="App">
      
      
   
   
    </div>
    
    </BrowserRouter>
    </CartContextComponent>
    </>
  
   
  );
}

export default App;
