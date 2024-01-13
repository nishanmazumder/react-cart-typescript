import { ProductProvider } from './context/ProductProvider';
import ProductList from './components/ProductList';
import CartProvider from './context/CartProvider';
import Header from './components/Header';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {

  const [cart, showCart] = useState<boolean>(false);

  return (
    <ProductProvider>
      <CartProvider>
        <Header cartState={cart} setCart={showCart} />
        {cart ? <Cart /> : <ProductList />}
      </CartProvider>
    </ProductProvider>
  )
}

export default App
