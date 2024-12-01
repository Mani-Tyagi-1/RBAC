import React from 'react'
import image from '../assets/User.jpg'
import { Link } from 'react-router-dom'

const UserPage = (params) => {
  return (
    <div>
      <div className="min-w-screen min-h-screen flex flex-col gap-4 justify-center items-center bg-black relative">
        <div className="z-10 text-white absolute top-0 right-0 p-4">
          <Link to="/login">Logout</Link>
        </div>
        <div>
          <img
            className="w-[100vw] h-[100vh] object-cover"
            src={image}
            alt="Your Company"
          />
        </div>
        <h1 className="text-7xl font-bold text-white absolute">Welcome User</h1>
      </div>
    </div>
  );
}

export default UserPage