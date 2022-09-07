import React, { useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

function Header(props) {
    return (
        <div className={clsx("row", styles.header)}>
            <div className={clsx("col-6")}>
                <h4>MY ACCOUNT</h4>
                <i className="fa-solid fa-bars" onClick={props.clickMenu}></i>
            </div>
            <div className={clsx("col-6", styles.col2)}>
                {/* <i className="fa-solid fa-right-from-bracket"></i> */}
                <h6>Sign out</h6>
               
            </div>

        </div>
    );
}

export default Header;
