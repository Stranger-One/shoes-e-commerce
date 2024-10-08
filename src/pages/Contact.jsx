import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import toast from 'react-hot-toast';



const Contact = () => {

  const location = useLocation();
  const userStatus = useSelector(state => state.auth.userStatus)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userStatus) {
      toast.error('Please login first..')
      return
    }
    
    if (name !== '' && email !== '' && phone !== '' && message !== '') {
      const data = {
        name,
        email,
        phone,
        message
      }

      // console.log(data);
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      toast.success("Message send successfully")
    } else {
      toast.error("Please fill all the fields")
    }

  }

  return (
    <section className="w-full pt-16 px-4 lg:px-10 relative">
      <div className="col-span-2 h-fit  flex items-center px-4 lg:px-10 bg-ground w-full py-2 fixed top-14 left-0 z-10">
        <p className="text-zinc-700 font-semibold capitalize leading-tight ">{location.pathname} </p>
      </div>

      <div className="lg:h-[70vh] pb-10 lg:pb-0 grid grid-cols-1 lg:grid-cols-[250px_auto] gap-2 ">
        <div className="boxShadow p-6">
          <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <span className='p-2 rounded-full bg-secondary'><IoCallOutline className=' text-ground text-xl' /></span>
              <h2 className='capitalize text-lg'>Call to us</h2>
            </div>
            <p className='text-sm leading-tight'>we are available 24/7</p>
            <p className='text-sm leading-tight'><strong>Phone: </strong> +91 9238648732</p>
          </div>
          <hr className='my-4 border-t-2 border-secondary' />
          <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <span className='p-2 rounded-full bg-secondary'><MdOutlineMailOutline className=' text-ground text-xl' /></span>
              <h2 className='capitalize text-lg'>Wriet to us</h2>
            </div>
            <p className='text-sm leading-tight'>Find out our form and we will contact you within 24 hours</p>
            <p className='text-sm leading-tight'><strong>Email: </strong> zasira.support@gmail.com</p>
            <p className='text-sm leading-tight'><strong>Email: </strong> zasira.support@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className=" p-6 boxShadow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Your Name *' className='py-2 px-4 rounded-lg outline-none boxShadow' />
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Your Email *' className='py-2 px-4 rounded-lg outline-none boxShadow' />
            <input value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder='Your Phone *' className='py-2 px-4 rounded-lg outline-none boxShadow' />
            <textarea value={message} onChange={e => setMessage(e.target.value)} name="" id="" placeholder='Your Message *' className='py-1 px-4 rounded-lg outline-none boxShadow lg:col-span-3 ' rows={'12'}>{message}</textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button type='submit' className='bg-secondary text-white py-1 px-4 rounded-lg outline-none'>Send</button>
          </div>

        </form>
      </div>

    </section>
  )
}

export default Contact