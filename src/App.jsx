import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Get ready for some new records!" />
   
   
    </div>
    
  
   
  );
}

export default App;
