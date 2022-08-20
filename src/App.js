import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AllDoctorView from './features/doctor/AllDoctorView';
import DoctorView from './features/doctor/DoctorView';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path={routesApp.DOCTORS} element={<AllDoctorView />} />
        <Route path={routesApp.DOCTOR} element={<DoctorView />} />
      </Routes>
    </div>
  );
}

export default App;
