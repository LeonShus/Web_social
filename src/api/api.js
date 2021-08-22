import * as axios from "axios"

let baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '07d72688-b7c0-4b2a-a320-f31389cc7056'
    }

})

export const UsersApi = {

    getUser(userId){
        return instance.get(baseUrl + `profile/${userId}`).then(response => response.data)
    },

    getUsersList(currentPage = 1, pageSize = 5){
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data)
    },

    followUser(id){
        return instance.post(baseUrl + `follow/${id}`).then(response => response.data)

    },

    unFollowUser(id){
        return instance.delete(baseUrl + `follow/${id}`).then(response => response.data)
    }
}

export const authApi = {
    authMe(){
        return instance.get(baseUrl + '/auth/me').then(response => response.data)
    },
}

