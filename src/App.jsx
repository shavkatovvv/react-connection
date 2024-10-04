import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../src/assets/home/home";
import { User } from "./assets/home/user";
import { Profile } from "../src/assets/home/profile";
import { Layout } from "./layout/main-layout";
import { Detail } from "./assets/home/detail";
import { Profilelayout } from "./layout/profile-layout";
import { Changeem } from "./assets/home/Profile/change-em";
import { Createem } from "./assets/home/Profile/create-em";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Home />}></Route>
                    <Route path="/user" element={<User />}></Route>
                    <Route path="/profile" element={<Profilelayout />}>
                        <Route index element={<Profile />} />
                        <Route
                            path="/profile/change-em"
                            element={<Changeem />}
                        />
                        <Route
                            path="/profile/create-em"
                            element={<Createem />}
                        />
                    </Route>
                    <Route
                        path="/user/detail/:userId"
                        element={<Detail />}
                    ></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
