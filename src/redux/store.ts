import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));


// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store