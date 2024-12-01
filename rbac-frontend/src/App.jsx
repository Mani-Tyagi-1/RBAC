import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import Manager from './components/managerpage.jsx'
import User from './components/UserPage.jsx'


function App() {

  return (
    <>
      <Router>
        {/* <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
