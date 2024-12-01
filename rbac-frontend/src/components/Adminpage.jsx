import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Admin.jpg'

const Adminpage = () => {
  return (
    <div className='min-w-screen min-h-screen flex flex-col gap-4 justify-center items-center bg-black relative'>
      <div className='z-10 text-white absolute top-0 right-0 p-4'>
        <Link to="/login">Logout</Link>
      </div>
      <div className='flex flex-col items-center absolute'>
        <img className='w-[100vw] h-[100vh] object-cover' src={image} alt="Your Company" />
      </div>
      <div className='z-10 flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-7xl font-bold text-white '>Welcome Admin</h1>
      <Link to="/manager" className='text-2xl'>Check Your Manager</Link>
      <Link to="/user" className='text-2xl'>Check Your User</Link>
      </div>
    </div>
  )
}

export default Adminpage