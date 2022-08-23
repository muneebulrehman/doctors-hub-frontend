import React, {useState, useEffect, useSyncExternalStore} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createAppointment } from '../features/appointment/appointmentSlice';

 const NewAppointment = () => {
    const [date, setDate] = useState('')
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctor.doctors);
    console.log(doctors)
    const inputHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="newAppointments-container">
        <h2>Book an appointment with your doctor</h2>
        <hr />
        <h3>There are a lot of doctors. Choose one</h3>
        <form onSubmit={inputHandler} className="newAppointment-form">
            <label htmlFor="doctors" >Choose a doctor</label>
            <select name="doctors" id="doctors">
                {doctors.map(doctor => {
                    <option value={doctor.id}>{doctor.name}</option>
                })}
            </select>
            <label htmlFor="date" >Choose a date</label>
            <input type="date" id="date" name="date" />
            <button type="submit"> Create Appointment </button>
        </form>
    </div>
  )
}

export default NewAppointment;
