
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

let changeFollowedUser = (state, userID) => {
    let copyState = {...state, users: state.users.map( u => {
            if(u.id == userID){
                return {...u, followed : true}
            }
            return u;
        })};
    return copyState;
};

let changeUnFollowedUser = (state, userID) => {
    let copyState = {...state, users: state.users.map( u => {
            if(u.id == userID){
                return {...u, followed : false}
            }
            return u;
        })};
    return copyState;
};

let initialState = {
    users : [
        {id: 0, followed: true ,fullName : 'Dmity', status : 'I am a boss', location : { city : 'Moscow', country : 'Belarus'}},
        {id: 1, followed: true, fullName : 'TEST', status : 'I am a boss', location : { city : 'Moscow', country : 'Russia'}},
        {id: 2, followed: false, fullName : 'KEK', status : 'I am a boss', location : { city : 'Moscow', country : 'Ukraine'}},
        {id: 3, followed: false, fullName : 'LOL', status : 'I am a boss', location : { city : 'Moscow', country : 'USA'}}
    ]
};

export const usersReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users ]};
        case FOLLOW:
            return changeFollowedUser(state, action.userID);
        case UNFOLLOW:
            return changeUnFollowedUser(state, action.userID);
        default:
            return state;
    }
};

export const followAC = (userID) => ({ type : FOLLOW, userID });
export const unfollowAC = (userID) => ({ type : UNFOLLOW, userID });
export const setUsersAC = (users) => ({type : SET_USERS, users });