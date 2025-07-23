import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../features/Products/ProductSlice";
import cartReducer from "../features/Cart/cartSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    }

})