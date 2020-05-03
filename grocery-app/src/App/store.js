import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import items from "../Features/ItemSlice";

const reducer = {
  items,
};

export default configureStore({
  reducer,
});
