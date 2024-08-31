import React from 'react'
import { products } from '../data/productData'


const MoreProduct = ({indexNum, index}) => {
    const product = products[indexNum]
    return (
        <div key={index} className='p-2 w-full h-[300px] border-[1px] border-surface rounded-md bg-ground boxShadow '>
            <div className="w-full h-[150px] bg-white mb-4 p-2 grid content-center overflow-hidden">
                <img src={product.photos[0]} alt="product image" className=" object-center w-full " />
            </div>
            <div className="text-start">
                <h2 className="text-lg font-semibold text-secondary/70 uppercase">{product.brand} </h2>
                <h2 className="text-lg line-clamp-1 ">{product.title} </h2>
                <h2 className="text-lg ">{product.price || product.offer.price} <span className='text-primary'>{product.discount || '20% off'}</span> </h2>
                
                <h2 className="text-lg ">Free Delivery</h2>
            </div>
        </div>)
}

export default MoreProduct