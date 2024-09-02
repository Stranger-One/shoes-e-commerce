import React, { useEffect, useState } from 'react'
import { CartProduct } from '../components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../data/productData'
import { updateOrderAmount } from '../store/globalSlice'


const Cart = () => {
  const [userDetails, setUserDetails] = useState(useSelector(state => state.auth.userDetails))
  const user = useSelector(state => state.auth.userDetails)
  const dispatch = useDispatch()
  const [productTotalPrice, setProductTotalPrice] = useState(0)
  const [setshippingCost, setSetshippingCost] = useState(0)
  const [discount, setDiscount] = useState(0)

  const [totalOrder, setTotalOrder] = useState(0)

  useEffect(() => {
    setUserDetails(user)
    let total = 0;

    user.cart.map(cartProd => {
      const product = products.find(product => product.id === cartProd.productId)
      // console.log(product);
      return product.offer.price * cartProd.quantity
    }).forEach((price) => {
      total += Number(price);
    });

    setProductTotalPrice(total.toFixed(2))
    setSetshippingCost(32)
    setDiscount(21)

    let order = total + 32 - 21
    setTotalOrder(order.toFixed(2))
    dispatch(updateOrderAmount(order.toFixed(2)))

    // console.log(total);

    // console.log(user);

  }, [user, useSelector, dispatch])



  return (
    <div className='w-full flex flex-col px-4 lg:px-10 '>
      <div className="flex flex-col gap-4">
        {userDetails.cart.length > 0 ? userDetails.cart.map((product, index) => (
          <CartProduct key={index} cartproduct={product} />
        )) : (
          <div className="w-full col-span-full flex flex-col justify-center items-center h-[60vh] ">
          <p className="text-zinc-700 font-semibold capitalize leading-tight  ">
            You cart is empty
          </p>
          <Link to="/product" className="text-blue-500 hover:text-blue-700 text-lg capitalize">
            explore products</Link>
        </div>
        )}
      </div>
      <div className="w-full border-[1px] border-surface p-4 lg:p-10 mt-10 rounded-lg ">
        <h2 className='text-xl mb-2'>Billing</h2>
        <div className="border-b-2 border-secondary ">
          <div className="flex px-10 w-full justify-between">
            <h3>All Product:</h3> <h3>+${productTotalPrice} </h3>
          </div>
          <div className="flex px-10 w-full justify-between">
            <h3>Shipping:</h3> <h3>+${setshippingCost} </h3>
          </div>
          <div className="flex px-10 w-full justify-between">
            <h3>Discount:</h3> <h3>-${discount} </h3>
          </div>
        </div>
        <div className="flex px-10 w-full justify-between mt-2">
          <h3 className='text-lg font-semibold'>Total:</h3> 
          <h3 className='text-lg font-semibold'>${totalOrder} </h3>
        </div>
      </div>
      <div className=" w-full my-4 flex lg:block">
        <Link to={'checkout'} className=" bg-primary text-white py-2 lg:px-10 rounded-lg w-full text-center">
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart