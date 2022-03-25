import Action from "../types/redux-action";
import AppState from "../types/app-state";

export interface IUserReducer {
    email: string;
}

const initialState: IUserReducer = {
    email: ''
};

enum USER_TYPES {
    SET = 'user/set',
    CLEAR = 'user/clear'
}

const setUser = (email: string): Action<string> => (
    {
        type: USER_TYPES.SET,
        payload: email
    }
);

const clearUser = (): Action => ({
    type: USER_TYPES.CLEAR
});

const isAuthenticated = (state: AppState): boolean => !!state.user.email;

const userReducer = (state = initialState, action: Action<unknown>): IUserReducer => {
    switch (action.type) {
        case USER_TYPES.SET: {
            return {
                email: action.payload as string
            }
        }
        case USER_TYPES.CLEAR: {
            return initialState
        }
        default: {
            return state
        }
    }
}

export {
    userReducer,
    setUser,
    clearUser,
    isAuthenticated
}