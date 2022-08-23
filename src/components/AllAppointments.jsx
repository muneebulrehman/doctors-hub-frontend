import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAppointments } from '../features/appointment/appointmentSlice';

const AllAppointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointment.appointments);
  console.log(appointments);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUserId(+localStorage.getItem('user_id'));
    }
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(userAppointments(userId));
    }
  }, [userId]);

  return (
    <div>
      <h2>Booked Appointments</h2>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <img src={appointment.doctor.photo} alt={`doctor${appointment.id}`} />
          <h3>{appointment.doctor.name}</h3>
          <p>{appointment.date.split('T')[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default AllAppointments;
