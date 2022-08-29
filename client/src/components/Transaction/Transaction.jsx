import React, { useState } from "react";
import styles from "./Transaction.module.scss";
import clsx from "clsx";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ItemTransaction from "./ItemTransaction";

const days = [];
for (var i = 0; i < 31; i++) {
  days.push(i + 1);
}



function Transaction() {
  const [checkDate, setCheckDate] = useState(false);
  const [checkMenu, setCheckMenu] = useState(true);

  const checkChooseDate = () => {
    setCheckDate(!checkDate);
  };
  const clickMenu = (e) => {
    setCheckMenu(!checkMenu);
    e.preventDefault();
  };
  return (
    <div className={clsx("container-fuild")}>
      <Header clickMenu={clickMenu} />
      <div className={clsx("row", styles.content)}>
        {checkMenu ? <Sidebar checkOpen={checkMenu} /> : null}
        <div className={clsx(styles.main, "col-10")}>
          <div className={clsx("row", styles.overal)}>
            <div className={clsx("col-1", styles.period)}>
              <br></br>
              <br></br>
              <p>Inflow</p>
              <p>Outflow</p>
              <p>Total</p>
            </div>
            <div className={clsx("col-2", styles.period)}>
              <h6>LAST MONTH</h6>
            </div>
            <div className={clsx("col-2", styles.period)}>
              <h6>THIS MONTH</h6>
            </div>
            <div className={clsx("col-2", styles.period)}>
              <h6>NEXT MONTH</h6>
            </div>
            <div className={clsx("col-1", styles.period)}>
              <br></br>
              <br></br>
              <p style={{ color: "rgb(36, 218, 30)" }}>+10000000</p>
              <p style={{ color: "red" }}>-0</p>
              <p>10000000</p>
            </div>
          </div>
          <div className={clsx(styles.chooseDate)} onClick={checkChooseDate}>
            <svg
              data-v-0698e127=""
              data-v-c65906cc=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-labelledby="ic_calendar_empty"
              version="1.1"
            >
              <defs data-v-0698e127=""></defs>{" "}
              <g
                data-v-0698e127=""
                id="Icons/account/ic_account"
                stroke="none"
                stroke-width="1"
                fill="rgba(0,0,0,0.54)"
                fill-rule="evenodd"
              >
                <rect
                  data-v-0698e127=""
                  id="blue-background"
                  fill-opacity="0"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                ></rect>{" "}
                <path
                  data-v-c65906cc=""
                  d="M16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.895,3 3.01,3.895 3.01,5 L3,19 C3,20.105 3.895,21 5,21 L19,21 C20.105,21 21,20.105 21,19 L21,5 C21,3.895 20.105,3 19,3 L18,3 L18,1 L16,1 L16,1 Z M5,19 L5,8 L19,8 L19,19 L5,19 Z"
                  id="Shape"
                  data-v-0698e127=""
                ></path>
              </g>
            </svg>
            <span className={clsx(styles.today)}>29</span>
            <span>CHOOSE DATE</span>
            <i className="fa-solid fa-caret-down"></i>

            {checkDate ? (
              <div className={clsx(styles.tableDate)}>
                <table cellspacing="0" cellpadding="1" width="40">
                  {days.map((day) => (
                    <tr>
                      <td>{day}</td>
                    </tr>
                  ))}
                </table>
              </div>
            ) : null}
          </div>
          <div className={clsx("row", styles.lstTrans)}>
            <div className={clsx("col-7 d-none d-lg-block", styles.container)}>
              <div className={clsx("col-12", styles.sum)}>
                <div className={clsx(styles.day)}>
                  <p className={styles.cur}>28</p>
                  <p className={styles.date}>Sunday,</p>
                  <div className={clsx(styles.consume, "col-5")}>
                    <p>-280000000</p>
                  </div>
                  <p className={styles.month}>August 2022</p>
                </div>
              </div>
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
            </div>
            {/* TABLET */}
            <div
              className={clsx(
                "col-10 d-none d-md-block d-lg-none",
                styles.container
              )}
            >
              <div className={clsx("col-12", styles.sum)}>
                <div className={clsx(styles.day)}>
                  <p className={styles.cur}>28</p>
                  <p className={styles.date}>Sunday,</p>
                  <div className={clsx(styles.consume, "col-5")}>
                    <p>-280000000</p>
                  </div>
                  <p className={styles.month}>August 2022</p>
                </div>
              </div>
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
            </div>
            {/* MOBILE */}
            <div
              className={clsx(
                "col-12 d-xs-block d-sm-block d-md-none",
                styles.container
              )}
            >
              <div className={clsx("col-12", styles.sum)}>
                <div className={clsx(styles.day)}>
                  <p className={styles.cur}>28</p>
                  <p className={styles.date}>Sunday,</p>
                  <div className={clsx(styles.consume, "col-5")}>
                    <p>-280000000</p>
                  </div>
                  <p className={styles.month}>August 2022</p>
                </div>
              </div>
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
              <ItemTransaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
