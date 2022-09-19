import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'


function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
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
    </>
  
   
  );
}

export default App;
