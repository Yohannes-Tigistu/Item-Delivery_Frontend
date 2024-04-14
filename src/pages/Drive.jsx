import React, {useState, useEffect} from 'react';
import Image2 from '../components/images/walking.png';
import { Grid, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import carIcon from '../components/images/logonew.png'
import boss from '../components/images/OwnBoss.png'
import money from '../components/images/Money.png'
import schedule from '../components/images/Schedule.png'

const Drive = () => {
  const navigate = useNavigate();
  const [isDriving, setIsDriving] = useState(false); 


  const handleDriverSignup = () => {
    navigate('/pages/DriverSignup');
  };
  
  const startDriving = () => {
    setIsDriving(true); 
    setTimeout(() => {
      window.location.href = "/pages/DriverSignup"; 
    }, 1000);
  };
  useEffect(() => {
    setIsDriving(false);
  }, []);


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
            <Typography variant="h2" style={{ fontWeight: 'bold', marginTop: '40px',color:'#bc2525' }}>
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

      <div className='mt-5 lg:mt-20'>
            <div className='flex flex-col justify-center items-center gap-12 lg:gap-24 lg:px-[9.4vw]'>
              <div className='relative flex w-max'>
                  <h3 className='font-poppins font-semibold text-lg lg:text-5xl leading-5 text-black-600' style={{ fontWeight: 'bold', color: '#bc2525'}}>Drive With Mela Express</h3>
              </div>
              <div className='flex w-full flex-col items-center gap-10 lg:flex-row lg:justify-between'>
                <div className='flex flex-col items-center w-[58vw] lg:w-[21vw]'>
                  <div>
                  <img src={money} alt="Money" class="w-24 h-24 mr-4" />
                  </div>
                  <h3 className='mt-4 lg:mt-6 font-semibold text-sm lg:text-xl text-black-900 text-center'>Make money</h3>
                  <span className='mt-3 font-normal text-[10px] lg:text-sm leading-4 lg:leading-5 trxt-black-300 text-center'> Drive on your own terms and make money with every mile.</span>
                </div>
              <div className='flex flex-col items-center w-[58vw] lg:w-[21vw]'>
                <div className=''>
                   <img src={schedule} alt="Clock" class="w-24 h-24 mr-4" />
                </div>
                  <h3 className='mt-4 lg:mt-6 font-semibold text-sm lg:text-xl text-black-900 text-center'>Set your own Schedule</h3>
                  <span className='mt-3 font-normal text-[10px] lg:text-sm leading-4 lg:leading-5 trxt-black-300 text-center'>
                  "Your Schedule, Your Way!" you decide when to hit the road and start making money. 
                  </span>
              </div>
              <div className='flex flex-col items-center w-[58vw] lg:w-[21vw]'>
                <div className=''>
                <img src={boss} alt="Boss" class="w-32 h-28 mr-4" />
                </div>
                  <h3 className='mt-4 lg:mt-6 font-semibold text-sm lg:text-xl text-black-900 text-center'>Be your own boss</h3>
                  <span className='mt-3 font-normal text-[10px] lg:text-sm leading-4 lg:leading-5 trxt-black-300 text-center'>
                  "Boss Your Own Path: Take the Wheel, Take Charge!" Be the captain of your own journey. 
                  </span>
              </div>
              </div>
              <button
                className={` hover:bg-red-700 mb-[50px] text-white font-bold py-2 px-8 rounded-sm transition duration-300 transform  focus:outline-none relative ${isDriving ? 'drive-animation' : ''}`}
                onClick={startDriving}
                style={{backgroundColor: "#08415C"}}
              > Start Driving
                <img src={carIcon} alt="Car Icon" className="w-16 h-20 absolute left-32 right-0 top-5 transform -translate-y-1/2" />
              </button>
            </div>

     
      </div>
      
    </div>
  );
};

export default Drive;