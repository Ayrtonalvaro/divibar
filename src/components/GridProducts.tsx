import product1 from '../../public/1.jpg'
import product2 from '../../public/2.jpg'
import product3 from '../../public/3.jpg'
import product4 from '../../public/4.jpg'
import product5 from '../../public/5.jpg'
import product6 from '../../public/6.jpg'
import ProductCard from './ProductCard'

const GridProducts = () => {
  return (
    <div className='grid grid-cols-3 gap-10 mt-10'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default GridProducts
