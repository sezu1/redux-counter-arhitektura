import {types} from "../types";


function incrementActionCreator(count){
    return{
        type: types.INCREMENT,
        payload: count + 1
    }
}


function decrementActionCreator(count){
    return{
        type: types.DECREMENT,
        payload: count - 1
    }
}

export {incrementActionCreator, decrementActionCreator}