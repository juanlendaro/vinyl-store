import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
      <Route path='/category/:id' element= {<ItemListContainer/>}/>
      <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
    </Routes>
      
    <div className="App">
      
      
   
   
    </div>
    
    </BrowserRouter>
    </>
  
   
  );
}

export default App;
