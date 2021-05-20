import { combineReducers } from 'redux'
 import authReducer from '../Auth/reducer';

const rootReducers = combineReducers({ 
    
    authReducer: authReducer
})

export default rootReducers