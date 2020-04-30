import {createSlice} from '@reduxjs/toolkit'

export const ItemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers:{
        addItem: (state,{payload})=>{state.push(payload)},
        clearItem: ()=>[]
    }
})
export const {addItem, clearItem} = ItemSlice.actions
export default ItemSlice.reducer