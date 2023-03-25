import product1 from '../../public/1.jpg'

const Cart = () => {
  return (
    <>
      <div className='flex  justify-center mt-20 h-screen gap-5'>
        <div className=''>
          <table className='text-xl'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Producto
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Descripción
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Cantidad
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Precio
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center'>
                <td className='flex justify-center'>
                  <img className='w-20 rounded-lg' src={product1} />
                </td>
                <td>
                  <p>Hamburgesa con papas</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>$15</p>
                </td>
                <td>
                  <p>$15</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-slate-800 h-28 w-48 text-center rounded-md text-white'>
          <h4 className='text-xl font-bold'>Su compra</h4>
          <p className='font-semibold'>Subtotal:$75</p>
          <p className='font-semibold'>Total:$5</p>
          <button className='bg-white w-28 rounded-md text-black'>Pagar</button>
        </div>
      </div>
    </>
  )
}

export default Cart
