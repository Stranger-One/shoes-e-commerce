import React from 'react'
import { products } from '../data/productData.js'
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';


const SimilarProduct = ({ productId }) => {
  const productArr = products.filter(product => product.id == productId)
  const product = productArr[0]
  // console.log(product)

  return (
    <Link to={`/product/${product.id}`}>

      <div className='p-2 w-full h-[300px] border-[1px] border-surface rounded-md bg-ground boxShadow '>
        <div className="w-full h-[120px] bg-white mb-4 p-2 grid content-center overflow-hidden">
          <img src={product.photos[0]} alt="product image" className=" object-center w-full " />
        </div>
        <div className="text-start">
          <h2 className="text-sm font-semibold text-secondary/70 uppercase">{product.brand} </h2>
          <h2 className="text-sm ">{product.title} </h2>
          <h2 className="text-sm ">{product.price || product.offer.price} </h2>
          <h2 className="text-sm ">{product.discount || '20% off'} </h2>
          <div className='flex items-center '>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            ({product.num_reviews})
          </div>
          <h2 className="text-sm ">Free Delivery</h2>

        </div>

      </div>
    </Link>
  )
}

export default SimilarProduct