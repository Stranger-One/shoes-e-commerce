import { BiUser } from "react-icons/bi";
import {AiOutlineUnlock} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useState } from "react";


const Signup = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPass, setConfPass] = useState('')

  const [userAccounts, setUserAccounts] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    let userAccounts = JSON.parse(localStorage.getItem('UserAccounts')) || []
    setUserAccounts(userAccounts)
    console.log("userAccounts", userAccounts);
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name,
      email,
      password,
      confPass
    }
    if(name === '' || email === '' || password === '' || confPass === ''){
      alert('Please fill all the fields')
      return
    }
    if(password !== confPass){
      alert('Passwords do not match')
      return
    }
    console.log(userData);

    setUserAccounts([...userAccounts, userData])
    localStorage.setItem('UserAccounts', JSON.stringify([...userAccounts, userData]))
      
    alert('Account created successfully')
    navigate('/login')
  };


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-800 w-96 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Sign up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-8">
            <input
              onChange={(e)=>setname(e.target.value)}
              value={name}
              type="username"
              className="block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-primary peer "
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Your Full Name
            </label>
            <BiUser className="absolute text-md top-0 right-0" />
          </div>
          <div className="relative my-8">
            <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              type="email"
              className="block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-primary peer "
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Your Email
            </label>
            <MdOutlineEmail className="absolute text-md top-0 right-0" />
          </div>
          <div className="relative my-8">
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              type="password"
              className="block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-primary peer "
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Your Password
            </label>
            <AiOutlineUnlock className="absolute text-md top-0 right-0" />
          </div>
          <div className="relative my-8">
            <input
            onChange={(e)=>setConfPass(e.target.value)}
            value={confPass}
              type="password"
              className="block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-primary peer "
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {" "}
              Confirm Password
            </label>
            <AiOutlineUnlock className="absolute text-md top-0 right-0" />
          </div>

          <button
            className="w-full mb-4 text-[16px] mt-6 rounded-full bg-white text-secondary hover:bg-primary  py-3 transition-colors duration-300"
            type="submit"
          >
            Signup
          </button>
          <div>
            <span className="m-4">
              Already Created an Account?{" "}
              <Link className="text-primary" to="/Login">
                {" "}
                Login{" "}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;