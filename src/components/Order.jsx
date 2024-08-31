import React from 'react'
import { products } from '../data/productData.js'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const Order = ({ productId, orderId = '12765794' }) => {
    const productArr = products.filter(product => product.id === productId)
    const product = productArr[0]
    // console.log(product);


    return (
        <Link to={`${orderId}`} >
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
                        <p className="text-sm text-secondary">Quantity: {product.quantity || 1}</p>
                    </div>
                    <div className="flex items-center justify-center hover:bg-surface rounded-lg duration-200 group">
                        <IoIosArrowForward className='text-xl group-hover:translate-x-1 duration-200 ' />
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Order