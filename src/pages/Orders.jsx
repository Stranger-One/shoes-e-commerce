import React, { useEffect, useState } from 'react'
import { Order } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = () => {
  const userDetails = useSelector(state => state.auth.userDetails)
  const userStatus = useSelector(state => state.auth.userStatus)
  const dispatch = useDispatch()

  const [orderHistory, setOrderHistory] = useState([])

  useEffect(() => {
    if (userStatus) {
      setOrderHistory(userDetails.orderHistory)
    }
  }, [dispatch, useSelector])

  return (
    <div className='w-full flex flex-col gap-2 px-4 lg:px-10 pb-10'>
      {orderHistory.length > 0 ? (
        [...orderHistory].reverse().map((productId, index) => (
          <Order productId={productId} key={index} />
        ))
      ) : (
        <div className="w-full col-span-full flex flex-col justify-center items-center h-[60vh]">
          <p className="text-zinc-700 font-semibold capitalize leading-tight">
            Your wishlist is empty
          </p>
          <Link to="/product" className="text-blue-500 hover:text-blue-700 text-lg capitalize">
            Explore products
          </Link>
        </div>
      )}


    </div>
  )
}

export default Orders