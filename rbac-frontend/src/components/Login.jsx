import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import image from '../assets/Gokuu.jpg'



const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  // const [role, setRole] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7001/api/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");

      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-end">
      <div className="flex flex-col items-center absolute">
        <img className="w-[100vw] h-[100vh] object-cover" src={image} alt="Your Company" />
      </div>

      <div className="flex flex-col justify-center items-center relative z-10 mx-[100px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[400px]  border border-gray-300 rounded-md p-4 bg-white bg-opacity-20 text-white"
        >
          <h2 className="text-4xl font-bold text-center ">Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 bg-transparent font-bold placeholder:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 bg-transparent font-bold placeholder:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 mt-4"
          >
            Login
          </button>

          <div>Didn't have an account? <a href="/" className='font-bold text-[20px] text-blue-500'>Register</a></div>
        </form>

      </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <h2>Login</h2>
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Email"
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Login</button>
    // </form>
  );
}

export default Login