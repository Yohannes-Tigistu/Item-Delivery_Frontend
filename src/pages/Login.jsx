import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
 
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
const {loginUser , user ,error , setError} = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    try{
    const res =  loginUser(formData.email, formData.password);
    if(res){console.log("user",user)}
    }catch(error){
      console.log("login",error);
      setError(error)
    }
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="bg-white rounded-md shadow-md p-6 sm:p-12 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Welcome Back</h2>
        <p className="mb-4 text-center">Please sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-1">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:border-green-400"
              required
              helpertext={error}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:border-green-400"
              required
              helpertext={error}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <p className="mb-2 text-center">Don't have an account? <Link to="../pages/SignUp" className="text-black hover:underline">Sign Up</Link></p>
          <p className="mb-2 text-center">OR</p>
          <button className="w-full bg-white border border-gray-300 text-black px-4 py-2 rounded-md shadow-md flex items-center justify-center  hover:bg-gray-300">
            Continue with Google 
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
