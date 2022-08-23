import React, {useState, useEffect, useSyncExternalStore} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {useParams} from 'react-router-dom'
import { createAppointment } from '../features/appointment/appointmentSlice';
import { fetchDoctors } from '../features/doctor/doctorSlice';


 const NewAppointment = () => {
    const {id} = useParams()
    const [date, setDate] = useState('');
    const [doctorId, setDoctorId] = useState()
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctor.doctors);
    if (id) {
        setDoctorId(id)
    }
    useEffect(() => {
        dispatch(fetchDoctors());
    },[])
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
            <select name="doctors" id="doctors" value="Choose a doctor" onChange={e  => setDoctorId(e.target.value)}>
                <option value={null} >Choose a doctor</option>
                {doctors.map(doctor => {
                   return <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                })}
            </select>
            <label htmlFor="date" >Choose a date</label>
            <input type="date" id="date" name="date" onChange={e => setDate(e.target.value)} />
            <button type="submit"> Create Appointment </button>
        </form>
    </div>
  )
}

export default NewAppointment;
