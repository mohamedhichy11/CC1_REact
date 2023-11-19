import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeProvider } from './contextDark/contextDark';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter  basename='/'>
   <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>,
   

  document.getElementById('root')
);
