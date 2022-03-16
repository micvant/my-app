import axios from "axios";

const usersAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "2a002c6d-6f0a-4332-a99c-a9da24817eaa"}
});

export const getUsersAPI = (pageNumber = 22692, pageSize = 10) => {
    let path = `users?page=${pageNumber}&count=${pageSize}`;
    return usersAPI.get(path).then(response => response.data);
}

export const getProfileAPI = (userId) => {
    let path = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
    return axios.get(path).then((respone => respone.data));
}

export const authMeAPI = () => {
    let path = `auth/me`;
    return usersAPI.get(path).then(response => response.data);
}

export const setFollowAPI = (id) => {
    let path = `follow/${id}`;
    return usersAPI.post(path, {}).then(response => response.data);
}

export const setUnFollowAPI = (id) => {
    let path = `follow/${id}`;
    return usersAPI.delete(path).then(response => response.data);
}

export const getStatusAPI = (id) => {
    let path = `profile/status/${id}`;
    return usersAPI.get(path).then(response => response.data);
}

export const setStatusAPI =(status)=> {
    let path = '/profile/status/';
    return usersAPI.put(path).then(response => response.data);
}