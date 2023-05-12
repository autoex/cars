import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/global.css';
import Router from './elements/Router.jsx';
import AuthProvider from './providers/auth/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
);
