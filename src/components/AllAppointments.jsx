import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAppointments, resetAppointment } from '../features/appointment/appointmentSlice';
import './allappointments.css';
import Loader from './loader/Loader';
import { userErrorClear, loginErrorClear } from '../features/user/userSlice';

const AllAppointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointment.appointments);
  const [userId, setUserId] = useState();
  const loading = useSelector((state) => state.appointment.loading);

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUserId(+localStorage.getItem('user_id'));
      dispatch(resetAppointment());
      dispatch(userErrorClear());
      dispatch(loginErrorClear());
    }
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(userAppointments(userId));
    }
  }, [userId]);

  if (!localStorage.getItem('user_id')) {
    return (
      <div className="newAppointment-warning">
        <h2>Please login to make an appointment</h2>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (appointments.length === 0) {
    return <p className="newAppointment-warning">No appointments for you.</p>;
  }

  return (
    <div className="body-holder">
      <div className="content">
        <h2>Booked Appointments</h2>
        <div className="card">
          {appointments.map((appointment) => (
            <div className="card-holder" key={appointment.id}>
              <h3>{appointment.doctor.name}</h3>
              <img src={appointment.doctor.photo} alt={`doctor${appointment.id}`} />
              <p>{appointment.date.split('T')[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
