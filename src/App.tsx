import { ProductProvider } from './context/ProductProvider'
import ProductList from './components/ProductList'
import './App.css'

function App() {

  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  )
}

export default App
