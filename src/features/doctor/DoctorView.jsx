import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { fetchSingleDoctor } from './doctorSlice';
import './doctors.css';
import Loader from '../loader/Loader';