import React from "react";
import "./Deshboard.css";
function Deshboard() {
  return (
    <div className="container container1" id="deshborad">
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-5 boxs">
          <h4 className="idea">Fusion Price</h4>
          <h4 className="idea1">$0</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Market Cap</h4>
          <h4 className="idea1">$NaN</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Staked Rate</h4>
          <h4 className="idea1">$NaN</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Locked Rate</h4>
          <h4 className="idea1">$NaN</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Fusion TotalSupply</h4>
          <h4 className="idea1">$0</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">TVL</h4>
          <h4 className="idea1">$NaN</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">APY</h4>
          <h4 className="idea1">$NaN </h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Current Index</h4>
          <h4 className="idea1">NaN Fusion</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Treasury Balance</h4>
          <h4 className="idea1">$NaN</h4>
        </div>
        <div className="col-md-5 boxs">
          <h4 className="idea">Runway</h4>
          <h4 className="idea1">NaN Days</h4>
        </div>
      </div>
    </div>
  );
}

export default Deshboard;
