import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { combineReducers } from 'redux';
import { verdictReducer } from './verdictReducer';

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    isLoading: loadingReducer,
    verdict: verdictReducer
})

export default rootReducer;