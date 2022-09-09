import React, { useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

function Header(props) {
    return (
        <div className={clsx("row", styles.header)}>
            <div className={clsx("col-6")}>
                <h4>TABLE</h4>
                <i className="fa-solid fa-bars" onClick={props.clickMenu}></i>
            </div>
        </div>
    );
}

export default Header;
