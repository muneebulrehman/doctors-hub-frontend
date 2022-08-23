import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config';

const initialState = {
    appointments : [],
    appointment : {},
    loading: false
}

