import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for createRoot
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
