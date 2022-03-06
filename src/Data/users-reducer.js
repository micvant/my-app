
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

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

let changeCurrentPages = (state, currentPages) => {
    let copyState = {...state, currentPage : currentPages};
    return copyState;
}
let initialState = {
    users : [],
    pageSize: 5,
    totalCountUsers : 19,
    currentPage : 1
};

export const usersReducer = (state = initialState, action) =>{

    switch (action.type) {

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users ]};
        case FOLLOW:
            return changeFollowedUser(state, action.userID);
        case UNFOLLOW:
            return changeUnFollowedUser(state, action.userID);
        case SET_CURRENT_PAGE :
            return changeCurrentPages(state, action.currentPage);
        default:
            return state;
    }
};

export const followAC = (userID) => ({ type : FOLLOW, userID });
export const unfollowAC = (userID) => ({ type : UNFOLLOW, userID });
export const setUsersAC = (users) => ({type : SET_USERS, users });
export const setCurrentPagesAC = (currentPages) => ({type : SET_CURRENT_PAGE, currentPages });