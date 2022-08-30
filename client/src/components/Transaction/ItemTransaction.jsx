import React, { useState } from "react";
import styles from "./ItemTransaction.module.scss";
import clsx from "clsx";

function ItemTransaction(props) {
  return (
    <div className={clsx("col-12", styles.iTrans)}>
      <div className={clsx(styles.info)}>
        <img src={props.categ_img}></img>
        <p className={styles.name}>{props.categ}</p>
        <div className={clsx(styles.consume, "col-5")}>
          <p>-{props.amount}</p>
        </div>
        <p className={styles.note}>{props.note}</p>
      </div>
    </div>
  );
}

export default ItemTransaction;
