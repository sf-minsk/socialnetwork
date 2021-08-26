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
    setUnfollowUser(id: number) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
    setFollowUser(id: number) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
}
export const profileAPI = {
    getProfile(userId: number | null) {
        return instance
            .get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance
            .get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance
            .put(`profile/photo/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile(profile: any) {
        return instance
            .put('profile', profile)
    }
}
export const authAPI = {
    getAuthMe() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string) {
        return instance
            .post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance
            .delete(`auth/login`)
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get('security/get-captcha-url')
    }
}



