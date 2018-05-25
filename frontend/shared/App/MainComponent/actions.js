export function setUserToken(token) {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export function resetUserToken() {
    return {
        type: 'RESET_TOKEN'
    }
}