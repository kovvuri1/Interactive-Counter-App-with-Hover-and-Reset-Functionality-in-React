import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <h1 style={{textAlign:"center",marginTop:"20px",fontFamily:` "Pacifico", cursive`}}>Counter Application</h1>
    <div className='container'>
       <App />
    </div>
  </React.StrictMode>
);

