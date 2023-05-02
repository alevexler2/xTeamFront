import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import FavoriteGameComponent from '../../components/FavoriteGameComponent/FavoriteGameComponent';
import GameCard from '../../components/GameCard/GameCard';

const HomePage = () => {
  return (
    <Box height='auto' width='auto' sx={{
      background:'black'
    }}>
      <FavoriteGameComponent/>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography 
          variant='h5' 
          color='lightgray' 
          sx={{
            textShadow: '2px 2px 4px #000000'
          }}
        >
          Juegos mas populares
        </Typography>
        <Grid container display='flex' flexWrap='wrap' justifyContent='space-around' marginY='1rem'>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
        </Grid>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography 
          variant='h5' 
          color='lightgray' 
          sx={{
            textShadow: '2px 2px 4px #000000'
          }}
        >
          Juegos Nuevos
        </Typography>
        <Grid container display='flex' flexWrap='wrap' justifyContent='space-around' marginY='1rem'>
          <Grid item xs={8} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
          <Grid item xs={12} md={2}>
            <GameCard/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default HomePage