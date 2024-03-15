import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./menu/productSlice";

const rootReducer =combineReducers(
    {
        products:productReducer
    }
)
export default rootReducer;