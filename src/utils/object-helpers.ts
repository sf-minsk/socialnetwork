import {usersStateType} from "../redux/users-reducer";

export const updateObjectInArray = (items: usersStateType, itemId: number, newProperty: boolean) => {
    return items.users.map(u => {
        if (u.id === itemId) {
            return {...u, followed: newProperty}
        }
        return u
    })
}