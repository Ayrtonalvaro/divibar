import IconCart from './IconCart'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around items-center p-5 bg-black text-white font-semibold fixed w-full z-50'>
        <div>
          <p>Ordenar ahora</p>
          <span>112-036-455</span>
        </div>
        <ul className='flex gap-20'>
          <li>Homepage</li>
          <li>Productos</li>
          <Logo />
          <li>Menu</li>
          <li>Eventos</li>
          <li>Contacto</li>
        </ul>
        <div>
          <IconCart />
        </div>
      </nav>
    </>
  )
}

export default Navbar
