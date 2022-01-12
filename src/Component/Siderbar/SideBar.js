import React, { useState,useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../asset/logo.png";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import "./SiderBar.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FaDiscord } from "react-icons/fa";
import Deshboard from "../Deshboard/Deshboard";
import StakeNMS from "../Stake NMS/StakeNMS";
import BuyBond from "../Buy Bond/BuyBond";
import { Link, Switch, Route } from "react-router-dom";
// import BondPopup from "../../BondPopup";
// import MyVerticallyCenteredModal from "../../BondPopup";
import BondPopup from "../Buy Bond/BondPopup";
import BondPopupOne from "../Buy Bond/BondPopupOne";
import {loadAccountAddress} from '../../utills/connect'
const drawerWidth = 265;
let acc;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [show, setShow] = useState(false);
  const [showone, setshowone] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
 
  const [showAdd, setShowAdd]= useState();
const [isConn, setIsConn]=useState()
  const getAccount=async()=>{
     acc= await loadAccountAddress()
    
    
    setIsConn(acc? "Connect" : "Wrong Network")
    let showAcc=acc? acc.substring(0, 6) + "..." + acc.substring(acc.length - 6)
    :<Skeleton
    sx={{ bgcolor: 'grey.900' }}
    variant="rectangular"
    width={180}
  />;
    setShowAdd(showAcc);
  }

useEffect(()=>{
  setInterval(() => {
    
    getAccount();
  }, 1000);
})
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="stakenmsColor1" style={{ color: "white" }}>
      <Toolbar style={{ marginTop: "30px", marginLeft: "0px" }}>
        <img src="fusion logo.png" width="170px" />
      </Toolbar>
      <br />
      <div className="" style={{ marginLeft: "30px" }} >
     
       {showAdd}
        
    
      </div>

      
      <List>
        <Link to="/" className="linkid">
          <ListItem button href="#deshborad" key="Dashboard">
            <ListItemIcon>
              <TuneIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <br />
        <Link to="/StakeNMS" className="linkid">
          <ListItem button key="Stake Fusion">
            <ListItemIcon>
              <ArticleOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Stake Fusion" />
          </ListItem>
        </Link>
        <br />
        <Link to="/BuyBond" className="linkid">
          <ListItem button key="Buy Bond">
            <ListItemIcon>
              <SettingsIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Buy Bond" />
          </ListItem>
        </Link>
        <div>
          <span className="text">with bonus yields</span>
        </div>

        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <span onClick={() => setShow(true)}>
            {/* <Link to="/BondPopup"> */}
            &emsp;&emsp;&emsp; Fusion-BUSDLP &emsp; 28.50%
            {/* </Link> */}
          </span>
        </div>
        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <span onClick={() => setshowone(true)}>
            &emsp;&emsp;&emsp; BUSD &emsp;&emsp;&emsp;&emsp;&emsp; 25.78%
          </span>
        </div>
        <br />
        <br />

        <ListItem button key="Buy Fusion">
          <ListItemIcon>
            <AttachMoneyIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Buy Fusion" />
        </ListItem>
      </List>
      <br />
      <div className="icons">
        <a href="">
          <GitHubIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <TwitterIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <TelegramIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <FaDiscord style={{ color: "white" }} size={24} />
        </a>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "rgb(30,35,43)", height: "100px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: "white", display: "flex" }}>
            <div className="topconnectbtn">
            <div className="container dropdownmenu">
              <div class="dropdown">
                <button class="dropbtn">Fusion</button>
                <div class="dropdown-content">
                  <a href="#">Fusion</a>
                  <a href="#">ZFusion</a>
                </div>
              </div>
              <div>
                <button className="btn btn-secondary mx-3 p-2">
                  <b style={{color : acc? "#fff" : "red"}} >{isConn}</b>
                </button>
              </div>
            </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ backgroundColor: "rgb(23,25,27)" }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          {/* <Deshboard /> */}
          <Route exact path="/" component={Deshboard} />
          <Route exact path="/StakeNMS" component={StakeNMS} />
          <Route path="/BuyBond">
            <BuyBond setShow={setShow} setshowone={setshowone} />
          </Route>
          {/* <Route exact path="/BuyBond" render={()=>{
            return <BuyBond/>
          }} /> */}
          {/* <Route exact path="/BondPopup" component={BondPopup} /> */}
        </Switch>
        <BondPopup show={show} setShow={setShow} />
        <BondPopupOne showone={showone} setshowone={setshowone} />
        {/* <Deshboard /> */}
        {/* <StakeNMS /> */}
        {/* <BuyBond /> */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
