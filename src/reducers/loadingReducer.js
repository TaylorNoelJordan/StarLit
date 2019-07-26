export const loadingReducer = (state = isLoading, action) => {
    switch(action.type) {
        case 'IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}