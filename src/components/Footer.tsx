import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='bg-red-800 flex justify-between items-center px-20 text-white mt-10 pt-5'>
      <Logo />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Locales</li>
        <li>Reservas</li>
        <li>Contacto</li>
      </ul>
      <ul className='flex gap-5 text-2xl'>
        <i className='fa-brands fa-facebook'></i>
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-brands fa-instagram'></i>
      </ul>
    </div>
  )
}

export default Footer
