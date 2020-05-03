import { createSlice } from "@reduxjs/toolkit";
let id;
export const ItemSlice = createSlice({
  name: "items",
  initialState: {
    1: { id: 1, name: "toilet paper", quantity: 5 },
    2: { id: 2, name: "lysol", quantity: 3 },
    3: { id: 3, name: "sanitizer", quantity: 10 },
    4: { id: 4, name: "soap", quantity: 10 },
    5: { id: 5, name: "water", quantity: 6 },
  },
  reducers: {
    buyItems: {
      reducer: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      prepare: (item) => {
        return { payload: { id: id++, ...item, quantity: -1 } };
      },
    },
    clearItem: (state) => {
      state.payload.quantity = state.payload.quantity - 1;
    },
  },
});
export const { buyItems, clearItems } = ItemSlice.actions;
export default ItemSlice.reducer;
