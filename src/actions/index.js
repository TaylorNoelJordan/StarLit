export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const hasErrored = errorMsg => ({
    type: 'HAS_ERRORED',
    errorMsg
});

export const isLoading = () => ({
    type: 'IS_LOADING'
});