import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Page1} from './Page1';
import { LoginForm as Login } from './LoginForm';
import {Dashboard}  from './Dashboard';
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
