import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    isLoading: loadingReducer
})

export default rootReducer;