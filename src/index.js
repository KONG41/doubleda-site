import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.css';
import App from './App';
import './language/i18n';
import ContextProvider from './context/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
          <App />
    </ContextProvider>
  </React.StrictMode>
);
