import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
const appstore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default appstore;
