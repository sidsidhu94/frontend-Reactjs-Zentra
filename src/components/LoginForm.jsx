import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const status = searchParams.get('status');

        if (status === 'activated') {
            toast.success("Account activated successfully!");
        }
    }, [location]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login/', { email, password });
        console.log(response);

      
        if (response.data.message === "login successful") {
            const { refresh, user_id } = response.data;

            
            localStorage.setItem('refresh', refresh);
            localStorage.setItem('user_id', user_id);

            
            navigate('/home');
            toast.success(response.data.message)
            
            
        } else {
          console.log(response.data.message)
         
            toast(response.data.message);
        }
    } catch (error) {
        
        setError('Login failed. Please check your credentials and try again.');
    }
};


  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="border-dashed border-gray-700 rounded-xl p-8 mx-auto mt-40 shadow-2xl max-w-md bg-slate-200">
      <form  onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 ">Login</h1>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className=" mt-4 w-full bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-900"
        >
          Login
        </button>
        <div className="">
          <p className="mt-4 text-cyan-500 cursor-pointer text-center">
            Don't have an account?{" "}
            <a onClick={handleRegisterClick} className="text-black" href="#">
              Register
            </a>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
