import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import image from '../assets/Kakashi.jpg'

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7001/api/auth/register",
        formData
      );
      alert("User registered successfully!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div className="min-h-screen flex items-center ">
      <div className="flex flex-col items-center absolute">
        <img
          className="w-[100vw] h-[100vh] object-cover"
          src={image}
          alt="Your Company"
        />
      </div>

      <div className="flex flex-col mx-[100px]  items-center relative z-10 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[400px] text-white  border border-gray-300 rounded-md p-4 bg-white bg-opacity-10"
        >
          <h2 className="text-4xl font-bold text-center ">Register</h2>
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
          <select
            name="role"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 bg-transparent font-bold placeholder:text-white"
          >
            <option value="" className="font-bold text-black">
              Select Role
            </option>
            <option value="admin" className="text-black">
              Admin
            </option>
            <option value="manager" className="text-black">
              Manager
            </option>
            <option value="user" className="text-black">
              User
            </option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 mt-4"
          >
            Register
          </button>

          <div>
            Already have an account?{" "}
            <a href="/login" className="font-bold text-[20px] text-blue-500">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register



