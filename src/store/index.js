import {combineReducers, createStore} from 'redux'
import {counterReducer} from "./reducers/counterReducer";


const rootReducer = combineReducers({
    counterR: counterReducer
})

export const store = createStore(rootReducer);