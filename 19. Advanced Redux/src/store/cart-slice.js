import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload
      const existingItem = state.items.find(i => i.id === item.id)
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          name: item.title
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += item.price
      }
      state.totalQuantity++
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find(i => i.id === id)
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(i => i.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
      state.totalQuantity--
    },
  }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer