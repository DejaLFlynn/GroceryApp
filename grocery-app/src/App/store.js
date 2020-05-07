import React from 'react'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'react-redux';

import items from '../Features/InventorySlice'


const reducer ={
    items
}

const store =configureStore({
    reducer,
})

export default store;