import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const AddToCartSlice = createSlice({
  name: 'AddToCart',
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      // Update to handle both single and multiple items
      if (Array.isArray(action.payload)) {
        // If multiple items are added, push them to the items array
        state.items.push(...action.payload);
      } else {
        // If only one item is added, push it to the items array
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    }
  },
})

export const { AddToCart, removeFromCart } = AddToCartSlice.actions

export default AddToCartSlice.reducer