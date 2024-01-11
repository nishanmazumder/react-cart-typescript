import { ProductProvider } from './context/ProductProvider';
import ProductList from './components/ProductList';
import './App.css';
import CartProvider from './context/CartProvider';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [cart, showCart] = useState<boolean>(false);

  console.log(cart);

  return (
    <ProductProvider>
      <CartProvider>
        <Header cartState={cart} setCart={showCart} />
        <ProductList />
      </CartProvider>
    </ProductProvider>
  )
}

export default App
