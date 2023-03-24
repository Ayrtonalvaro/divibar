import fotoFondo from '../../public/fondobar.jpg'

const About = () => {
  return (
    <div className='lg:flex lg:justify-center bg-black'>
      <img className='lg:relative  lg:w-full  opacity-50' src={fotoFondo} />
      <div className='lg:absolute top-60 pl-20'>
          <h1 className='text-white lg:text-8xl uppercase font-bold font-alkatra'  >Divibar</h1>
          <p className='text-white lg:w-96 text-3xl pt-20'>
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
