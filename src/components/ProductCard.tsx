import product1 from '../../public/1.jpg'

import { NavLink } from 'react-router-dom'
const ProductCard = ({imgUrl} : {imgUrl :string }) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-center pt-5'>
        <NavLink to="/product">
          <img className='w-80 rounded-lg' src={imgUrl} alt='name product' />
        </NavLink>
      </div>
      <h2 className='text-center text-3xl mt-5'>Menu</h2>
      <h3 className='text-center text-3xl text-red-500 font-semibold'>$15</h3>
      <p className='text-center px-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis
        aliquid itaque? Exercitationem modi molestiae assumenda mollitia, in ex
        placeat dolore nisi repellendus, nemo eligendi. Nulla error minus iusto
        provident.
      </p>
    </div>
  )
}

export default ProductCard
