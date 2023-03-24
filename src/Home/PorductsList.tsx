import GridProducts from "../components/GridProducts"


const PorductsList = () => {
  return (
    <>
      <div className='flex justify-center'>
        <h2 className='text-4xl mt-10 uppercase'>Products</h2>
      </div>
      <div>
        <GridProducts />
      </div>
    </>
  )
}

export default PorductsList
