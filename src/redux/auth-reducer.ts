import {authAPI, securityAPI} from "../api/api";
import {AppThunkType} from "./store";
import {FormAction, stopSubmit} from "redux-form";

enum Type {
    SET_USER_DATA = 'auth/SET-USER-DATA',
    GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const initialState: AuthType = {
    id: null as number | null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
    switch (action.type) {
        case Type.SET_USER_DATA:
        case Type.GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: Type.GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
} as const)

export type AuthActionTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>

export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    const res = await authAPI.getAuthMe()
    if (res.resultCode === 0) {
        const {id, email, login} = res.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    return res
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        await dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            await dispatch(getCaptchaUrl())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        let action: FormAction = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}
export const getCaptchaUrl = (): AppThunkType => async dispatch => {
    const res = await securityAPI.getCaptchaUrl()
    const captcha = res.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}
export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer