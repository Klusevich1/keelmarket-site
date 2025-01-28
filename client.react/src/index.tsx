import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/css/index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import AppContextProvider from './views/context/AppContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppContextProvider>
  </React.StrictMode>
);
