import React, { useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

function Header(props) {
  return (
    <div className={clsx("row", styles.header)}>
      <div className={clsx("col-6")}>
        <h4>MY WALLET</h4>
        <i className="fa-solid fa-bars" onClick={props.clickMenu}></i>
      </div>

      <div className={clsx("col-6", styles.addWallet)}>
        <button onClick={props.openFormAdd}>ADD WALLET</button>
      </div>
    </div>
  );
}

export default Header;
