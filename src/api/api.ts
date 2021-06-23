import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': 'abc967f4-abc5-47ce-a245-10e7f69e7e3a'
        }
    }
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setUnfollowUser(id: string) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
    setFollowUser(id: string) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get(`profile/` + userId)
            .then(response => response.data)
    },
}
export const authAPI = {
    getAuthHeader() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
}



