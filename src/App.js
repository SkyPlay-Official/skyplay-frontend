import React from 'react';
import Login from './components/login';
import Signin from './components/signin';
import HomePage from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
  
      </Routes>
    </Router>
  );
};

export default App;
