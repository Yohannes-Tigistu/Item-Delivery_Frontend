import React, { useState } from 'react'
import Pay from '../components/Pay'
import { Paper, Stack, TextField, Button, Typography } from "@mui/material/";
import axios from "axios";
import { Link } from "react-router-dom";
import cashPaymetnt from '../assets/Cash Payment.gif'
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const tx_ref=''
  const public_key=''
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Clear error when input changes
    setErrors({ ...errors, [name]: "" });
    // Update state
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "amount":
        setAmount(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    const newErrors = {};
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!amount.trim()) {
      newErrors.amount = "Amount is required";
    }
    // If there are errors, set them and stop form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit form if no errors
    // Your form submission logic here
  };

  return (
    <div className=" ">
    
          <form method="post" onSubmit={handleSubmit}>
            <div className="min-w-screen min-h-[95vh] flex justify-evenly items-center px-20">
              <div className="w-full hidden md:flex h-screen  justify-center items-center">
                <img src={cashPaymetnt} alt="" />
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
                          Payment
                        </Typography>
                        <p className="text-gray-500">
                          pay for your delivery
                        </p>
                      </div>
                      <TextField
                        size="small"
                        label="First Name"
                        value={firstName}
                        onChange={handleInputChange}
                        name="firstName"
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                      />
                      <TextField
                        size="small"
                        label="Last Name"
                        value={lastName}
                        onChange={handleInputChange}
                        name="lastName"
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                      />
                      <TextField
                        size="small"
                        label="Email"
                        value={email}
                        onChange={handleInputChange}
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                      <TextField
                        size="small"
                        label="Amount"
                        value={amount}
                        onChange={handleInputChange}
                        name="amount"
                        error={!!errors.amount}
                        helperText={errors.amount}
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
                        <Link
                          to="../pages/login"
                          className="font-bold cursor-pointer"
                        >
                          Login
                        </Link>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <center>
      <Pay fname={firstName} lname={lastName} email={email} amount={amount} tx_ref={tx_ref}  public_key={public_key}/>
      </center>
    </div>
  );
}
export default Payment;
