import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAppointments } from "../features/appointment/appointmentSlice";
import "./allappointments.css";

const AllAppointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointment.appointments);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      setUserId(+localStorage.getItem("user_id"));
    }
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(userAppointments(userId));
    }
  }, [userId]);

  return (
    <div className="content">
      <h2>Booked Appointments</h2>
      <div className="card">
        {appointments.map((appointment) => (
          <div className="card-holder" key={appointment.id}>
            <img
              src={appointment.doctor.photo}
              alt={`doctor${appointment.id}`}
            />
            <h3>{appointment.doctor.name}</h3>
            <p>{appointment.date.split("T")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;