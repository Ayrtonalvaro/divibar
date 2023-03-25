import React from 'react'

const Events = () => {
  return (
    <div className='bg-black'>
      <div className='bg-hero-events h-screen opacity-90 text-white'>
        <h1 className='text-6xl text-center pt-10  '>Eventos</h1>
        <div className='flex  justify-center'>
          <div className='bg-red-700 p-8 rounded-lg mt-10 h-72 pt-20 opacity-90'>
            <h4 className='text-center text-xl'>Reservá tu evento</h4>
            <span className='text-yellow-300 flex justify-center'>
              ¡Te esperamos!
            </span>
            <div className='text-center'>
              <p className='font-semibold'>
                Tenemos las mejores platos para que llevas a cabo tu evento en
                el mejor lugar.
              </p>
              <button className='bg-yellow-400 rounded-md w-20 h-10 mt-10 text-xl text-center'>
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
