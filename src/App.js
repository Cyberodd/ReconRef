import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<FormPage title="Register" onSubmit={() => {/* handle registration */}} />} />
      <Route path="/login" element={<FormPage title="Login" onSubmit={() => {/* handle login */}} />} />
    </Routes>
  </Router>
);

export default App;
