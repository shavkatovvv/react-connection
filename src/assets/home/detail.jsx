import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";

export const Detail = () => {
    const [data, getData] = React.useState([]);
    const params = useParams();

    React.useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
        ).then((res) => res.json().then((data) => getData(data)));
    }, []);
    return (
        <ul className={style.wrap}>
            <li className={style.it} key={data.id}>
                <h1 className={style.title}>{data.name}</h1>;
                <p className={style.text}>{data.username}</p>
                <p className={style.text}>{data.email}</p>
            </li>
        </ul>
    );
};
