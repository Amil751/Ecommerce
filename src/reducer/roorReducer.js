import { combineReducers } from "redux";
import { globalStore } from "./globalsore";
import { addProductsToCart } from "./addProductsToCart";
export const rootReducer=combineReducers({global:globalStore,addtocart:addProductsToCart})