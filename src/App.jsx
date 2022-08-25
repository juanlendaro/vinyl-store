import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Get ready for some new records!" />
   
   
    </div>
    
  
   
  );
}

export default App;
