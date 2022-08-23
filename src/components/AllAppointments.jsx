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