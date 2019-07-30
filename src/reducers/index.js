import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { combineReducers } from 'redux';
import { verdictReducer } from './verdictReducer';

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    verdict: verdictReducer
})

export default rootReducer;