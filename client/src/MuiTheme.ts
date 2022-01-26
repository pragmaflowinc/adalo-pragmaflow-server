import { createTheme } from '@mui/material/styles';

export const theme = createTheme ({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: "Noto Serif",
      fontSize: 48,
      marginBottom: 12
    },
    h2: {
      fontFamily: "Noto Serif",
      fontSize: "2em",
      marginBottom: 12
    },
    h4: {
      fontSize: '1.5rem',
      borderBottom: 'solid 1px lightgray',
      marginTop: '25px',
      marginBottom: '15px'
    },
    body1: {
      marginBottom: 5
    }
  },
  palette: {
    primary: {
      main: '#18212D',
    }, 
    secondary: {
      main: '#50b6e8',
    },
    text: {
      primary: "#18212D",
      secondary: "#000000"
    },
    error: {
      main: '#CE0E2D'
    },
    background: {
      default: '#EAEEF0',
      paper: 'white'
    },
    divider: "#00000040",
    info: {
      main: "#ffffff"
    }
  },
})