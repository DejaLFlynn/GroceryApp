import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'react-redux';
 

export default configureStore({
    reducer:{

    },
    middleware:[...getDefaultMiddleware(), logger]
}):