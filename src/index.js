import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxr_Y-rL49u7EkEMhgl-KpRiaYBJx3O8E",
  authDomain: "vynil-store-6e644.firebaseapp.com",
  projectId: "vynil-store-6e644",
  storageBucket: "vynil-store-6e644.appspot.com",
  messagingSenderId: "1048967654726",
  appId: "1:1048967654726:web:46720a7bd7572a3fa0c947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
