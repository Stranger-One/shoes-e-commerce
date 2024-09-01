import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import { Footer, Header, ProductDetails } from './pages'
import { useDispatch } from 'react-redux'
import { loginUser } from './store/authSlice'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if(currentUser){
      dispatch(loginUser(currentUser))
      // console.log(currentUser);
      
    }
  },[])

  return (
    <section className='w-full h-full min-h-screen  bg-ground '>
      <Header />
      <Toaster position="top-center" />
      <main className='w-full h-full min-h-screen pt-14'>
        <Outlet />
        {/* <ProductDetails/> */}
      </main>
      <Footer />
    </section>
  )
}

export default App