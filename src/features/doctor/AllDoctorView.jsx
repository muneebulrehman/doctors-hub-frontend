import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDoctors } from './doctorSlice';
import './styles.css';

const AllDoctorView = () => {
    const Doctors = useSelector((state) => state.doctor);

    const dispatch = useDispatch();
    const [Doctors, setDoctor] = useState(null);

    useEffect(() => {
        dispatch(fetchDoctors());
    } , []);

    // useEffect(() => {
    //     setLoading(true);
    //     setDoctor(null);
    //     dispatch(fetchSingleDoctor(doctorId)).then(() => {
    //     setLoading(false);
    //     }).catch(() => {
    //     setLoading(false);
    //     }).finally(() => {
    //     setDoctor(doctorRef.current);
    //     } );
    // } , [doctorId]);
    
    }
    return (
        <div className="allDoctors-container">
          <h2 className="allDoctors-heading">All Available Doctors</h2>
          <p className="allDoctors-script">Select a doctor</p>
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {doctors.map((doctor) => (
                <motion.div key={doctor.id} className="allDoctors-each-doctor item">
                  <Link to={`/doctors/${doctor.id}`}>
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="allDoctors-doctor-photo"
                    />
                    <h4>{doctor.name}</h4>
                    <p className="allDoctors-doctor-speciality">
                      {doctor.speciality}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      );
    };
    
    export default AllDoctorView;
    