import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path='/home' element={<Home/>} /> */}
         <Route path="/home" element={<PrivateRoute element={<Home />} />} /> 
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
