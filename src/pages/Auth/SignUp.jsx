import React from 'react'
import {Paper, Stack, TextField, Button, Typography, Link} from '@mui/material/';
import mainImage from '../../assets/main-image.gif'

const SignUp = () => {
return (
    <div className='min-w-screen min-h-[95vh] flex justify-center items-center'>
        <div className='w-full hidden md:flex h-screen  justify-center items-center'>
            <img src={mainImage} className='aspect-auto rounded object-cover h-fit w-fit ' />
        </div>
        <div className='w-full'>
            <div className='min-h-[90vh]  flex justify-center items-center'>
                <div  className=''>
                    <div  className='my-2 gap-5 flex flex-col '>
                        <div className='flex flex-col justify-center items-center text-center my-5 px-10'>
                            <Typography sx={{fontWeight:'bold', mb:2}} variant='h2'>Sign Up</Typography>
                            <p className='text-gray-500'>Join Us Today for Seamless Deliveries!</p>
                        </div>
                        <TextField size='small' label='Email'/>
                        <TextField size='small' label='Password' type='password'/>
                        <TextField size='small' label='Confirm Password' type='password'/>
                        <Button variant="contained" size='large' sx={{borderRadius: '10px'}}>SignUp</Button>
                        <Typography >Already have an Account? <a href='./login' className='font-bold cursor-pointer'>Login</a></Typography>
                    </div>
                </div>
            </div> 
        </div>
    </div>
)}
export default SignUp


