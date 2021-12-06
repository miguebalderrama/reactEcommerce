import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';


function App() {  
 
  return(
  <div className="App">
    <UserProvider>
    <CartProvider>
    <Routes/>  
    </CartProvider>
    </UserProvider>
  </div>
  );
}

export default App;
