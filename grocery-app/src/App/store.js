import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'react-redux';
import items from '../Features/ItemSlice'

const reducer ={
    items,
}

export default configureStore({
    reducer,
})