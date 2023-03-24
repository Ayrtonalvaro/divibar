import fotoFondo from '../../public/fondobar.jpg'

const About = () => {
  return (
    <div className='flex justify-start  bg-black'>
      <img className='relative  w-full  opacity-50' src={fotoFondo} />
      <div className='absolute top-60 pl-20'>
          <h1 className='text-white text-6xl uppercase font-bold'>Bienvenidos</h1>
          <p className='text-white w-96 text-xl pt-20'>
            Divibar es un bar de estilo moderno y relajado que se especializa en
            servir deliciosas hamburguesas, pizzas y cervezas. Con una
            decoración atractiva y un ambiente acogedor, es el lugar ideal para
            disfrutar de una comida informal con amigos o familiares.
          </p>
      </div>
    </div>
  )
}

export default About
