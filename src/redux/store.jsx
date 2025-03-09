import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const store = configureStore({
    reducer:cartReducer
})

export default store;