import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Help from './components/Help';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm i react-router-dom para instalar este paquete 


ReactDOM.render(

  <BrowserRouter>  
   
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/todoApp' element={<App />} />
        <Route path='/todoApp/Hilfe' element={<Help />} />        
        <Route path="*" element={<App />} />
      </Routes>
  </BrowserRouter>,
document.getElementById('root')
);


