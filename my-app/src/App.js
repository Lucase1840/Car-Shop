import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import CarDetails from "./components/CarDetails/CarDetails.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='cardetails/:carId' element={<CarDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
