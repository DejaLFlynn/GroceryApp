import React from 'react'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'react-redux';
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import items from '../Features/ItemSlice'

const reducer ={
    items,
}

export default configureStore({
    reducer,
})