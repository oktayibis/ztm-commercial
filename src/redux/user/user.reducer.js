
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": // we define action type
            return { // Returning to new object as a state
                ...state, // First we pass old state or current state values
                currentUser : action.payload //payload is a new user state, write here as a difference
            }
    
        default:
            return state;
    }
}

export default userReducer;