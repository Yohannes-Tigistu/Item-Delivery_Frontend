import React from 'react';
import Image2 from '../components/images/walking.png';
import { Grid, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Drive = () => {
  const navigate = useNavigate();

  const handleDriverSignup = () => {
    navigate('/pages/DriverSignup');
  };

  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: '43px' }}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            style={{
              padding: 16,
              color: '#bc2525',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" style={{ fontWeight: 'bold', marginTop: '40px' }}>
              Deliver while you move, earn as you go!
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px',color:'#08415C' }}>
              Turn every step into a delivery opportunity and make money on the move.
            </Typography>
            <Button
              onClick={handleDriverSignup}
              style={{ marginTop: '40px', backgroundColor: '#08415c', color: '#F1BF98' }}
              variant="contained"
            >
              Register As a Driver Now!
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Image2} alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <div className="flex flex-col items-center justify-center h-screen" style={{backgroundColor: '#08415C',height:'50vh'}}>
        <div >
          <h2 className="font-bold mb-4" style={{color:'#F1BF98',marginLeft:'500px',fontSize:'40px'}}>Drive with Lijeger</h2>
          <p className=" mb-8" style={{color:'#bc2525',marginLeft:'560px',fontSize:'15px'}}>Make money on your own terms</p>
          <div className="flex items-center mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/270/270795.png" alt="Money" className="w-8 h-8 mr-4" />
            <p className="text-gray-800 font-bold">Make money</p>
          </div>
          <div className="flex items-center mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828976.png" alt="Clock" className="w-8 h-8 mr-4" />
            <p className="text-gray-800 font-bold">Set your own schedule</p>
          </div>
          <div className="flex items-center mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/179/179331.png" alt="Boss" className="w-8 h-8 mr-4" />
            <p className="text-gray-800 font-bold">Be your own boss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;