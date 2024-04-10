

import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

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
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url('path_to_your_image.jpg')`, backgroundSize: 'cover' }}>
      <div className="bg-white rounded-md shadow-md p-12" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginRight: '20px', width: '500px' }}>
        <h2 className="text-xl font-semibold mb-4">Welcome Back</h2>
        <p className="mb-4">Please sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:border-green-400"
              required
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
          <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-300">
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <p className="mb-2">Don't have an account? <a href="/signup" className="text-black hover:underline">Sign Up</a></p>
          <p className="mb-2">OR</p>
          <button className="w-full bg-white border border-gray-300 text-black px-4 py-2 rounded-md shadow-md flex items-center justify-center  hover:bg-gray-300">
            Continue with Google 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
