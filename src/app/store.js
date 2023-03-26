import { configureStore } from '@reduxjs/toolkit';
import getHqReducer from '../app/GetHqSlice';
import AddToCartReducer from '../app/AddToCartSlice';

export const store = configureStore({
  reducer: {
    SelectedHq: getHqReducer,
    AddToCart: AddToCartReducer,
  },
});