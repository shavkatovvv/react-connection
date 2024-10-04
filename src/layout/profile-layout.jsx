import React from "react";
import style from "./style.module.css";
import { Link, Outlet } from "react-router-dom";

export const Profilelayout = () => {
    return (
        <div className={style.wrap}>
            <div className={style.box_prof}>
                <Link className={style.Linkk} to={"/profile"}>
                    Profile
                </Link>
                <Link className={style.Linkk} to={"/profile/change-em"}>
                    change
                </Link>
                <Link className={style.Linkk} to={"/profile/create-em"}>
                    create
                </Link>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    );
};
