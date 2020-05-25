// This file returning user object with correct format 

export const setCurrentUser = user => ({
    type: "SET_CURRENT_USER",
    payload: user
})