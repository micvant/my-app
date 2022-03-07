
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOATAL-COUNT';
const SET_FETCHING = 'SET-FETCHING'

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

let changeTotalCount = (state, totalCount)=>{
    let copyState = {...state, totalCountUsers : totalCount}
    return copyState;
}

let changeFetching = (state, isFetching) => {
    let copyState = {...state, isFetching : isFetching}
    return copyState;
}

let initialState = {
    users : [],
    pageSize: 5,
    totalCountUsers : 20,
    currentPage : 1,
    isFetching: false
};

export const usersReducer = (state = initialState, action) =>{

    switch (action.type) {

        case SET_USERS:
            return {...state, users: [ ...action.users ]};
        case FOLLOW:
            return changeFollowedUser(state, action.userID);
        case UNFOLLOW:
            return changeUnFollowedUser(state, action.userID);
        case SET_CURRENT_PAGE :
            return changeCurrentPages(state, action.currentPages);
        case SET_TOTAL_COUNT:
            return changeTotalCount(state, action.totalCount);
        case SET_FETCHING :
            return changeFetching(state, action.isFetching);
        default:
            return state;
    }
};

export const follow = (userID) => ({ type : FOLLOW, userID });
export const unfollow = (userID) => ({ type : UNFOLLOW, userID });
export const setUsers = (users) => ({type : SET_USERS, users });
export const setCurrentPages = (currentPages) => ({type : SET_CURRENT_PAGE, currentPages });
export const setTotalCount = (totalCount) => ({type : SET_TOTAL_COUNT, totalCount});
export const setFetching = (isFetching) => ({type:SET_FETCHING, isFetching});