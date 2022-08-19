import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Route path={routesApp.DOCTORS} element={<AllDoctorView />} />
        <Route path={routesApp.DOCTOR} element={<DoctorView />} />
    </div>
  );
}

export default App;
