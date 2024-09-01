import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserDetails } from '../store/authSlice'
import toast from 'react-hot-toast'

const Profile = () => {
  const userDetails = useSelector(state => state.auth.userDetails)
  const dispatch = useDispatch()

  const [name, setName] = useState(userDetails.name)
  const [email, setEmail] = useState(userDetails.email)
  const [phone, setPhone] = useState(userDetails.phone)
  const [address, setAddress] = useState(userDetails.address)
  const [city, setCity] = useState(userDetails.city)
  const [state, setState] = useState(userDetails.state)
  const [pin, setPin] = useState(userDetails.pin)
  
  const [userAccounts, setUserAccounts] = useState([])
  const [currentUserDetails, setcurrentUserDetails] = useState({})

  useEffect(()=>{
    let userAccounts = JSON.parse(localStorage.getItem('UserAccounts')) || []
    setUserAccounts(userAccounts)
    const user = userAccounts.filter((acc) => acc.email === userDetails.email)
    setcurrentUserDetails(user[0])
    // console.log(user);
    // console.log("userAccounts", userAccounts);
  }, [])

  const list = [
    {
      label: 'Name:',
      value: name,
      placeholder: 'Your Name...',
      onchange: setName,
    },
    {
      label: 'Email:',
      value: email,
      placeholder: 'Your Email...',
      onchange: setEmail,
    },
    {
      label: 'Phone:',
      value: phone,
      placeholder: 'Your Phone...',
      onchange: setPhone
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    const inputDetails = {
      ...currentUserDetails,
      name,
      email,
      phone,
      address,
      city,
      state,
      pin
    }

    // console.log(inputDetails);
    localStorage.setItem('currentUser', JSON.stringify(inputDetails))

    let updatedAccounts = userAccounts.map(acc => {
      if(acc.email === inputDetails.email){
        return {...acc, ...inputDetails}
      } else {
        return acc
      }
    })

    localStorage.setItem('UserAccounts', JSON.stringify(updatedAccounts))


    dispatch(updateUserDetails({...userDetails, ...inputDetails}))

    toast.success("Profile updated successfully")
  };


  return (
    <div className=' mb-10'>
      <form onSubmit={handleSubmit}>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:pl-10  mb-10">
          {list.map((item, index) => (
            <div key={index} className='flex flex-col'>
              <label htmlFor={item.index}>{item.label} </label>
              <input onChange={(e) => item.onchange(e.target.value)} placeholder={item.placeholder} type="text" id={item.index} value={item.value} className='py-2 outline-none rounded-lg px-3' />
            </div>
          ))}
          <div className="lg:col-span-2 flex flex-col">
            <label htmlFor="address">Address </label>
            <textarea  name="" id="address" placeholder='Address..' onChange={e => setAddress(e.target.value)} value={address} className='p-4 outline-none rounded-lg'></textarea>
          </div>
          {[{ label: "City", value: city, onchange: setCity },
          { label: "State", value: state, onchange: setState },
          { label: "Pincode", value: pin, onchange: setPin }].map((item, index) => (
            <div key={index} className='flex flex-col'>
              <label htmlFor={item.index}>{item.label} </label>
              <input  type="text" placeholder={`${item.label}...`} onChange={(e) =>  item.onchange(e.target.value)} id={item.index} value={item.value} className='py-2 outline-none rounded-lg px-3' />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <button type='submit' className="bg-primary hover:bg-primary/80 px-4 py-1 text-white font-bold  rounded">Save</button>
        </div>
      </form>

    </div>
  )
}

export default Profile