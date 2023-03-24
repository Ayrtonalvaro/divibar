import React from 'react'
import GridProducts from '../components/GridProducts'

const Products = () => {
  return (
    <div>
      <h1 className='text-red-800 text-center text-4xl mt-10'>Productos</h1>
      <div className='flex justify-center mt-10'>
        <ul className='flex gap-20 text-lg font-semibold cursor-pointer'>
          <li>Entradas</li>
          <li>Hamburguesas</li>
          <li>Pizzas</li>
          <li>Cervezas</li>
          <li>Aperitivos</li>
        </ul>
      </div>
      <GridProducts />
    </div>
  )
}

export default Products
