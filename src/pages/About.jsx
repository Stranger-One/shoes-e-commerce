import React from 'react'
import { useLocation } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const About = () => {
  const location = useLocation();

  return (
    <section className="w-full pt-16 px-4 lg:px-10 relative">
      <div className="col-span-2 h-fit flex items-center px-4 lg:px-10 bg-ground w-full py-2 fixed top-14 left-0 z-10">
        <p className="text-zinc-700 font-semibold capitalize leading-tight ">{location.pathname} </p>
      </div>
      <div className="w-full lg:px-10 flex flex-col gap-10 mb-10">
        <div className="w-full grid lg:grid-cols-2 gap-20 ">
          <div className="flex justify-center items-center flex-col">
            <h2 className='text-3xl font-semibold'>About Us</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus dolore iure adipisci, ab, delectus exercitationem velit veniam expedita, cupiditate debitis veritatis. Perspiciatis, a vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ea sapiente exercitationem culpa delectus ex libero, enim inventore possimus nostrum est vitae blanditiis fugit cum illum. Modi iusto accusantium molestias?</p>
          </div>
          <div className="overflow-hidden relative bg-red-50">
            <img src="/3867294.jpg" alt="" className='object-scale-down h-full object-center' />
          </div>
        </div>
        <div className=" flex flex-col items-center ">
          <h2 className='text-3xl font-semibold'>Our Mission</h2>
          <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis modi odit nihil, voluptas dolor placeat impedit corrupti ipsum nam, nesciunt dolore inventore alias ex? Voluptatum, praesentium. Itaque libero dicta nostrum.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur aliquam veniam voluptatem libero pariatur, molestias totam eius sint vitae aspernatur nemo architecto ad laborum voluptatibus nostrum delectus labore reiciendis deserunt eveniet. Sapiente cumque eos, totam commodi laborum quaerat voluptate aliquam assumenda architecto numquam natus recusandae, in deserunt nihil. Exercitationem officiis.</p>
        </div>
        <div className="">

        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 content-center my-10 gap-4 ">
          <div className='flex flex-col items-center border-surface border-[1px] py-10 rounded-lg justify-center'>
            <div className="h-12 w-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
              <TbTruckDelivery className='text-ground text-2xl' />
            </div>
            <h2 className='uppercase text-lg'>free and fast delivery</h2>
            <p className='text-sm text-zinc-500'>free delivery for order over $78</p>
          </div>
          <div className='flex flex-col items-center border-surface border-[1px] py-10 rounded-lg justify-center'>
            <div className="h-12 w-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
              <BiSupport className='text-ground text-2xl' />
            </div>
            <h2 className='uppercase text-lg'>free and fast delivery</h2>
            <p className='text-sm text-zinc-500'>free delivery for order over $78</p>
          </div>
          <div className='flex flex-col items-center border-surface border-[1px] py-10 rounded-lg justify-center'>
            <div className="h-12 w-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
              <IoShieldCheckmarkOutline className='text-ground text-2xl ' />
            </div>
            <h2 className='uppercase text-lg'>free and fast delivery</h2>
            <p className='text-sm text-zinc-500'>free delivery for order over $78</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About