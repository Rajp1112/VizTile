import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { AuthProvider } from './store/auth';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
