import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
export const PostForm = () => {
  return (
    <div className='flex-col gap-4 w-96 mx-auto'>
        <div>
        <TextField id="standard-basic" label="From" variant="standard" sx={{}} helperText="Starting location"/>
<TextField id="standard-basic" label="To" variant="standard" sx={{ml:2}} helperText="Destination location"/>
        </div>

<TextField id="standard-basic" label="Item-Type" variant="standard" helperText="please enter item type " sx={{width:600}} />
<TextField id="standard-basic" label="Time" variant="standard" helperText="Starting time" sx={{width:600}} />
<TextField id="standard-basic" label="Specification" variant="standard" helperText="Additional Info " sx={{width:600}} />
<Button variant="contained" size='large' sx={{mt:3}}>Post</Button>
</div>
  )
}
