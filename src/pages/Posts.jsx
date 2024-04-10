import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import {LocationSelector} from '../components/LocationSelector'
import { Search } from '../components/Search'
import { PostCard } from '../components/cards/PostCard'


export const Posts = () => {
  return (
    <Container className='sm:w-auto'>
        <div className='mt-28'>
        <Typography variant='h3' className='font-bold mt-20'>Today's Posts</Typography>
            <div className='flex space-x-8 space-y-8 lg:ml-96'>
            <Search/>
            <LocationSelector/>           
            </div>            
        </div>
        <Grid container sx={{mt:2,  width:'100%'}}>
          <Grid sm={12} md={4}>
              <PostCard/>
          </Grid>
          <Grid  sm={12} md={4}>
              <PostCard/>
          </Grid>
          <Grid sm={12} md={4}>
              <PostCard/>
          </Grid>
          <Grid  sm={12} md={4}>
              <PostCard/>
          </Grid>
          <Grid sm={12} md={4}>
              <PostCard/>
          </Grid>
          <Grid  sm={12} md={4}>
              <PostCard/>
          </Grid>
</Grid>
    </Container>
  )
}

