import React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import style from "./style.module.css";

export const Layout = () => {
    return (
        <div className={style.box}>
            <div className={style.main}>
                <Header />
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};
