import {authAPI} from "../api/api";
import {AppThunkType} from "./store";
import {stopSubmit} from "redux-form";

enum Type {
    SET_USER_DATA = 'auth/SET-USER-DATA',
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthType = {
    id: null as number | null,
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
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: Type.SET_USER_DATA,
    payload: {id, email, login, isAuth},
} as const)

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    const res = await authAPI.getAuthMe()
    if (res.resultCode === 0) {
        const {id, email, login} = res.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    return res
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        await dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        let action: any = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}
export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer