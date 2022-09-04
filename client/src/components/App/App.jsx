import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Transaction from "../Transaction/Transaction";
import MyWallet from "../MyWallet/MyWallet";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/transaction" element={<Transaction />}></Route>
          <Route exact path="/mywallet" element={<MyWallet />}></Route>
        </Routes>
      </Fragment>
    </Router>
    
  );
}
export default App;
