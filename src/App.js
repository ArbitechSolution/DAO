import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Component/Siderbar/SideBar";
import Deshboard from "./Component/Deshboard/Deshboard";
import StakeNMS from "./Component/Stake NMS/StakeNMS";
import BuyBond from "./Component/Buy Bond/BuyBond";
import {ToastContainer} from 'react-toastify';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import BondPopup from "./BondPopup";
import BondPopup from "./Component/Buy Bond/BondPopup";
// import BuyBond from "./Component/Buy Bond/BuyBond";
// import { Link, Switch, Route } from "react-router-dom";
function App() {
  const [ spinner, setSpinner ] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500)
  }, []);
  return spinner ?<div className="loadingPage"> <div  data-text="loading...">loading...</div> </div>: (
    <div className="App">
      <ToastContainer/>
      <SideBar />
    </div>
  );
}

export default App;
