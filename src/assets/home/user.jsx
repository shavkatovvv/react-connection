import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export const User = () => {
    const [data, getData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
            res.json().then((data) => getData(data))
        );
    }, []);
    return (
        <ul className={style.list}>
            {data.map((item) => {
                return (
                    <Link to={`/user/detail/${item.id}`}>
                        <li className={style.item} key={item.id}>
                            <h1>{item.name}</h1>;<p>{item.username}</p>
                            <p>{item.email}</p>
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
};
