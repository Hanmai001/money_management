import React, { useState, useEffect, useContext } from "react";
import styles from "./Chart.module.scss";
import clsx from "clsx";
import axios from "axios";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import ApexChart from "react-apexcharts";
import useBeforeRender from "./ulti";

const date = [];
for (var i = 1; i < 32; i++) date.push(i);

function FormTime(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={clsx("col-12", styles.header)}>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={props.openFormTime}
                    ></button>
                    <h6>Set time</h6>

                </div>
                <div className={styles.date} onClick={() => props.clickTime(1)}>
                    <p>THIS MONTH</p>
                </div>
                <div className={styles.date} onClick={() => props.clickTime(2)}>
                    <p>LAST MONTH</p>
                </div>
                <div className={styles.date} onClick={() => props.clickTime(3)}>
                    <p>LAST 3 MONTHS</p>
                </div>
                <div className={styles.date} onClick={() => props.clickTime(4)}>
                    <p>LAST 6 MONTHS</p>
                </div>
                <div className={styles.date} onClick={() => props.clickTime(5)}>
                    <p>LAST 9 MONTHS</p>
                </div>
            </div>
        </div>
    )
}
function Child(props) {
    const [checkMenu, setCheckMenu] = useState(true);
    const [openTime, setOpenTime] = useState(false);
    const [time, setTime] = useState("THIS MONTH");
    const [data, setData] = useState(props.data);
    const [consumed, setConsumed] = useState(data.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0));
    const [barchart, setBarChart] = useState({
        plotOptions: {

            chart: {
                id: "basic-bar"
            },
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
            xaxis: {
                type: 'category',
                categories: date,
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            },
            dataLabels: {
                enable: false
            }
        },
        series: [
            {
                name: "Inflow",
                data: data
            },
        ],

    });
    const [piechart, setPieChart] = useState({
        series: [10000000 - consumed, consumed],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        //width: 100
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    })
    const clickMenu = (e) => {
        setCheckMenu(!checkMenu);
        e.preventDefault();
    };
    const openFormTime = () => {
        setOpenTime(!openTime);
        setCheckMenu(false);
    }
    const clickTime = async (num) => {
        if (num === 1) setTime("THIS MONTH");
        else if (num === 2) setTime("LAST MONTH");
        else if (num === 3) setTime("LAST 3 MONTH");
        else if (num === 4) setTime("LAST 6 MONTH");
        else if (num === 5) setTime("LAST 9 MONTH");

        setOpenTime(!openTime);
    }
    return (
        <div className={clsx("container-fuild")}>
            <Header clickMenu={clickMenu} />
            {openTime ? <FormTime openFormTime={openFormTime} clickTime={clickTime} /> : null}
            {checkMenu ? <Sidebar index={2} checkOpen={checkMenu} /> : null}
            <div className={clsx("row", styles.content)} style={checkMenu ? { width: "80%", marginLeft: "14rem" } : { width: "90%", marginLeft: "5%" }}>
                <section className={styles.section}>
                    <div className={styles.time}>
                        <h5 onClick={openFormTime}>{time}</h5>
                        <i className="fa-solid fa-caret-down" onClick={openFormTime}></i>
                    </div>
                    <div className={clsx("row", styles.barChart)}>
                        <div className={clsx("col-12")}>
                            <div className={clsx("card", styles.card)}>
                                <div className={clsx("card-body", styles.cardBody)}>
                                    <h5>Bar Chart</h5>
                                    <p>The table below illustrates the monthly expenses for each user's targeted wallet corresponding to that month.</p>
                                    <div className={clsx("mixed-chart", styles.container)}>
                                        <ApexChart
                                            options={barchart.plotOptions}
                                            series={barchart.series}
                                            type="bar"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={clsx("row", styles.pieChart)}>
                        <div className={clsx("col-12")}>
                            <div className={clsx("card", styles.card)}>
                                <div className={clsx("card-body", styles.cardBody)}>
                                    <div className={clsx(styles.expense, "col-6")}>
                                        <h5>Expense</h5>
                                        <span>-2000000000</span>
                                    </div>
                                    <div className={clsx(styles.debt, "col-6")}>
                                        <h5>Debt</h5>
                                        <span>-2000000000</span>
                                    </div>
                                    <div className={styles.chart}>
                                        <div className={clsx("mixed-chart", styles.container)}>
                                            <ApexChart options={piechart.options} series={piechart.series} type="donut" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    )
}
function Chart() {
    const [data, setData] = useState();
    useEffect(() => {
        setData([1, 0, 0, 44, 5, 3, 6, 0, 0, 0, 0, 54, 6, 325, 653, 0, 0, 0, 0, 0, 123, 424, 43, 0, 0, 0, 435, 32, 54, 0, 0]);
    }, []);
    return data && (<Child data={data} />)
}
export default Chart;