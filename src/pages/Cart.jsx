import React from 'react'
import { CartProduct } from '../components'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='w-full flex flex-col px-10 '>
      <div className="flex flex-col gap-4">
        <CartProduct productId={'1391487434023925615'} />
        <CartProduct productId={'1391487434023925615'} />
      </div>
      <div className="w-full border-[1px] border-surface p-10 mt-10 rounded-lg ">
        <h2 className='text-xl mb-2'>Billing</h2>
        <div className="border-b-2 border-secondary ">
          <div className="flex px-10 w-full justify-between">
            <h3>All Product:</h3> <h3>$257 </h3>
          </div>
          <div className="flex px-10 w-full justify-between">
            <h3>Shipping:</h3> <h3>$57 </h3>
          </div>
          <div className="flex px-10 w-full justify-between">
            <h3>Discount:</h3> <h3>-$89 </h3>
          </div>
        </div>
        <div className="flex px-10 w-full justify-between mt-2">
          <h3 className='text-lg font-semibold'>Total:</h3> <h3 className='text-lg font-semibold'>$257 </h3>
        </div>
      </div>
      <div className=" w-full my-4">
        <Link to={'checkout'} className="bg-primary text-white py-2 px-10 rounded-lg w-full">
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart