import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/authSlice';

const MyAccount = () => {
  const location = useLocation();
  const userStatus = useSelector(state => state.auth.userStatus)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(userStatus);
  // console.log(location);

  const logoutHandle = () => {
    dispatch(logoutUser())
    localStorage.removeItem('currentUser')
    navigate('/')
  };



  return (
    <section className="w-full pt-16 px-10 relative">
      <div className="col-span-2 h-fit  flex items-center px-10 bg-ground w-full py-2 fixed top-14 left-0 z-10">
        <p className="text-zinc-700 font-semibold capitalize leading-tight ">{location.pathname} </p>
      </div>
      {userStatus ? (
        <div className=" grid grid-cols-[250px_auto] gap-2 pb-10">
          <div className="h-[80vh] sticky top-24 flex flex-col justify-between  border-r-2 border-surface pr-2 ">
            <div className="  ">
              <Link to='/account/profile' className="w-full flex items-center justify-between h-10 px-2 text-[16px] bg-surface rounded-lg mt-1 ">
                <span>My Profile</span> <IoIosArrowForward />
              </Link>
              <Link to='/account/orders' className="w-full flex items-center justify-between h-10 px-2 text-[16px] bg-surface rounded-lg mt-1 ">
                <span>My Orders</span> <IoIosArrowForward />
              </Link>
              <Link to='/account/wishlist' className="w-full flex items-center justify-between h-10 px-2 text-[16px] bg-surface rounded-lg mt-1 ">
                <span>My Wishlist</span> <IoIosArrowForward />
              </Link>
              <Link to='/account/cart' className="w-full flex items-center justify-between h-10 px-2 text-[16px] bg-surface rounded-lg mt-1 ">
                <span>My Cart</span> <IoIosArrowForward />
              </Link>
            </div>

            <button type='button' onClick={logoutHandle} className="w-full flex items-center justify-between h-10 px-2 text-[16px] bg-surface rounded-lg mt-1 ">
              <span>Log out</span> <IoIosArrowForward />
            </button>
          </div>
          <Outlet />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[60vh] ">
          <p className="text-zinc-700 font-semibold capitalize leading-tight ">
            You are not logged in. Please login to access your account.
          </p>
          <Link to="/login" className="text-blue-500 hover:text-blue-700 text-lg">
            Login</Link>
        </div>
      )}
    </section>
  )
}

export default MyAccount