import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '4c873569-9ded-4ac6-9934-04ffb8f5a7e2'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});
export const userAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    setStatus(status) {
        return instance.put('/profile/status', {status})
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    setAuth(loginData) {
        return instance.post('/auth/login', {...loginData})
            .then(response => response.data);
    },
    delAuth() {
        return instance.delete('/auth/login')
            .then(response => response.data);
    },
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
            .then(response => response.data);
    }
};
