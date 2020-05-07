import {createSlice } from '@reduxjs/toolkit'
export const CustomerSlice = createSlice({
    name: "cartItem",
    initialState: {},
    reducers:{
        addToCart: (state, {payload}) =>{state.push(payload)},
        removeFromCart: (state, {payload})=> {state.pop(payload)},
    }

})


export const {addToCart, removeFromCart}  = CustomerSlice.actions
export default CustomerSlice.reducer