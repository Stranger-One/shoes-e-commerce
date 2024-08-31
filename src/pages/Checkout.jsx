import React from 'react'
import { CheckoutProduct, Order } from '../components'
import { Link } from 'react-router-dom'
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";

const Checkout = () => {
    return (
        <div className='px-10 w-full'>
            <h2>Order Summary</h2>
            <div className="w-full p-4 flex flex-wrap justify-between items-center my-2 boxShadow">
                <h2 className='text-2xl leading-tight col-span-full mb-2'>Delivered to:</h2>
                <div className="">
                    <h2 className='capitalize'>customer name, 789796</h2>
                    <h2 className='capitalize'>123, mahulpali, sambalpur, odisha</h2>
                </div>
                <Link className='px-2 py-1 text-lg rounded-lg border-[1px] border-secondary leading-tight h-fit'>Change</Link>
            </div>
            <div className="w-full p-4 flex flex-col  my-2 boxShadow ">
                <h2 className='text-2xl leading-tight mb-2'>Payment Method:</h2>
                <div className="w-full flex gap-4 justify-between items-center  px-10 py-2  hover:shadow-lg duration-200 hover:-translate-y-[1px] ">
                    <input type="radio" name='Payment' id='upi' className='w-4 h-4' />
                    <label htmlFor="upi" className='w-full mr-10 flex justify-between gap-2 items-center'>
                        <span>UPI</span> <span className='self-end rounded-full hover:bg-surface p-2'><IoIosArrowDown /></span>
                    </label>
                </div>
                <hr className='my-1 border-t-2 border-surface' />
                <div className="w-full flex gap-4 justify-between items-center  px-10 py-2  hover:shadow-lg duration-200 hover:-translate-y-[1px] ">
                    <input type="radio" name='Payment' id='credit' className='w-4 h-4' />
                    <label htmlFor="credit" className='w-full mr-10 flex justify-between gap-2 items-center'>
                        <span className='flex items-center gap-2'><FaCreditCard />Credi Card</span> <span className='self-end rounded-full hover:bg-surface p-2'><IoIosArrowDown /></span>
                    </label>
                </div>
                <hr className='my-1 border-t-2 border-surface' />
                <div className="w-full flex gap-4 justify-between items-center  px-10 py-2  hover:shadow-lg duration-200 hover:-translate-y-[1px] ">
                    <input type="radio" name='Payment' id='banking' className='w-4 h-4' />
                    <label htmlFor="banking" className='w-full mr-10 flex justify-between gap-2 items-center'>
                        <span className='flex items-center gap-2'><RiBankFill />Net Banking</span> <span className='self-end rounded-full hover:bg-surface p-2'><IoIosArrowDown /></span>
                    </label>
                </div>
                <hr className='my-1 border-t-2 border-surface' />
                <div className="w-full flex gap-4 justify-between items-center  px-10 py-2  hover:shadow-lg duration-200 hover:-translate-y-[1px] ">
                    <input type="radio" name='Payment' id='cash' className='w-4 h-4' />
                    <label htmlFor="cash" className='w-full mr-10 flex justify-between gap-2 items-center'>
                        <span className='flex items-center gap-2'><BsCashStack />Cash on Delivery</span> <span className='self-end rounded-full hover:bg-surface p-2'><IoIosArrowDown /></span>
                    </label>
                </div>
            </div>
            <div className="w-full p-4 flex flex-wrap justify-between items-center my-2 boxShadow">
                <h2 className='text-2xl leading-tight col-span-full mb-2'>Amount:</h2>
                <span>$4985</span>
            </div>
            <div className="w-full flex justify-end items-center my-2 bg-primary/80 hover:bg-primary  py-2 boxShadow hover:-translate-y-[1px] duration-200  ">
                <button className='mx-auto w-fit'>Place Order</button>
            </div>


        </div>
    )
}

export default Checkout