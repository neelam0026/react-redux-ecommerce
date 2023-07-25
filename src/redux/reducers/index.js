import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    // Add your reducer here.
    allProducts: productReducer
})

export default reducers;