import { configureStore } from '@reduxjs/toolkit';
import getHqReducer from '../app/GetHqSlice'

export const store = configureStore({
  reducer: {
    SelectedHq: getHqReducer,
  },
});