import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserData from './Components/UserData';
import Review from './Components/Review';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserData />}/>
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;