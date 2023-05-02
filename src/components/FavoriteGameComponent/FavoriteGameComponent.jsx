import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import { purple, grey } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ColorButtonPurple = styled(Button)(({ theme }) => ({
  marginRight: '1rem',
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const ColorButtonGrey = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  backgroundColor: grey[400],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

const FavoriteGameComponent = () => {
  return (
    <Box 
      paddingTop='250px' 
      height='50vh' 
      display='flex'
      justifyContent='flex-end'
      paddingLeft='2rem'
      flexDirection='column'
      sx={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%), url(https://www.xtrafondos.com/wallpapers/the-last-of-us-parte-ii-11551.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <Typography 
        variant='h3' 
        color='lightgray' 
        sx={{
          textShadow: '2px 2px 4px #000000',
      }}>
        The las of us
      </Typography>
      <Box marginBottom='3rem' marginTop='1rem' display='flex'>
        <ColorButtonPurple variant="contained">
          <ShoppingCartOutlinedIcon/>
          <Typography variant='button' marginLeft='8px'>
            Agregar al carrito
          </Typography>
        </ColorButtonPurple>
        <ColorButtonGrey>
          <InfoOutlinedIcon/>
          <Typography variant='button' marginLeft='8px'>
            Mas informacion
          </Typography>
        </ColorButtonGrey>
      </Box>
    </Box>  
  )
}

export default FavoriteGameComponent