import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


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


const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }

}


export const setAuthUserData = (id: number, email: string, login: string): ActionsTypes => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuthHeader()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
}


export default authReducer