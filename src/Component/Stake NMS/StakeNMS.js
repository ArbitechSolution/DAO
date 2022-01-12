import React, { useState, useRef } from "react";
import "./StakeNMS.css";
import Button from "@mui/material/Button";
import { InputGroup, FormControl } from "react-bootstrap";
import {loadAccountAddress} from '../../utills/connect'
import {StakingHelperAddress,StakingHelperAbi} from '../../utills/contracts/StakingHelper.js'
import {NemesisERC20TokenAddress, NemesisERC20TokenAbi} from "../../utills/contracts/NemesisERC20Token"
import {sNMSAddress,sNMSAbi} from '../../utills/contracts/contractSNMS'
import {NemesisStakingAddress,NemesisStakingAbi} from '../../utills/contracts/NemesisStaking'
import Web3 from 'web3';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');


//  console.log(tokenContractOf().methods);
function StakeNMS() {
  const [textColor, setTextColor] = useState(true);
  const [stakeChange, setStakeChange]=useState("stake");
  let stakeValue=useRef();
  const stakeAmount= async(e)=>{
    e.preventDefault();
    let acc= await loadAccountAddress();
    console.log("Entered Into Function");
    let value= stakeValue.current.value;
          let multiVal= 1000000000;
          value= value*multiVal;
    const web3= window.web3;
    if(stakeChange=="stake"){
      try{
        let   NemesisERC20TokenContract = new web3.eth.Contract(NemesisERC20TokenAbi, NemesisERC20TokenAddress);
        let stakingHelperContract= new web3.eth.Contract(StakingHelperAbi,StakingHelperAddress);
        await NemesisERC20TokenContract.methods.approve(StakingHelperAddress,value).send({from: acc})
        toast.success("approved successed")
        stakeValue.current.value=""
          await stakingHelperContract.methods.stake(value).send({from: acc});
          toast.success("stake successed")
  
      }catch(e){
        stakeValue.current.value="";
        toast.error(" stake transation rejected")
        console.log("error while aprove and stake amount",e);
      }
    }else{
try{
   let sNmsContract=new web3.eth.Contract(sNMSAbi, sNMSAddress);
   let NemesisStakingContract= new web3.eth.Contract(NemesisStakingAbi ,NemesisStakingAddress)
      await sNmsContract.methods.approve(NemesisStakingAddress, value).send({from:acc});   
      stakeValue.current.value=""
      toast.success("approved successed")
      await NemesisStakingContract.methods.unstake(value, true).send({from:acc});
      toast.success("UnStake successed")
  }catch(e){
    stakeValue.current.value="";
    toast.error("UnStake rejected")
  console.log("error while unstaking approve and amount", e);
}
    }
   
  } 
  return (
    <div className="stakeNMSColor">
    <div className="container container2">
      <div 
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-10 boxes11 ">
          <div className="row">
            <div className="col-md-5">
              <h5 className="idea text-start">Single Stake (3,3)</h5>
              <p className="nmsspan">Around 7 Hours, 47 Mins to Next Rebase</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <h4 className="nmsidea">APY</h4>
              <p className="nmsspan1">97,193,577,570.2%</p>
            </div>
            <div className="col-md-4 mt-4">
              <h4 className="nmsidea">TVL</h4>
              <p className="nmsspan1">$16,081,514</p>
            </div>
            <div className="col-md-4 mt-4">
              <h4 className="nmsidea">Current Index</h4>
              <p className="nmsspan1">2.43 Fusion</p>
            </div>
          </div>
          <div className="row buttoncol4">
            <div
              className="col-4"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                paddingTop: "20px",
              }}
            >
              <Button
                size="large"
                
                onClick={() => {
                setTextColor(true)
                  setStakeChange("stake")
                  // setTextColor(textColor === "darkgray" ? "white" : "darkgray");
                }}
                style={{ color: "darkgray",  border: textColor? "darkgray 2px solid" : "none" }}
              >
                Stake
              </Button>
              <Button size="large" style={{ color: "darkgray", border: textColor? "none" : "darkgray 2px solid" }}
              onClick={()=>{
                setTextColor(false)
                setStakeChange("unStake")

              }}
              >
                Unstake
              </Button>
            </div>
          </div>
          <br/>

          <form onSubmit={stakeAmount}>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: "100%",
            }}
          >
            <div className="col-md-8">
              <InputGroup className="mb-3">
                <FormControl
                  style={{backgroundColor: "rgb(108,117,125)", color: "#ffffff", boxShadow:"none", border:"none"}}
                  className="formcontrol"
                  placeholder="0.0"
                  type="Number"
                  min="1"
                  required
                  ref={stakeValue}
                />
                <button className="btn btn-secondary" id="button-addon2">
                  MAX
                </button>
              </InputGroup>
            </div>
            <div className="col-md-3">
                {/* <br/> */}
              <div className="d-grid gap-2">
                <button className="btn btn-secondary" id="btn44"
                type="submit"
                >
                  <b>Approve</b>
                </button>
              </div>
            </div>
            <div className="col-md-10">
              <p
                style={{
                  color: "darkgray",
                  lineHeight: "130%",
                  fontSize: "14px",
                }}
              >
                Note: The "Approve" transaction is only needed when {stakeChange} for
                 the first time, subsequent {stakeChange} onlyrequires you to perform the "{stakeChange}" or
                "{stakeChange}" transaction.
              </p>
            </div>
          </div>
          </form>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Your Balance</p>
              <p>0 Fusion</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Your Staked Balance</p>
              <p>0 ZFusion</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Next Reward Amount</p>
              <p>0 ZFusion</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Next Reward Yield</p>
              <p>1.8966%</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>ROI (5-Day Rate)</p>
              <p>32.5562%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StakeNMS;
