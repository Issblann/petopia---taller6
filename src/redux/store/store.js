import { configureStore } from '@reduxjs/toolkit';
import animalsSlice from '../slice/animals/slice';
export const store = configureStore({
  reducer: {
    animals: animalsSlice,
  },
});
