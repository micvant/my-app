import {authMeAPI} from "../API/API";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setUserData = (login, email, id) => ({type: SET_USER_DATA, data: {login, email, id}});

export const authMeThunk = () => {
    return (dispatch) => {

        authMeAPI().then((data) => {
            debugger
                if (data.resultCode === 0) {
                    let {login, email, id} = {...data.data};
                    dispatch(setUserData(login, email, id));
                }
            }
        )
    }
}