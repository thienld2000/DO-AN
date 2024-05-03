import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./menu/productSlice";
import authReducer from "./user/authSlice";

const rootReducer =combineReducers(
    {
        products:productReducer,
        auth:authReducer,

    }
)
export default rootReducer;