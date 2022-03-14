import {getUsersAPI, setUnFollowAPI, setFollowAPI} from "../API/API";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOATAL-COUNT';
const SET_FETCHING = 'SET-FETCHING';
const SET_FETCHINGS_USERS = 'SET-FETCHINGS-USERS';

let changeFollowedUser = (state, userID) => {
    let copyState = {...state, users: state.users.map( u => {
            if(u.id === userID){
                return {...u, followed : true}
            }
            return u;
        })};
    return copyState;
};

let changeUnFollowedUser = (state, userID) => {
    let copyState = {...state, users: state.users.map( u => {
            if(u.id === userID){
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

let changeFetchingsUsers = (state, action) => {
    let copyState = {...state,
        fetchingUsers : action.isFetching ? [...state.fetchingUsers, action.id]
            : state.fetchingUsers.filter(id => id !== action.id)
    }

    return copyState;
}

let initialState = {
    users : [],
    pageSize: 5,
    totalCountUsers : 20,
    currentPage : 1,
    isFetching: false,
    fetchingUsers : []
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
        case SET_FETCHINGS_USERS :
            return changeFetchingsUsers(state, action);
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
export const setFetchingsUsers = (isFetching, id) => ({type:SET_FETCHINGS_USERS, isFetching, id});

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        dispatch(setCurrentPages(currentPage))
        getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(setFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

export const setFollowThunk = (id) => {
    return (dispatch) => {
        dispatch(setFetchingsUsers(true, id));
        setFollowAPI(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(setFetchingsUsers(false, id));
        })
    }
}

export const setUnFollowThunk = (id) => {
    return (dispatch)=> {
        dispatch(setFetchingsUsers(true, id));
        setUnFollowAPI(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(setFetchingsUsers(false, id));
        })
    }
}
