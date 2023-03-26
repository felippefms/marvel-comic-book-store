import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  CartItemnome: '',
  CartItemCapa: '',
}

export const AddToCartSlice = createSlice({
  name: 'AddToCart',
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.CartItemnome = action.payload.CartItemnome
      state.CartItemCapa = action.payload.CartItemCapa
    },
  },
})

export const { AddToCart } = AddToCartSlice.actions

export default AddToCartSlice.reducer