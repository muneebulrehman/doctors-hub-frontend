import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config';

const initialState = {
    appointments : [],
    appointment : {},
    loading: false
}

export const userAppointments = createAsyncThunk('appointment/userAppointments', async (user)=> {
    const response = await fetch(`${api}appointments/${user.id}`) 
    const data = await response.json()
    return data
})
