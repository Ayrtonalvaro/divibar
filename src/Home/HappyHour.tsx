import nosotros from '../../public/nosotros.jpg'

const HappyHour = () => {
  return (
    <div className='grid grid-cols-2 items-center p-20'>
      <div>
        <p className='text-center text-slate-500 text-lg'>Disfruta nuestro</p>
        <h1 className='text-4xl font-bold text-center text-red-800'>
          Happy Hour
        </h1>
        <p className='text-center text-slate-500'>
          Podes acecarte a la barra y disfrutar de todos nuestros tragos y
          aperitivos
        </p>
        <div className='flex justify-center flex-col p-10 px-44'>
          <h4 className='text-red-800'>Divibar Caseros</h4>
          <p>
            <i className='fa-solid fa-clock text-red-800'></i> 17:00hs a 21:00hs
          </p>
          <h4 className='text-red-800'>Divibar Palermo</h4>
          <p>
            <i className='fa-solid fa-clock text-red-800'></i>17:00hs a 21:00hs
          </p>
          <h4 className='text-red-800 '>Diviba Ramos mejia</h4>
          <p>
            <i className='fa-solid fa-clock text-red-800'></i>17:00hs a 21:00hs
          </p>
        </div>
      </div>
      <img className='w-96' src={nosotros} alt='nosotrosImg' />
    </div>
  )
}

export default HappyHour
