import styles from './Footer.module.css';
import { Box, Button, styled } from '@mui/material';
import { purple } from '@mui/material/colors';

const ColorButtonPurple = styled(Button)(({ theme }) => ({
  marginRight: '1rem',
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Footer = () => {
  const { container } = styles;
  return (
    <div className={`${container}`}>
      <span>
      "Copyright © xTeam gaming house 2023. Todos los derechos reservados."
      </span>
      <Box>
        <ColorButtonPurple>
        </ColorButtonPurple>
      </Box>
    </div>
  )
}

export default Footer