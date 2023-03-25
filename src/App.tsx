import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Product from './page/Product'
import Products from './page/Products'
import Events from './page/Events'
import Contacto from './page/Contacto'
import Cart from './page/Cart'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/eventos' element={<Events />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
