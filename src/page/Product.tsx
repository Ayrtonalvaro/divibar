import React from 'react'
import product1 from '../../public/1.jpg'

const Product = () => {
  return (
    <div className='grid grid-cols-2 p-10 items-center h-screen'>
      <div className='flex justify-center rounded-md mt-10'>
        <img src={product1} alt='productoImg' className='w-96' />
      </div>
      <div>
        <h1 className=' text-4xl uppercase font-bold'>Product name</h1>
        <p className='text-red-800 text-3xl mt-10'>$15</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nam.
          Dolor alias nesciunt beatae perspiciatis animi, officiis, corporis
          inventore nihil ea impedit unde et sunt eligendi eius asperiores sequi
          aliquam?
        </p>
        <p>Elegir tamaño</p>
        <ul className='flex gap-20 mt-10 text-xl'>
          <div className='flex flex-col'>
            <div>
              <i className='fa-solid fa-burger text-3xl'></i>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' />
              <span>Pequeño</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div>
              <i className='fa-solid fa-burger text-3xl'></i>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' />
              <span>Mediano</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div>
              <i className='fa-solid fa-burger text-3xl'></i>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' />
              <span>Grande</span>
            </div>
          </div>
        </ul>
        <p className='text-2xl font-semibold'>Agregar ingrediente</p>
        <ul className='flex gap-5'>
          <input type='checkbox' />
          <li>Ingredient 1</li>
          <input type='checkbox' />
          <li>Ingredient 2</li>
          <input type='checkbox' />
          <li>Ingredient 3</li>
        </ul>
        <div>
          <button className='bg-red-600 rounded-lg p-1 '>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Product
