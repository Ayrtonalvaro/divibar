import { useState } from 'react'
import IconCart from './IconCart'
import Logo from './Logo'

const Navbar = () => {

  const [open, setOpen] = useState<boolean>(false)



  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <nav className='lg:flex lg:justify-around lg:items-center p-5 fixed w-full z-50 bg-black text-white font-semibold '>
        <div>
          <p>Ordenar ahora</p>
          <span>112-036-455</span>
        </div>
        <ul className='lg:flex gap-20'>
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
