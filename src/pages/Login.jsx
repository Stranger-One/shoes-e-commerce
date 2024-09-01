import React, { useEffect, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/authSlice';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const [userAccounts, setUserAccounts] = useState([])
  const navigate = useNavigate()

  const userDetails = useSelector(state => state.auth.userDetails) 
  const dispatch = useDispatch()

  useEffect(() => {
    let userAccounts = JSON.parse(localStorage.getItem('UserAccounts')) || []
    setUserAccounts(userAccounts)
    // console.log("userAccounts", userAccounts);
    // console.log("userDetails", userDetails);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if( email === '' || password === '' ){
      toast.error('Invalid credentials')
      return
    }

    const userAccount = userAccounts.filter(account => account.email === email)
    // console.log(userAccount[0].password);
    // console.log(password);

    if(userAccount[0].password !== password){
      toast.error('Invalid credentials')
      return
    }

    // console.log(userAccount[0]);

    localStorage.setItem('currentUser', JSON.stringify(userAccount[0]))
    
    dispatch(loginUser({...userAccount[0], email}))

    toast.success("Login successfully")
    navigate('/')
  };





  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='bg-slate-800 w-96 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
        <form onSubmit={handleSubmit} >
          <div className='relative my-4'>
            <input onChange={(e)=>setEmail(e.target.value)}
              value={email} type="email" className='block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-primary peer ' placeholder='' />
            <label htmlFor='' className='absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Your Email</label>
            <MdOutlineEmail className='absolute text-md top-0 right-4' />
          </div>
          <div className='relative mt-8 mb-4'>
            <input  onChange={(e)=>setPassword(e.target.value)}
              value={password} type="password" className='block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-primary peer ' placeholder='' />
            <label htmlFor='' className='absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' > Your Password</label>
            <AiOutlineUnlock className='absolute text-md top-0 right-4' />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <input type="checkbox" name='' id='' />
              <label htmlFor="Remember Me">Remeber Me</label>
            </div>
            <Link to='' className='text-primary'>Forget Password</Link>
          </div>
          <button className='w-full mb-4 text-[16px] mt-6 rounded-full bg-white text-secondary hover:bg-primary  py-3 transition-colors duration-300' type='submit'>Login</button>
          <div>
            <span className='m-4'>New Here? <Link className='text-primary' to='/signup'>Create an account</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login