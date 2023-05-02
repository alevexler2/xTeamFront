import styles from './GameCard.module.scss';
import { Typography, Button, styled, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { purple, grey } from '@mui/material/colors';

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

const GameCard = () => {
  const { cardImg, cardContainer, cardContent } = styles;
  return (
    <div className={`${cardContainer}`}>
      <img src="https://www.xtrafondos.com/wallpapers/the-last-of-us-parte-ii-11551.jpg" alt="" className={`${cardImg}`} />
      <div className={`${cardContent}`}>
        <Typography 
          variant='h6'  
          color='lightgray' 
          textAlign='center'
          sx={{
            textShadow: '2px 2px 4px #000000',
          }}
        >
          the last of us
        </Typography>
        <Box marginBottom='1rem' marginTop='1rem' display='flex' justifyContent='center'>
          <ColorButtonPurple variant="contained">
            <ShoppingCartOutlinedIcon/>
          </ColorButtonPurple>
          <ColorButtonGrey>
            <InfoOutlinedIcon/>
          </ColorButtonGrey>
        </Box>
      </div>
    </div>
  )
}

export default GameCard