import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  const [formData, setformData] = useState({
    username : "",
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const [confirmpassword, setconfirmpassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmpassword === formData.password) {
        console.log("Passwords match, proceeding with registration");

        try {
            const data = { ...formData };
            const response = await axios.post('http://127.0.0.1:8000/api/register/', data);

            console.log(response);

            if (response.status === 201) {
                toast.success("Registration successful. Please check your email to verify your account");
                navigate('/');
            } else {
                // Assuming the error message is in response.data.error
                toast.error(response.data.error || "Unexpected response status. Please try again.");
            }

        } catch (error) {
            // Handle the error, use error.response.data if available
            const errorMessage = error.response?.data?.error || 'Registration failed. Please try again.';
            toast.error(errorMessage);
        }
    } else {
        toast.error("Passwords do not match!");
    }
};


  return (
    <div>
      <div className="border-dashed border-gray-700 rounded-xl p-8 mx-auto mt-40 shadow-2xl max-w-md bg-slate-200">
        <form action="">
          <h1 className="text-2xl font-bold mb-4 ">Register</h1>
          <div className="mb-4">
            <input
              onChange={(e)=>handleInput(e)}
              value={formData.name}
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e)=>handleInput(e)}
              value={formData.username}
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={handleInput}
              type="email"
              value={formData.email}
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={handleInput}
              value={formData.mobilenumber}
              type="text"
              name="mobilenumber"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={handleInput}
              value={formData.password}
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={confirmpassword}
              onChange={(e)=>setconfirmpassword(e.target.value)}
              name="confirmpassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="button"
            onClick={(e)=>handleSubmit(e)}
            className=" mt-4 w-full bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-900"
          >
            Register
          </button>
          <div className="">
            <p className="mt-4 text-cyan-500 cursor-pointer text-center">
              Already Registered?{" "}
              <a onClick={handleLoginClick} className="text-black" href="#">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
