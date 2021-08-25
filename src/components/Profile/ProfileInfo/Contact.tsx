import s from "./ProfileInfo.module.css";
import React from "react";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={s.contact}><b>{contactTitle}:</b>{' ' + (contactValue !== null ? contactValue : '---')}</div>
}