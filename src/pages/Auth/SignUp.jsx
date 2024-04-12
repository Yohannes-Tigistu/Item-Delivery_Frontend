
import logo from "../../assets/mainpage1.gif"
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
import React, { useState } from 'react';
import { Paper, Stack, TextField, Button, Typography, Link } from '@mui/material/';
import axios from 'axios';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [username, setuser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation
        const newErrors = {};
         if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!username) {
            newErrors.username = 'Username is required';
        }

        // Check if username is already taken
        const checkUsername = async () => {
            try {
                const response = await axios.get(`${backendUrl}auth/users/username/${username}`);
                if (response.data.exists) {
                    newErrors.username = 'Username is already taken';
                }
            } catch (error) {
                console.log(error);
            }
        };

        checkUsername();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } 
        else {
            const registerUser = async () => {
            try{
            const response = await axios.post(`${backendUrl}auth/users/`, { 
                            first_name: {FirstName},
                            last_name: {LastName},
                            email: {email},
                          username:    {username},
                         password:  {password},
            });
               console.log(response);
        }catch (error) {
            console.log(error);
            registerUser();
        }
    };
   }
}

    return (
      <div>
        <form method="post" action={backendUrl} onSubmit={handleSubmit}>
          <div className="min-w-screen min-h-[95vh] flex justify-center items-center">
            <div className="w-full hidden md:flex h-screen  justify-center items-center">
              <img
                src={logo}
                className="aspect-auto rounded object-cover h-fit w-fit "
              />
            </div>
            <div className="w-full">
              <div className="min-h-[90vh]  flex justify-center items-center">
                <div className="">
                  <div className="my-2 gap-5 flex flex-col ">
                    <div className="flex flex-col justify-center items-center text-center my-5 px-10">
                      <Typography
                        sx={{ fontWeight: "bold", mb: 2 }}
                        variant="h2"
                      >
                        Sign Up
                      </Typography>
                      <p className="text-gray-500">
                        Join Us Today for Seamless Deliveries!
                      </p>
                    </div>
                    <TextField
                      size="small"
                      label="First Name"
                      value={FirstName}
                       onchange={(e) => setFirstName(e.target.value)}
                       error={!!errors.FirstName}
                          helperText={errors.FirstName} 
                    />{" "}
                    <TextField
                      size="small"
                      label="Last Name"
                      value={LastName}
                      onchange={(e) => setLastName(e.target.value)}
                        error={!!errors.LastName}   
                        helperText={errors.LastName}
                    />
                    <TextField
                      size="small"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                      <TextField
                      size="small"
                      label="Username"
                      value={username}
                        onChange={(e) => setuser(e.target.value)}
                      error={!!errors.username}
                        helperText={errors.username}
                    />
                    <TextField
                      size="small"
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={!!errors.password}
                      helperText={errors.password}
                    />
                    <TextField
                      size="small"
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword}
                    />
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ borderRadius: "10px" }}
                      type="submit"
                    >
                      SignUp
                    </Button>
                    <Typography>
                      Already have an Account?{" "}
                      <a href="./login" className="font-bold cursor-pointer">
                        Login
                      </a>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}
export default SignUp;
