import { combineReducers } from "redux";
import { domReducer } from "./domReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    product: productReducer,
    app: domReducer
})