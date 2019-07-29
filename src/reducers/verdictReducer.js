export const verdictReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_VERDICT':
            return state = action.status
        default: 
        return state;
    }
}