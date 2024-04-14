import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../components/images/delivery.png';
import Image2 from '../components/images/delivering.png';
import { Grid, Typography, Paper, Button } from '@mui/material';
import { Container } from '@mui/material';
import About from './About'
import Team from '../components/images/Team.png'
import DestinyCard from '../components/cards/DestinyCard'

export const Home = () => {
   
  const navigate = useNavigate();

  const handleSendItem = () => {
    // Navigate to the send item page
    navigate('../pages/Posts');
  };
   const handleDrive = () => {
    // Navigate to the send item page
    navigate('../pages/Drive');
  };
  const handleAbout = () => {
    // Navigate to the send item page
    navigate('../pages/About');
  };


  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: '43px' }}>
        <Grid item xs={12} md={6}>
          <Paper

            elevation={0}
            style={{
              padding: 16,
              color: '#F1BF98',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#bc2525', marginTop: '50px' }}>
              Delivery Simplified
            </Typography>
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#08415C', marginTop: '15px' }}>
              Revolutionize delivery methods and Earn on the Go!
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px', paddingLeft: '30px', color: '#08415C', paddingRight: '50px' }}>
              Unlock hassle-free deliveries with our innovative solutions and Say goodbye to traditional methods.
            </Typography>
            <Button
              style={{ marginTop: '40px', backgroundColor: '#bc2525', color: '#fff' }}
              variant="contained" onClick={handleSendItem}
            >
              Show Available Delivers
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Image1} alt="Your Image" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>   
      <div className='w-[90%] mx-auto'>
        <Container
          maxWidth="md"
          style={{
            padding: '16px',
            marginTop: '35px',
            marginBottom: '25px',
            backgroundColor: '#08415C',
            color: '#F1BF98',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            borderRadius: '8px', 
            gap: '25px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '25px' }}>
            <div style={{ flex: 1 }}>
              <Typography variant="h4" component="h1" textAlign='center' marginTop='20px'>
                150+
                <Typography variant="body1" component="h2" marginTop='15px'  textAlign='center'>
                  Customers as of Mar 30, 2024
                </Typography>
              </Typography>
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="h4" component="h1" marginTop='20px' textAlign='center'>
                2400+
                <Typography variant="body1" component="h2" marginTop='15px'  textAlign='center'>
                  Successfully Delivered Items
                </Typography>
              </Typography>
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="h4" marginTop='20px' textAlign='center'>
                12+
                <Typography variant="body1" marginTop='15px'  textAlign='center'>
                  Destination as of Mar 30, 2024
                </Typography>
              </Typography>
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="h4" marginTop='20px' textAlign='center'>
                46+
                <Typography variant="body1" marginTop='15px'  textAlign='center'>
                  Drivers as of Mar 30, 2024
                </Typography>
              </Typography>
            </div>
          </div>
          <Typography variant="h6" marginTop='25px' textAlign='center'>
              {"\"Deliver items to all places and at all times\""}
            </Typography>
        </Container>
      </div>
      <div>
        <Grid container spacing={2} style={{ marginTop: '43px' }}>
          <Grid item xs={12} md={6}>
            <img src={Image2} alt="Your Image" style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              style={{
                padding: 16,
                color: '#27296d',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h2" style={{ fontWeight: 'bold', color: '#bc2525', marginTop: '50px' }}>
                Monetize your every step.
              </Typography>

              <Typography variant="body1" style={{ marginTop: '16px', paddingLeft: '30px', color: '#08415C', paddingRight: '50px' }}>
                Unlock hassle-free deliveries with our innovative solutions and Say goodbye to traditional methods.
              </Typography>
              <Button
                style={{ marginTop: '40px', backgroundColor: '#08415C', color: '#F1BF98' }}
                variant="contained" onClick={handleDrive}
              >
                Register as A driver
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div style={{ textAlign: 'center', marginLeft: '25px' }}>
          <Grid container spacing={2} style={{ marginTop: '35px', display: 'flex', justifyContent: 'center'}}>
            <Grid item xs={12} md={10}>
              <Typography variant="h2" style={{ fontWeight: 'bold', fontSize: 33, color: '#bc2525', marginTop: '50px', marginBottom:'20px',textAlign: 'center' }}>
                12+ Destinations
              </Typography>
              <DestinyCard/>
            </Grid>
          </Grid>
        </div>
        <div>
      <div style={{ marginTop: '43px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              style={{
                padding: 16,
                color: '#27296d',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h2" style={{ fontWeight: 'bold', color: '#bc2525', marginTop: '50px' }}>
                Meet Our Team
              </Typography>

              <Typography variant="body1" style={{ marginTop: '16px', paddingLeft: '30px', color: '#08415C', paddingRight: '50px' }}>
                Unlock hassle-free deliveries with our innovative solutions and say goodbye to traditional methods.
              </Typography>
              <Button
                style={{ marginTop: '40px', backgroundColor: '#08415C', color: '#F1BF98' }}
                variant="contained" onClick={handleAbout}
              >
                Read More
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Team} alt="Your Image" style={{ maxWidth: '80%' }} />
          </Grid>
        </Grid>
      </div>
    </div>
    </div>
  );
};