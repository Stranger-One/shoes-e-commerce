import React, { useState } from 'react'
import { products } from '../data/productData'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const CheckoutProduct = ({ productId }) => {
   
    const productArr = products.filter(product => product.id === productId)
    const product = productArr[0]

    

    return (
        <div className='w-full grid grid-cols-[200px_auto] border-[1px] border-surface p-2 rounded-lg '>
            <div className="h-[200px] grid content-center p-4 bg-white rounded-lg ">
                <img src={product.photos[0]} alt="" />
            </div>
            <div className=" grid grid-cols-[auto_40px] ">
                <div className="px-6 flex flex-col gap-1">
                    <h2 className="text-lg font-semibold ">{product.title}</h2>
                    <div className='flex items-center '>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        {product.rating}
                        ({product.num_reviews})
                    </div>
                    <p className="text-sm text-secondary line-clamp-3">{product.description}</p>
                    <p className="text-[16px] text-secondary">Price: ${product.offer.price}</p>
                    {/* <p className="text-sm text-secondary">Quantity: {product.quantity || 1}</p> */}
                    <div className=" flex items-center">
                        <span className='mr-4'>Quantity:</span>
                        1
                    </div>
                </div>
                <Link to={`/product/${productId}`} className="flex items-center justify-center hover:bg-surface rounded-lg duration-200 group" >

                    <IoIosArrowForward className='text-xl group-hover:translate-x-1 duration-200 ' />

                </Link>
            </div>
        </div>
    )
}

export default CheckoutProduct