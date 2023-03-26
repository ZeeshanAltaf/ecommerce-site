
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import ProductsContextProvider from "./global/ProductsContext";
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CartContextProvider from './global/CartContext';


function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar />
         <Routes>
            <Route path='/' exact Component={Products} />
            <Route path='/cart' exact Component={Cart} />
            <Route Component={NotFound} />
          </Routes>
        </Router>
        </CartContextProvider>
      
      
      
        </ProductsContextProvider>
        
    </div>
  );
}

export default App;
