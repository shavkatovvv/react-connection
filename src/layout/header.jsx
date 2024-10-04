import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <Link className={style.Link} to={"/"}>
                home
            </Link>
            <Link className={style.Link} to={"/user"}>
                user
            </Link>
            <Link className={style.Link} to={"/profile"}>
                profile
            </Link>
        </div>
    );
};
