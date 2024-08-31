import React, { useState } from 'react'
import { products } from '../data/productData.js'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

import { FaMinus, FaPlus } from 'react-icons/fa';

const CartProduct = ({ productId }) => {
    const [quantity, setQuantity] = useState(1)
    const productArr = products.filter(product => product.id === productId)
    const product = productArr[0]
    // console.log(product);

    const minusBtn = () => {
        if(quantity === 1) return
        setQuantity(quantity => quantity - 1)    
    };
    const plusBtn = () => {
        if(quantity === 10) return
        setQuantity(quantity => quantity + 1)    
    };

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
                        <p className="text-sm text-secondary line-clamp-2">{product.description}</p>
                        <p className="text-[16px] text-secondary font-semibold">Price: ${product.offer.price}</p>
                        <div className=" flex items-center">
                            <span className='mr-4'>Quantity:</span>
                            <button onClick={minusBtn} className='text-lg hover:bg-surface p-1 rounded-full'><FaMinus />
                            </button>
                            <span className='px-10'>{product.quantity || quantity}</span>
                            <button onClick={plusBtn} className='text-lg hover:bg-surface p-1 rounded-full'><FaPlus />
                            </button>
                        </div>
                        <div className="flex justify-end w-full ">
                            <button className=" hover:bg-surface duration-150 border-secondary border-[1px] text-secondary py-1 px-4 rounded">- Remove from Cart</button>
                        </div>
                    </div>
                    <Link to={`/product/${productId}`} className="flex items-center justify-center hover:bg-surface group rounded-lg " >
                        <IoIosArrowForward className='text-xl group-hover:translate-x-1 duration-200' />
                    </Link>
                </div>
            </div>

    )
}

export default CartProduct