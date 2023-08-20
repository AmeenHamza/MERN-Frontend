/************************************
* File Name: reducer-context.jsx    *
* Author: Ameen Hamza               *
* Output: Reducer for LoginContext  *
************************************/

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                token: action.token,
                user: action.user,
            };

        case "LOGOUT_USER":
            return {
                token: null,
                user: null,
            };

        default:
            return state;
    }
};
