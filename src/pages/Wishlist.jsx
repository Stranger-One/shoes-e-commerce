import React from 'react'
import { ProductCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const userDetails = useSelector(state => state.auth.userDetails)
  


  return (
    <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 lg:px-10 pb-10'>
      {userDetails.wishlist.length > 0 ? userDetails.wishlist.map((productId,  index)=> (
        <ProductCard key={index} productId={productId} />
      )) : (
        <div className="w-full col-span-full flex flex-col justify-center items-center h-[60vh] ">
          <p className="text-zinc-700 font-semibold capitalize leading-tight  ">
            You wishlist is empty
          </p>
          <Link to="/product" className="text-blue-500 hover:text-blue-700 text-lg capitalize">
            explore products</Link>
        </div>
      )}
      
    </div>
  )
}

export default Wishlist