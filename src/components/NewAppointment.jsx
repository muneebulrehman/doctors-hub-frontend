import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { createAppointment } from '../features/appointment/appointmentSlice';
import { userErrorClear, loginErrorClear } from '../features/user/userSlice';
import './newappointment.css';

const NewAppointment = () => {
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment.appointment);

  useEffect(() => {
    if (appointment.success) toast.success(appointment.message);
    else toast.error(appointment.message);
  }, [appointment]);

  useEffect(() => {
    dispatch(userErrorClear());
    dispatch(loginErrorClear());
  }, []);

  const options = [
    { value: '1', label: 'Dr. Anthony Fauci' },
    { value: '2', label: 'Dr. Rochelle Walensky' },
    { value: '3', label: 'Dr. Sanjay Gupta' },
    { value: '4', label: 'Dr. Laurie Glimcher' },
    { value: '5', label: 'Dr. Mark Hyman' },
    { value: '6', label: 'Dr. Fouad. M. Abbas' }
  ];

  const inputHandler = async (e) => {
    e.preventDefault();
    const user = {
      user_id: localStorage.getItem('user_id'),
      doctor_id: doctorId,
      date
    };
    dispatch(createAppointment(user));
  };

  const handleOptions = (option) => {
    setDoctorId(option.value);
  };

  if (!localStorage.getItem('user_id')) {
    return (
      <div className="newAppointment-warning">
        <h2>Please login to make an appointment</h2>
      </div>
    );
  }

  return (
    <div className="body-holder">
      <div className="newAppointments-container">
        <div className="holder">
          <h2>Book an appointment with your doctor</h2>
          <hr />
          <h3>There are a lot of doctors. Choose one</h3>
          <form onSubmit={inputHandler} className="newAppointment-form">
            {/* <label htmlFor="doctors">Choose a doctor</label> */}
            <p>Choose a doctor</p>
            <Select className="selectDoctor" options={options} onChange={handleOptions} />
            {/* <label htmlFor="date">Choose a date</label> */}
            <p>Choose a date</p>
            <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)} />
            <button type="submit"> Create Appointment </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppointment;
