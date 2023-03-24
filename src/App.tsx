import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Product from './page/Product'
import Products from './page/Products'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
