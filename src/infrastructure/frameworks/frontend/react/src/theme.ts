import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',  
      light: '#333333',
      dark: '#000000',  
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#d32f2f', 
      dark: '#8f111f',
      contrastText: '#ffffff', 
    },
    background: {
      default: '#1a1a1a',  
      paper: '#fffff',    
    },
    text: {
      primary: '#000', 
      secondary: '#bdbdbd', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', 
    button: {
      textTransform: 'none', 
    },
  },
});

export default theme;


