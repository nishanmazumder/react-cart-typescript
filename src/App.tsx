import { ProductProvider } from './context/ProductProvider'
import ProductList from './components/ProductList'
import './App.css'
import CartProvider from './context/CartProvider'

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <ProductList />
      </CartProvider>
    </ProductProvider>
  )
}

export default App
