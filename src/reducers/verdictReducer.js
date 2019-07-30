export const verdictReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_VERDICT':
            return action.status
        default: 
        return state;
    }
}