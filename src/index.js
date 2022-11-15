import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme,ThemeProvider } from '@mui/material';
import './Style/index.css'
import reportWebVitals from './reportWebVitals';



const theme = createTheme({
  typography:{ 
    fontFamily: `'Prompt', sans-serif;`
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>   
  </React.StrictMode>
);


reportWebVitals();
