import axios from "axios";

const usersAPI = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials : true,
    headers : {"API-KEY" : "2a002c6d-6f0a-4332-a99c-a9da24817eaa"}
});

export const getUsers = (pageNumber = 2, pageSize = 10) =>{
    let path = `users?page=${pageNumber}&count=${pageSize}`;
    return usersAPI.get(path).then(response => response.data);
}

export const authMe = () => {
    let path = `auth/me`;
    return usersAPI.get(path).then(response => response.data);
}

export const follow = (id) => {
    let path = `follow/${id}`;
    return usersAPI.post(path, {}).then(response => response.data);
}

export const unFollow = (id) => {
    let path = `follow/${id}`;
    return usersAPI.delete(path).then(response => response.data);
}