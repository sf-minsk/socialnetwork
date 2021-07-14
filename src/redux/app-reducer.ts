import {AppThunkType} from "./store";
import {getAuthUserData} from "./auth-reducer";

enum Type {
    INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS',
}

export type AppActionsType = {
    initialized: boolean
}

const initialState: AppActionsType = {
    initialized: false
}

const appReducer = (state: AppActionsType = initialState, action: AppActionTypes): AppActionsType => {
    switch (action.type) {
        case Type.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccessAC = () => ({
    type: Type.INITIALIZED_SUCCESS,
} as const)

export type AppActionTypes = ReturnType<typeof initializedSuccessAC>

export const initializeAppTC = (): AppThunkType => async dispatch => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccessAC())
    })
}


export default appReducer