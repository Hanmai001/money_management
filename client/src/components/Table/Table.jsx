import React, { useState, useEffect, useContext } from "react";
import styles from "./Table.module.scss";
import clsx from "clsx";
import axios from "axios";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";

function ItemList(props) {
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td className={styles.name}>{props.name}</td>
            <td>{props.consumed}</td>
            <td>{(props.consumed * 100) / props.initialBl}</td>
            <td>{props.createOn}</td>
        </tr>
    )
}
function Table() {
    const [checkMenu, setCheckMenu] = useState(true);
    const [lstWallet, setLstWallet] = useState([]);
    const [num_page, setNumPage] = useState(0);
    const [pos, setPos] = useState(0);
    const [search, setSearch] = useState("");
    const [lst_search, setLstSearch] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/wallets");

                console.log("lst_mywallet: ", res.data);
                setNumPage(Math.ceil(res.data.length / 5));
                setLstWallet(res.data);
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
    const decrease = (e) => {
        if (pos > 0) {
            setPos(pos - 1);
        }
        e.preventDefault();
    }
    const increase = (e) => {
        if (pos < num_page - 1) {
            setPos(pos + 1);
        }
        e.preventDefault();
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearch(value);
    }
    return (
        <div className={clsx("container-fuild")}>
            <Header clickMenu={clickMenu} />
            {checkMenu ? <Sidebar index={3} checkOpen={checkMenu} /> : null}
            <div className={clsx("row", styles.content)} style={checkMenu ? { width: "80%", marginLeft: "14rem" } : { width: "90%", marginLeft: "5%" }}>
                <div className={styles.title}>
                    <h1>Data Tables</h1>
                </div>
                <section className={styles.section}>
                    <div className={clsx("row")}>
                        <div className={clsx("col-12")}>
                            <div className={clsx("card", styles.card)}>
                                <div className={clsx("card-body", styles.cardBody)}>
                                    <h5>Datatables</h5>
                                    <p>The table below illustrates the list of expenditures and input budgets for each month sorted by the percentage of consumption corresponding to that month.</p>
                                    <div className={clsx("dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns")}>
                                        <div className={styles.tableTop}>
                                            <div className={styles.tableSearch}>
                                                <input name="search" type="text" placeholder="Search" value={search} onChange={handleChange}></input>
                                            </div>
                                        </div>
                                        <div className={styles.tableContanier}>
                                            <table className={clsx("table datatable table-striped", styles.tableData)}>
                                                <tbody>
                                                    <tr className={styles.head}>
                                                        <th scope="col" style={{ width: "6%", textAlign: "center" }}>
                                                            <p className={styles.dataSort}>Order</p>
                                                        </th>
                                                        <th scope="col" style={{ textAlign: "center" }}>
                                                            <p className={styles.dataSort}>Wallet Name</p>
                                                        </th>
                                                        <th scope="col" style={{ textAlign: "center" }}>
                                                            <p className={styles.dataSort}>Consumed</p>
                                                        </th>
                                                        <th scope="col" style={{ textAlign: "center" }}>
                                                            <p className={styles.dataSort}>Percentage</p>
                                                        </th>
                                                        <th scope="col" style={{ textAlign: "center" }}>
                                                            <p className={styles.dataSort}>Date</p>
                                                        </th>
                                                    </tr>
                                                    {lstWallet.map((item, index) => {
                                                        if (index >= 5 * pos && index <= 5 * pos + 4) {
                                                            return (<ItemList key={item.id} index={index + 1} name={item.name} initialBl={item.initialBalance} consumed={item.consumed ? item.consumed : 0} createOn={item.createOn} />)
                                                        }

                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={clsx("row", styles.bottom)}>
                                            <div>
                                                <i className="fa-solid fa-caret-left" onClick={decrease}></i>
                                                <span>{pos + 1}</span>
                                                <i className="fa-solid fa-caret-right" onClick={increase}></i>
                                            </div>
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
export default Table;