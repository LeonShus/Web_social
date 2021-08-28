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
        alert('Chenge')
        return profileApi.getUser(userId)
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
        return instance.get(baseUrl + 'auth/me').then(response => response.data)
    },
    loginUser(email, password, rememberMe = false) {
        return instance.post(baseUrl + 'auth/login', { email, password, rememberMe })
            .then(response => response.data)
    },
    logout() {
        return instance.delete(baseUrl + 'auth/login')
        .then(response => response.data)
    }
}

export const profileApi = {
    getUser(userId){
        return instance.get(baseUrl + `profile/${userId}`).then(response => response.data)
    },
    
    getUserStatus(id){
        return instance.get(baseUrl + `profile/status/${id}`)
            .then(response => response.data)
    },

    putStatus(status) {
        return instance.put(baseUrl + `profile/status`, { status: status})
            
    }
}




