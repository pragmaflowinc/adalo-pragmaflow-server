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
      main: '#263e85',
    }, 
    secondary: {
      main: '#50b6e8',
    },
    text: {
      primary: "#D1D3D4",
      secondary: "#000000"
    },
    error: {
      main: '#CE0E2D'
    },
    background: {
      default: '#58595B',
      paper: '#D1D3D4'
    },
    divider: "#00000040"
  },
})