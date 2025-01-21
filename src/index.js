import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from './components/context/AuthContext';
import { createPlan, createSubs } from './api/api1';
import { Toaster } from 'react-hot-toast';
// import dotenv
require('dotenv').config();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <UserAuthContextProvider>
      <App createPlan={createPlan} createSubs={createSubs} />
      <Toaster />
      {/* </React.StrictMode> */}
    </UserAuthContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

