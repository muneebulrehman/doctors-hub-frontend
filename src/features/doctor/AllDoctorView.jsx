import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDoctors } from './doctorSlice';
import Loader from '../../components/loader/Loader';
import './styles.css';

const AllDoctorView = () => {
  const doctors = useSelector((state) => state.doctor.doctors);
  const loading = useSelector((state) => state.doctor.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="allDoctors-container">
      <h2 className="allDoctors-heading">All Available Doctors</h2>
      <p className="allDoctors-script">Select a doctor</p>
      {doctors.map((doctor) => (
        <div key={doctor.id} className="allDoctors-each-doctor item">
          <Link to={`/doctors/${doctor.id}`}>
            <img src={doctor.photo} alt={doctor.name} className="allDoctors-doctor-photo" />
            <h4>{doctor.name}</h4>
            <p className="allDoctors-doctor-speciality">{doctor.speciality}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllDoctorView;
