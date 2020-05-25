// This file returning user object with correct format 
import { UserActionTypes } from "./user.types";
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})