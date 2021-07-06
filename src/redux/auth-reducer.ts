import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppActionsType, AppThunkType} from "./store";

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

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: Type.SET_USER_DATA,
    payload: {id, email, login},
} as const)
export const getAuthUserData = () => (dispatch: Dispatch<AppActionsType>) => {
    authAPI.getAuthHeader()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
}

export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthActionTypes = SetAuthUserDataActionType

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    let res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}
export const logout = (): AppThunkType => async dispatch => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}




export default authReducer