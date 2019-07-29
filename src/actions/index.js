export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const clearUser = () => ({
    type: 'CLEAR_USER'
});

export const hasErrored = errorMsg => ({
    type: 'HAS_ERRORED',
    errorMsg
});

export const setVerdict = (status) =>({
    type: 'SET_VERDICT',
    status
})