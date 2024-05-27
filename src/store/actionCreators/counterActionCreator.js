import {types} from "../types";


function incrementActionCreator(){
    return{
        type: types.INCREMENT
    }
}


function decrementActionCreator(){
    return{
        type: types.DECREMENT
    }
}

export {incrementActionCreator, decrementActionCreator}