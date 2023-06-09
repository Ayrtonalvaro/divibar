import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconCart from './IconCart'
import Logo from './Logo'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <nav className='lg:flex lg:justify-around lg:items-center p-5 fixed-top w-full z-50 bg-black text-white font-semibold '>
        <div>
          <p>Ordenar ahora</p>
          <span>112-036-455</span>
        </div>
        <ul className='lg:flex gap-20 cursor-pointer'>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/products'>
            <li>Menus</li>
          </NavLink>
          <Logo />
          <NavLink to='/eventos'>
            <li>Eventos</li>
          </NavLink>
          <NavLink to='/contacto'>
            <li>Contacto</li>
          </NavLink>
        </ul>
        <div>
          <NavLink to='/cart'>
            <IconCart />
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar
