import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import doctorReducer from '../features/doctor/doctorSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    user: userReducer,
  }
});

export default store;
