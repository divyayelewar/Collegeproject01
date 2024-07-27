import {applyMiddleware,legacy_createStore,combineReducers} from 'redux'
import { thunk } from 'redux-thunk';
import { customerProductReducer } from './Products/Reducer';
import { authReducer } from './Auth/Reducer';


const rootReducers = combineReducers({
    auth:authReducer,
    products:customerProductReducer,
})


export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));