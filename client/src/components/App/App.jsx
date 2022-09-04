import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Transaction from "../Transaction/Transaction";
import MyWallet from "../MyWallet/MyWallet";
import Categories from "../Categories/Categories";
import AuthApi from "../Home/Auth";

function App() {

  const [Auth, setAuth] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("httpls://jsonplaceholder.typicode.com/posts");

        console.log("Check login: ", res.data);
        if (res.data) {
          setAuth(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (

    <Router>
      <Fragment>
        <AuthApi.Provider value={{ Auth, setAuth }}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/transaction" element={<Transaction />}></Route>
            <Route exact path="/mywallet" element={<MyWallet />}></Route>
            <Route exact path="/categories" element={<Categories />}></Route>
          </Routes>
        </AuthApi.Provider>
      </Fragment>
    </Router>

  );
}
export default App;
