import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthActionTypes} from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import appReducer, {AppActionTypes} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType = AuthActionTypes
    | DialogsActionType
    | ProfileActionType
    | UsersActionType
    | AppActionTypes
export type AppThunkType<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store