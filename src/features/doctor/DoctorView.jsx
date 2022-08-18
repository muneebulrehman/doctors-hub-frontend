import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const DoctorView = () => {
    const doctor = useSelector((state) => state.doctor.doctor);
    const loading = useSelector((state) => state.doctor.loading);
    const dispatch = useDispatch();
    const { doctorId } = useParams();
    useEffect(() => {
      dispatch(fetchSingleDoctor(doctorId));
    }, []);
  
    if (loading) {
      return <Loader />;
    }