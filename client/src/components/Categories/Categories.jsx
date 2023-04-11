import React, { useState, useEffect } from "react";
import styles from "./Categories.module.scss";
import clsx from "clsx";
import axios from "axios";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";


function Categories() {
    const [checkMenu, setCheckMenu] = useState(true);
    const [lst_categ, setLstCateg] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/categories");
                console.log("lst_category: ", res.data);

                setLstCateg(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    const clickMenu = (e) => {
        setCheckMenu(!checkMenu);
        e.preventDefault();
    };

    return (
        <div className={clsx("container-fuild")}>
            <Header clickMenu={clickMenu} />
            <div className={clsx("row", styles.content)}>
                {checkMenu ? <Sidebar index={6} checkOpen={checkMenu} /> : null}

                <div className={clsx("row", styles.lstCateg)}>
    
                    <div className={clsx(styles.container)}>
                        {lst_categ.map((item) => (
                            <div key={item.id} className={clsx("col-12", styles.iCateg)}>
                                <img src={item.img}></img>
                                <span className={styles.name}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;