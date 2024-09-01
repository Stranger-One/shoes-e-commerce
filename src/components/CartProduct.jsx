import React, { useState } from 'react'
import { products } from '../data/productData.js'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

import { FaMinus, FaPlus } from 'react-icons/fa';
import { updateUserDetails } from '../store/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const CartProduct = ({ cartproduct }) => {
    // console.log(cartproduct);
    const [quantity, setQuantity] = useState(cartproduct.quantity)
    const productArr = products.filter(product => product.id === cartproduct.productId)
    const product = productArr[0]
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.auth.userDetails)
    const [userAccounts, setUserAccounts] = useState(JSON.parse(localStorage.getItem('UserAccounts')))
    // console.log(product);

    const minusBtn = () => {
        if (quantity === 1) return
        setQuantity(quantity => quantity - 1)


        let updatedDetails = {
            ...userDetails,
            cart: userDetails.cart.map(cartprod => {
                if (cartprod.productId === cartproduct.productId) {
                    return { ...cartprod, quantity: quantity - 1 }
                } else {
                    return cartprod
                }
            })
        }
        dispatch(updateUserDetails(updatedDetails))
        localStorage.setItem('currentUser', JSON.stringify(updatedDetails))

        const updatedAccounts = userAccounts.map((accounts) => {
            if (accounts.email === userDetails.email) {
                return updatedDetails
            } else {
                return accounts
            }
        })
        localStorage.setItem('UserAccounts', JSON.stringify(updatedAccounts))
    };
    const plusBtn = () => {
        if (quantity === 10) return
        setQuantity(quantity => quantity + 1)

        let updatedDetails = {
            ...userDetails,
            cart: userDetails.cart.map(cartprod => {
                if (cartprod.productId === cartproduct.productId) {
                    return { ...cartprod, quantity: quantity + 1 }
                } else {
                    return cartprod
                }
            })
        }
        dispatch(updateUserDetails(updatedDetails))
        localStorage.setItem('currentUser', JSON.stringify(updatedDetails))

        const updatedAccounts = userAccounts.map((accounts) => {
            if (accounts.email === userDetails.email) {
                return updatedDetails
            } else {
                return accounts
            }
        })
        localStorage.setItem('UserAccounts', JSON.stringify(updatedAccounts))
    };

    const removeFromCart = () => {
        let cart = userDetails.cart.filter(product => product.productId !== cartproduct.productId)
        let updatedDetails = {
            ...userDetails,
            cart: cart
        }
        dispatch(updateUserDetails(updatedDetails))
        localStorage.setItem('currentUser', JSON.stringify(updatedDetails))

        const updatedAccounts = userAccounts.map((account) => {
            if (account.email === userDetails.email) {
                return updatedDetails
            } else {
                return account
            }
        })
        localStorage.setItem('UserAccounts', JSON.stringify(updatedAccounts))

        toast.success("Item removed successfully")
    };

    return (
        <div className='w-full grid lg:grid-cols-[200px_auto] border-[1px] border-surface p-2 rounded-lg '>
            <div className="h-[200px] grid content-center p-4 bg-white rounded-lg ">
                <img src={product.photos[0]} alt="" />
            </div>
            <div className=" grid lg:grid-cols-[auto_40px] ">
                <div className="px-4 lg:px-6 flex flex-col gap-1">
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
                    <div className="flex justify-center lg:justify-end w-full mt-4 lg:mt-0 ">
                        <button onClick={removeFromCart} className="w-full hover:bg-surface duration-150 border-secondary border-[1px] text-secondary py-1 px-4 rounded">- Remove from Cart</button>
                    </div>
                </div>
                <Link to={`/product/${cartproduct.productId}`} className="flex items-center justify-center hover:bg-surface group rounded-lg mt-4 py-2 lg:py-0 lg:mt-0" >
                    <IoIosArrowForward className='text-xl group-hover:translate-x-1 duration-200' />
                </Link>
            </div>
        </div>

    )
}

export default CartProduct