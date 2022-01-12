import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SettingsIcon from "@mui/icons-material/Settings";
import MIM from "../../asset/MIM.svg";
import { IoMdClose } from "react-icons/io";
import "./BondBond.css";
import { InputGroup, FormControl } from "react-bootstrap";
import Setting from "./Setting";
function MyVerticallyCenteredModal(props) {
  const [onshow, setonshow] = useState(true);
  const [showone, setshowone] = useState(false);
  return (
    <div className="bondpopup">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{ postion: "top", zIndex: "100000", borderRadius: "28px" }}
        className="settingcontanier"
      >
        <Modal.Header
          // closeButton
          // SettingsIcon
          style={{
            backgroundColor: "rgb(23, 25, 27)",
            color: "white",
          }}
        >
          {/* <SettingsIcon style={{ color: "white" }} /> */}

          {/* <Modal.Title> */}
          <div className="container">
            <div className="row">
              <div className="col-3">
                <IoMdClose onClick={props.onHide} size={28} />
              </div>
              <div
                className="col-6"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "right",
                  // border: "2px solid red",
                }}
              >
                <img src={MIM} width="25px" />
                &emsp;
                <h6 id="h5" className="h5">
                  Fusion-BUSD LP
                </h6>
              </div>
              <div
                className="col-3 "
                style={{
                  display: "flex",
                  justifyContent: "right",
                  // border: "2px solid red",
                }}
              >
                <button
                  href=""
                  onClick={() => setshowone(true)}
                  style={{
                    backgroundColor: "Transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <SettingsIcon />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-5 ">
                <h5
                  className="bondpopupspan"
                  // style={{ display: "flex", justifyContent: "center" }}
                >
                  Mint Price
                </h5>
                <p className="bondpopupspanp">$5,135,435</p>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="bondpopupspan">Fusion Price</h5>
                <p className="bondpopupspanp">$3521.89</p>
              </div>
            </div>
            <div
              className="row"
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="col-md-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a className="bondpopupa" onClick={() => setonshow(true)}>
                  Mint
                </a>
                &emsp;&emsp;&emsp;
                <a className="bondpopupa" onClick={() => setonshow(false)}>
                  Redeem
                </a>
              </div>
            </div>
            {onshow ? (
              <div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  <div className="col-md-6 offset-md-3">
                    <InputGroup className="mb-3">
                      <FormControl
                        className="formcontrol"
                        placeholder="0.0"
                        type="Number"
                      />
                      <button className="btn btn-secondary" id="button-addon2">
                        MAX
                      </button>
                    </InputGroup>
                  </div>
                  <div className="col-md-6 offset-md-3">
                    <div className="d-grid gap-2">
                      <button className="btn btn-secondary" size="lg">
                        <b>Approve</b>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-11 offset-md-1">
                    <p
                      style={{
                        color: "darkgray",
                        lineHeight: "130%",
                        fontSize: "14px",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      Note: The "Approve" transaction is only needed when
                      minting for the first time; subsequent minting only
                      requires you to perform the "Mint" transaction.
                    </p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Your Balance</p>
                    <p>0 LP</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>You Will Get</p>
                    <p>0 Fusion</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Max You Can Buy</p>
                    <p>37.1494 Fusion</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>ROI</p>
                    <p>21.24%</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Vesting Term</p>
                    <p>5(Currently: 3 Days)</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Minimum purchase</p>
                    <p>0.01 Fusion</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-md-6 offset-md-3">
                    <div className="d-grid gap-2">
                      <button className="btn btn-secondary" size="lg">
                        <b>Claim</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "40px",
                  }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Pending Rewards</p>
                    <p>0 Fusion</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Claimable Rewards</p>
                    <p>0 Fusion</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Time until fully vested</p>
                    <p>0 Fusion</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>ROI</p>
                    <p>14.18%</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-12" id="Balanceview">
                    <p>Vesting Term</p>
                    <p>5(Currently: 3 Days)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* </Modal.Title> */}
        </Modal.Header>
        <Setting showone={showone} setshowone={setshowone} />
      </Modal>
    </div>
  );
}
function BondPopup({ show, setShow }) {
  return (
    <div className="container bondpopup">
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
    </div>
  );
}

export default BondPopup;
