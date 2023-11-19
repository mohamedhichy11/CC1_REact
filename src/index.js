import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './contextDark/contextDark';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename='/CC1_REact'>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
