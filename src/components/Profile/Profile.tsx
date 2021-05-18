import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from '../../redux/store';
import {MyPostsContainer} from "./Myposts/MyPostsContainer";

type PropsType = {
    store: StoreType
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}



