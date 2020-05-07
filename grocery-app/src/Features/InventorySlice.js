import { createSlice } from "@reduxjs/toolkit";
import {addToCart} from './CustomerSlice'

export const ItemSlice = createSlice({
  name: "items",
  initialState: {
    1: { id: 1, name: "toilet paper", quantity: 5, price:`${10}` },
    2: { id: 2, name: "lysol", quantity: 3, price:`${4}` },
    3: { id: 3, name: "sanitizer", quantity: 10, price:`${2}` },
    4: { id: 4, name: "soap", quantity: 10, price:`${5}` },
    5: { id: 5, name: "water", quantity: 6, price:`${3}` },
  },
  reducers: {
    addItem: (state,{payload}) => {state.push(payload)},
    
    removeItem: (state) => {state.pop(payload)},
    extraReducers:{
        [addToCart]: state => { state.push("cartItem")}
    }
  }
});
export const { buyItems, clearItems } = ItemSlice.actions;
export default ItemSlice.reducer;
