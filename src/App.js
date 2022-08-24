import logo from './logo.svg';
import './App.css';
import Signup from './Signup.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
