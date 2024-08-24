import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";
import axios from 'axios';
import { baseURL } from '../api/url';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate();

    const refreshToken = localStorage.getItem('refresh');

    const handleLogout = async () => {
        try {
            const response = await axios.post(`${baseURL}logout/`, { refresh: refreshToken });
    
            console.log("Full response:", response);
    
            if (response.status === 205) {
                localStorage.removeItem('refresh');
                localStorage.removeItem('user_id');
                navigate('/');
            } else {
                // console.error("Unexpected response:", response.status);
                toast("Unexpected response during logout.");
            }
    
        } catch (error) {
            console.error("Logout error:", error);
    
            const errorMessage = error.response?.data?.message || 'An error occurred during logout.';
            toast(errorMessage);
        }
    }
    
  return (
    <>
      <div className="w-screen h-24  bg-teal-500 flex items-center justify-between px-6 border ">
        <div className="flex-1 flex justify-center">
          <h1 className="font-bold text-3xl">ChatApp</h1>
        </div>
        <div onClick={handleLogout} className="flex items-center space-x-2">
          <h1 className="text-xl font-medium">LOGOUT</h1>
          <HiOutlineLogout className="text-2xl" />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Header;
