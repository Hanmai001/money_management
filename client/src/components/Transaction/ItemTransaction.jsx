import React, { useState } from "react";
import styles from "./ItemTransaction.module.scss";
import clsx from "clsx";

function ItemTransaction() {
  return (
    <div className={clsx("col-12", styles.iTrans)}>
      <div className={clsx(styles.info)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/768px-Creative-Tail-Animal-dog.svg.png"></img>
        <p className={styles.name}>Name type</p>
        <div className={clsx(styles.consume, "col-5")}>
          <p>-280000000</p>
        </div>
        <p className={styles.note}>Note: Buy food for dog</p>
      </div>
    </div>
  );
}

export default ItemTransaction;
