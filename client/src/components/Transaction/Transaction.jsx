import React, { useState, useEffect } from "react";
import styles from "./Transaction.module.scss";
import clsx from "clsx";
import axios from "axios";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import ItemTransaction from "./ItemTransaction";
import AddTransForm from "./AddTransForm";

const days = [];
for (var i = 0; i < 31; i++) {
  days.push(i + 1);
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Transaction() {
  const [checkDate, setCheckDate] = useState(false);
  const [checkMenu, setCheckMenu] = useState(true);
  const [open, setOpen] = useState(false);

  const [sum, setSum] = useState(0);
  const [time, setTime] = useState({
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    year: new Date().getFullYear(),
    day: new Date().getDay() + 1,
  });

  const [lst_trans, setLstTrans] = useState([]);
  const [lst_categ, setLstCateg] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res1 = await axios.get("http://localhost:5000/transactions");
        const res2 = await axios.get("http://localhost:5000/categories");

        console.log("lst_transaction: ", res1.data);
        console.log("lst_category: ", res2.data);
        let total = 0;
        let temp = res1.data.filter((item) => {
          if (Number(item.date.slice(0, 2)) === time.date) {
            console.log(item.date);
            total = total + item.amount;
            return true;
          }
        });

        setLstTrans(temp);
        setLstCateg(res2.data);
        setSum(total);

      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const checkChooseDate = () => {
    setCheckDate(!checkDate);
  };
  const clickMenu = (e) => {
    setCheckMenu(!checkMenu);
    e.preventDefault();
  };
  const selectMonth = async (num) => {
    const cur = new Date(time.year, num - 1, time.date);
    setTime((prev) => {
      return {
        ...prev,
        month: num,
        day: cur.getDay() + 1,
      };
    });
    try {
      const res = await axios.get("http://localhost:5000/transactions");

      let total = 0;
      let temp = res.data.filter((item) => {
        if (
          Number(item.date.slice(0, 2)) === time.date &&
          Number(item.date.slice(3, 5)) === num
        ) {
          console.log(item.date);
          total = total + item.amount;
          return true;
        }
      });

      setLstTrans(temp);
      setSum(total);
      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };
  const selectDate = async (num) => {
    const cur = new Date(time.year, time.month - 1, num);
    setTime((prev) => {
      return {
        ...prev,
        date: num,
        day: cur.getDay() + 1,
      };
    });
    try {
      const res = await axios.get("http://localhost:5000/transactions");

      let total = 0;
      let temp = res.data.filter((item) => {
        if (
          Number(item.date.slice(0, 2)) === num &&
          Number(item.date.slice(3, 5)) === time.month
        ) {
          console.log(item.date);
          total = total + item.amount;
          return true;
        }
      });

      setLstTrans(temp);
      setSum(total);

    } catch (error) {
      console.log(error);
    }

  };
  const selectYear = async (num) => {
    const cur = new Date(num, time.month - 1, time.date);
    setTime((prev) => {
      return {
        ...prev,
        day: cur.getDay() + 1,
        year: num,
      };
    });
    try {
      const res = await axios.get("http://localhost:5000/transactions");

      let total = 0;
      let temp = res.data.filter((item) => {
        if (
          Number(item.date.slice(0, 2)) === time.date &&
          Number(item.date.slice(3, 5)) === time.month
        ) {
          console.log(item.date);
          total = total + item.amount;
          return true;
        }
      });

      setLstTrans(temp);
      setSum(total);

    } catch (error) {
      console.log(error);
    }
  };
  const openAdd = () => {
    setOpen(!open);
  }
  return (
    <div className={clsx("container-fuild")}>
      <Header clickMenu={clickMenu} openAdd={openAdd} />
      {open ? <AddTransForm openAdd={openAdd} /> : null}
      <div className={clsx("row", styles.content)}>
        {checkMenu ? <Sidebar index={1} checkOpen={checkMenu} /> : null}
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
              <h6
                onClick={() => {
                  if (new Date().getMonth() === 0) {
                    selectMonth(12);
                    selectYear(time.year - 1);
                  } else {
                    selectMonth(new Date().getMonth());
                  }
                }}
                style={
                  time.month ===
                    (new Date().getMonth() === 0 ? 12 : new Date().getMonth())
                    ? {
                      color: "rgb(144, 218, 32)",
                      borderBottomColor: "rgb(144, 218, 32)",
                    }
                    : null
                }
              >
                LAST MONTH
              </h6>
            </div>
            <div className={clsx("col-2", styles.period)}>
              <h6
                onClick={() => selectMonth(new Date().getMonth() + 1)}
                style={
                  time.month === new Date().getMonth() + 1
                    ? {
                      color: "rgb(144, 218, 32)",
                      borderBottomColor: "rgb(144, 218, 32)",
                    }
                    : null
                }
              >
                THIS MONTH
              </h6>
            </div>
            <div className={clsx("col-2", styles.period)}>
              <h6
                onClick={() => {
                  if (new Date().getMonth() === 11) {
                    selectMonth(1);
                    selectYear(time.year + 1);
                  } else {
                    selectMonth(new Date().getMonth() + 2);
                  }
                }}
                style={
                  time.month ===
                    (new Date().getMonth() === 11 ? 1 : new Date().getMonth() + 2)
                    ? {
                      color: "rgb(144, 218, 32)",
                      borderBottomColor: "rgb(144, 218, 32)",
                    }
                    : null
                }
              >
                NEXT MONTH
              </h6>
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
                strokeWidth="1"
                fill="rgba(0,0,0,0.54)"
                fillRule="evenodd"
              >
                <rect
                  data-v-0698e127=""
                  id="blue-background"
                  fillOpacity="0"
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
            <span className={clsx(styles.today)}>{time.date}</span>
            <span>CHOOSE DATE</span>
            <i className="fa-solid fa-caret-down"></i>

            {checkDate ? (
              <div className={clsx(styles.tableDate)}>
                <table cellSpacing="0" cellPadding="1" width="40">
                  {days.map((day) => (
                    <tr onClick={() => selectDate(day)}>
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
                  <p className={styles.cur}>{time.date}</p>
                  <p className={styles.date}>{week[time.day - 1]},</p>
                  <div className={clsx(styles.consume, "col-5")}>
                    <p>-{sum}</p>
                  </div>
                  <p className={styles.month}>
                    {months[time.month - 1]} {time.year}
                  </p>
                </div>
              </div>
              {lst_trans.map((trans) => (
                <ItemTransaction
                  key={trans.id}
                  categ={
                    lst_categ.find((categ) => categ.id === trans.categoryId)
                      .name
                  }
                  categ_img={
                    lst_categ.find((categ) => categ.id === trans.categoryId)
                      .img
                  }
                  amount={trans.amount}
                  note={trans.note}
                />
              ))}
            </div>
            {/* TABLET */}
            <div
              className={clsx(
                "d-none d-md-block d-lg-none",
                styles.container
              )}
            >
              <div className={clsx("col-12", styles.sum)}>
                <div className={clsx(styles.day)}>
                  <p className={styles.cur}>{time.date}</p>
                  <p className={styles.date}>{week[time.day - 1]},</p>
                  <div className={clsx(styles.consume, "col-5")}>
                    <p>-{sum}</p>
                  </div>
                  <p className={styles.month}>
                    {months[time.month - 1]} {time.year}
                  </p>
                </div>
              </div>
              {lst_trans.map((trans) => (
                <ItemTransaction
                  key={trans.id}
                  categ={
                    lst_categ.find((categ) => categ.id === trans.categoryId)
                      .name
                  }
                  categ_img={
                    lst_categ.find((categ) => categ.id === trans.categoryId)
                      .img
                  }
                  amount={trans.amount}
                  note={trans.note}
                />
              ))}
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
                  <p className={styles.cur}>{time.date}</p>
                  <p className={styles.date}>{week[time.day - 1]},</p>
                  <div className={clsx(styles.consume, "col-5")}>
                    <p>-{sum}</p>
                  </div>
                  <p className={styles.month}>
                    {months[time.month - 1]} {time.year}
                  </p>
                </div>
              </div>
              {lst_trans.map((trans) => (
                <ItemTransaction
                  key={trans.id}
                  categ={
                    lst_categ.find((categ) => categ.id === trans.categoryId)
                      .name
                  }
                  categ_img={
                    lst_categ.find((categ) => categ.id === trans.categoryId)
                      .img
                  }
                  amount={trans.amount}
                  note={trans.note}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
