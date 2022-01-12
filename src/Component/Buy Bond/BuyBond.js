import React from "react";
import "./BuyBond.css";
import MIM from "../../asset/MIM.svg";
import Table from "react-bootstrap/Table";
function BuyBond({ setShow, setshowone }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="stakeNMSColor">
    <div className="container container2">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "37px",
        }}
      >
        <div className="col-md-10 boxes11">
          <div className="row">
            <div className="col-md-5">
              <h5 className="idea text-start">Mint (1,1)</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-md-5">
              <h4 className="nmsidea">Treasury Balance</h4>
              <p className="nmsspan1">$5,135,435</p>
            </div>
            <div className="col-md-6 mt-5">
              <h4 className="nmsidea">Fusion Price</h4>
              <p className="nmsspan1">$3521.89</p>
            </div>
          </div>
          <div className="row tablerow">
            <div className="col-md-11 mt-5">
              <table class="table table-borderless" responsive>
                <thead>
                  <tr className="tabletr">
                    <th scope="col"></th>
                    <th scope="col" colspan="1">
                      Mint
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">ROI</th>
                    <th scope="col">Purchased</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody style={{}}>
                  <tr>
                    <th scope="row">
                      <img src={MIM} width="24px" />
                    </th>
                    <td colspan="1">
                    Fusion-BUSD LP <br />
                      <a href="" className="linkcss">
                        View Contract
                      </a>
                    </td>
                    <td>$ 2810.48</td>
                    <td>30.20%</td>
                    <td>$4,115,637</td>
                    <td>
                      <buton
                        className="btn btn-secondary"
                        id="btn1"
                        style={{ padding: "8px 30px 8px 30px" }}
                        onClick={() => setShow(true)}
                      >
                        Mint
                      </buton>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src={MIM} width="24px" />
                    </th>
                    <td colspan="1">BUSD</td>
                    <td>3201.14</td>
                    <td>14.31%</td>
                    <td>$1,122,878</td>
                    <td>
                      <buton
                        className="btn btn-secondary"
                        id="btn1"
                        style={{ padding: "8px 30px 8px 30px" }}
                        onClick={() => setshowone(true)}
                      >
                        Mint
                      </buton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <div
          className="row cardrow"
          id=""
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-6 boxex33">
            <div className="row">
              <div
                className="col-md-12"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img src={MIM} width="30px" />
                &emsp;
                <h5 id="h5" className="h5">
                Fusion-BUSD LP
                  <br />
                  <a href="" className="linkcss">
                    View Contract
                  </a>
                </h5>
              </div>

              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
              >
                <div className="col-md-12" id="Balanceview">
                  <p>Price</p>
                  <p>$ 2810.48</p>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-md-12" id="Balanceview">
                  <p>ROI</p>
                  <p>30.20%</p>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-md-12" id="Balanceview">
                  <p>Purchased</p>
                  <p>$4,115,637</p>
                </div>
              </div>
              <div className="row mb-4">
                {/* <div className="col-md-12" id="Balanceview"> */}
                <div className="d-grid gap-2">
                  <button className="btn btn-secondary" size="lg" onClick={() => setShow(true)}>
                    <b>Mint Fusion-BUSD LP</b>
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="row cardrow"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-6 boxex33">
            <div className="row">
              <div
                className="col-md-12"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img src={MIM} width="30px" />
                &emsp;
                <h5>BUSD</h5>
              </div>

              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
              >
                <div className="col-md-12" id="Balanceview">
                  <p>Price</p>
                  <p>3201.14</p>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-md-12" id="Balanceview">
                  <p>ROI</p>
                  <p>14.31%</p>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-md-12" id="Balanceview">
                  <p>Purchased</p>
                  <p>$1,122,878</p>
                </div>
              </div>
              <div className="row mb-4">
                {/* <div className="col-md-12" id="Balanceview"> */}
                <div className="d-grid gap-2">
                  <button className="btn btn-secondary" size="lg" onClick={() => setshowone(true)}>
                    <b>Mint BUSD</b>
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BuyBond;
