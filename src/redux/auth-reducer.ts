import {authAPI} from "../api/api";
import {AppThunkType} from "./store";

enum Type {
    SET_USER_DATA = 'SET-USER-DATA',
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
    switch (action.type) {
        case Type.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: Type.SET_USER_DATA,
    payload: {id, email, login, isAuth},
} as const)


export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthActionTypes = SetAuthUserDataActionType

export const getAuthUserData = (): AppThunkType => async dispatch => {
    const res = await authAPI.getAuthHeader()
    if (res.resultCode === 0) {
        const {id, email, login, isAuth} = res.data
        dispatch(setAuthUserData(id, email, login, isAuth))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}
export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}


export default authReducer