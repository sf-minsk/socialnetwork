import preloader from "../../../assets/images/preloader.gif";
import React from "react";

type PropsType = {

}

export const Preloader = (props: PropsType) => {
    return <div style={{width: '100px', position: "fixed", top: '50%', left: '50%'}}>
        <img src={preloader}/>
    </div>
}