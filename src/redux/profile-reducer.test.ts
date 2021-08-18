import profileReducer, {addPostAC, deletePostAC, InitialStateType, UsersProfileType} from "./profile-reducer";

const state: InitialStateType = {
    posts: [
        {id: '1', message: 'Hello', likeCount: 41},
        {id: '2', message: 'How are u?', likeCount: 20}
    ],
    profile: null as UsersProfileType | null,
    status: "status",
}

test('length of posts should be incremented', () => {
    const action = addPostAC('test post')
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    const action = addPostAC('test post')
    const newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('test post')
})

test('length after deleting should be decrement', () => {
    const action = deletePostAC('1')
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

test("length after deleting shouldn't be decrement if ID is incorrect" , () => {
    const action = deletePostAC('10')
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})










