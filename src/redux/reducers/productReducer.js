import { ActionTypes } from "../constants/actionTypes"

const intialState ={
    products: [{
        id: 1, title:'Product A', category: "Programmer",
        id: 2, title:'Product B', category: "UI Developer"
    }]
}

export const productReducer = (state = intialState, { type, payload}) =>{
   switch (type) {
    case  ActionTypes.SET_PRODUCT: //whenever setProduct action is dispatched then updated the state as following
        console.log({...state}, 'from Reducer')
        return {...state, payload};
    default : 
        return {name: "nilam"};
   }
}

export default productReducer;