import { ActionTypes } from "../constants/actionTypes"

const intialState ={
    products: [{
        id: 1, title:'Product A', category: "Programmer"
    }]
}

export const productReducer = (state, { type, payload}) =>{
   switch (type) {
    case  ActionTypes.SET_PRODUCTS:
        return state;
    default : 
        return state;
   }
}

export default productReducer;