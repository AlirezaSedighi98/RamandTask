import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme,ThemeProvider } from '@mui/material';
import './Style/index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';



const theme = createTheme({
  typography:{ 
    fontFamily: `'Prompt', sans-serif;`
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>   
  </React.StrictMode>
);


reportWebVitals();
