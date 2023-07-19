import {legacy_createStore as createStore}  from "redux";
import reducer from "./reducers/productReducer" // for multiple reducers use combineReducers

const store = createStore(
    reducer,
     {},
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

// console.log(store.getstate())
export default store;
