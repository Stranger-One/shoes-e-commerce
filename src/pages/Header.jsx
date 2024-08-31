import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { GblBtn } from '../components';
import { LuUser } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSearch } from "react-icons/io";




const Header = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.auth.userStatus)


  const navLinks = [
    {
      label: 'Home',
      icon: <IoHomeOutline className='text-3xl' />,
      url: '/'
    },
    {
      label: 'About',
      icon: <FaUserGroup className='text-3xl' />,
      url: '/about'
    },
    {
      label: 'Products',
      icon: <FaUserGroup className='text-3xl' />,
      url: '/product'
    },
    {
      label: 'Contact',
      icon: <IoCallOutline className='text-3xl' />,
      url: '/contact'
    },
    {
      label: 'Account',
      icon: <LuUser className='text-3xl' />,
      url: '/account'
    },
  ]

  // const otherLinks = [

  //   {
  //     label: 'Cart',
  //     icon: <BsCart2 className='text-3xl' />,
  //     url: '',
  //     count: 0

  //   },
  //   {
  //     label: 'Wishlist',
  //     icon: <IoMdHeartEmpty className='text-3xl' />,
  //     url: '',
  //     count: 0
  //   },
  //   {
  //     label: 'Orders',
  //     icon: <HiTemplate className='text-3xl' />,
  //     url: '',
  //     count: 0
  //   },
  // ]

  const handleSearch = () => {
      
  };



  return (
    <header className='w-full h-14 border-b-[1px] border-surface flex items-center px-4 lg:px-10 justify-between fixed top-0 left-0 z-50 bg-ground'>
      <div className=' w-10 h-10 rounded-full overflow-hidden flex justify-between items-center '>
        <img src="/zasira_logo.png" alt="" className='h-full w-full' />
      </div>

      <div className="w-full flex justify-end gap-6 px-10 ">

        <ul className=' flex gap-2'>
          {navLinks.map((item, index) => (
            <NavLink key={index} to={item.url} className={({ isActive }) =>
              `flex items-center text-2xl gap-2 hover:bg-surface px-2 rounded-md ${isActive ? "bg-surface" : ""} `
            } >
              <div className="md:hidden">
                <React.Fragment >
                  {item.icon}
                </React.Fragment>
              </div>
              <h2 className='text-[16px] '>{item.label}</h2>
            </NavLink>
          ))}
        </ul>

        <form onSubmit={handleSearch} className='grid lg:grid-cols-[auto_20px] gap-1 rounded-lg border-secondary border-[1px] px-2 py-[2px] '>
          <input type="text" placeholder='Search Your Products..' className='bg-transparent outline-none text-[16px] md:hidden lg:block' />
          <button type='submit' className=' '><IoIosSearch className='text-2xl' /></button>
        </form>
      </div>
      {userStatus ? (
        <div className=" relative   flex items-center ">

          <Link to="/account/wishlist" className='px-2 py-2 rounded-full hover:bg-surface'>
            {/* <HiMenuAlt3 className='text-3xl' /> */}
            <IoMdHeartEmpty className='text-2xl' />
          </Link>
          <Link to="/account/cart" className='px-2 py-2 rounded-full hover:bg-surface'>
            {/* <HiMenuAlt3 className='text-3xl' /> */}
            <BsCart2 className='text-2xl' />
          </Link>
        </div>
      ) : (
        <Link to='/login' className='bg-primary px-6 py-1 text-background rounded-lg text-xl w-fit ' >
          Login
        </Link>
      )}

      {/* <div className="px-1 py-1 relative hover:bg-surface rounded-full">
        <Link to=""><HiMenuAlt3 className='text-3xl' />
        </Link>
      </div> */}

    </header>
  )
}

export default Header