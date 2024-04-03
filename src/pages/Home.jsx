import React from 'react';
import Image1 from '../components/images/delivery.png';
import { Grid, Typography, Paper, Button } from '@mui/material';


export const Home = () => {
  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: '43px' }}>
        <Grid item xs={6}>
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
            <Typography variant="h1" style={{ fontWeight: 'bold', marginTop: '40px' }}>
              Delivery Simplified
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px' }}>
              Say goodbye to the challenges of traditional delivery methods.
            </Typography>
            <Button
              style={{ marginTop: '40px', backgroundColor: '#27296d', color: '#fff' }}
              variant="contained"
            >
              Send an Item
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <img src={Image1} alt="Your Image" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      
    </div>
  );
};