import {types} from "../types";

const initialState = {
    count: 0
}

export function counterReducer (state = initialState, action){
    switch (action.type) {
        case types.INCREMENT:
            return{
                ...state,
                count: action.payload
            }

        case types.DECREMENT:
            return{
                ...state,
                count: action.payload
            }
        default: return state
    }
}