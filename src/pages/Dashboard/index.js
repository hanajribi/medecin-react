//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
//import {Sidebar} from '../src/Component/Sidebar';
//import  '../src/Component/Sidebar/style.js';
import { Box, Card, CardContent } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PropTypes from "prop-types";
import useStyles from "./style.js";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import * as AiIcons from "react-icons/ai";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import Avatar from "@material-ui/core/Avatar";
//import {getCountrd} from '../../store/actions/CountRendezvous';
import {
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getRendezvous } from "../../store/actions/ListRendezvous";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPatients from "../ListPatients";
import ListRendezvous from "../ListRendezvous";
import Stat from "./stat";

export default function Dashboard() {
  const classes = useStyles();
  const [btn, setBtn] = useState(false);
  const [dateState, setDateState] = useState(new Date());

  const [inactive, setInactive] = useState(false);

  // const {countUsers} = useSelector(state => state.countUsers);
  const { rendezvous } = useSelector((state) => state.rendezvous);
  const dispatch = useDispatch();

  let history = useHistory();
  function handleClickhome() {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getRendezvous());
  }, []);
  Dashboard.propTypes = {
    rendezvous: PropTypes.array.isRequired,
  };

  // useEffect(() => {

  //     dispatch(getCountrd())

  //   }, "")
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div
      container
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundColor: "#f5f9ff",
        position: "fixed",
      }}
    >
      <div
        className={inactive ? classes.sidebarActive : classes.sidebarInactive}
      >
        <IconContext.Provider value={{ color: "#fff" }}>
          <SidebarHeader onClick={() => setInactive(!inactive)}>
            {inactive ? (
              <AiIcons.AiOutlineClose className={classes.sidebarCloseMenu} />
            ) : (
              <FaIcons.FaBars className={classes.sidebarMenu} />
            )}
          </SidebarHeader>
          <SidebarContent
            className={classes.sidebarContent}
          >
            <img src="/images/logo.png" alt="sky" className={classes.logoImg} />
            <ul>
              <li className={classes.li}>
                <a className={classes.menuItem}>
                  <div
                    className={
                      inactive ? classes.buttonActive : classes.buttonInactive
                    }
                    onClick={() => history.push("/dashboard")}
                  >
                    <DashboardOutlinedIcon
                      variant="contained"
                      className={classes.buttonStyle}
                    />
                  </div>
                  <span
                    className={
                      inactive ? classes.spanActive : classes.spanInactive
                    }
                  >
                    Accueil
                  </span>
                </a>
              </li>
              <li className={classes.li}>
                <a className={classes.menuItem}>
                  <div
                    className={
                      inactive ? classes.buttonActive : classes.buttonInactive
                    }
                    onClick={() => history.push("/listRendezvous")}
                  >
                    <EventAvailableOutlinedIcon
                      variant="contained"
                      className={classes.buttonStyle}
                    />
                  </div>
                  <span
                    className={
                      inactive ? classes.spanActive : classes.spanInactive
                    }
                  >
                    Rendez-vous
                  </span>
                </a>
              </li>
              <li className={classes.li}>
                <a className={classes.menuItem}>
                  <div
                    className={
                      inactive ? classes.buttonActive : classes.buttonInactive
                    }
                    onClick={() => history.push("/listpatients")}
                  >
                    <PersonAddOutlinedIcon
                      variant="contained"
                      className={classes.buttonStyle}
                    />
                  </div>
                  <span
                    className={
                      inactive ? classes.spanActive : classes.spanInactive
                    }
                  >
                    Patients
                  </span>
                </a>
              </li>
              <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive} onClick={()=>history.push("/listdossier")} >
                         <FolderOpenOutlinedIcon variant="outlined"   />
                      </div>
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Dossier medical</span>
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive} onClick={()=>history.push("/listActualite")} >
                         <ArchiveOutlinedIcon variant="outlined"   />
                      </div>
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Actualité</span>
                    </a>
                  </li>
            </ul>
          </SidebarContent>
        </IconContext.Provider>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <div style={{ width: "100%", height: "10%", display: "flex" }}>
          <div>
            <IconButton
              aria-label="show 11 new notifications"
              style={{
                marginRight: "10px",
                float: "right",
                right: "45px",
                top: "30px",
                position: "absolute",
                color: "#000",
              }}
            >
              <Badge badgeContent={11} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.app}>
            <img
              src="/images/calendar.svg"
              alt="calendar"
              className={classes.svg}
            />
            <p className={classes.p}>
              {" "}
              {dateState.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <img src="/images/clock.svg" alt="clock" className={classes.svg} />
            <p className={classes.p}>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
          <div
            style={{
              width: "300px",
              height: "100px",
              position: "absolute",
              marginLeft: "600px",
              marginTop: "40px",
            }}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Recherche…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "Recherche" }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "150px",
              left: "300px",
              top: "30px",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              style={{ justifyContent: "center", paddingRight: "30px" }}
            >
              Accueil
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
        
            <Switch>
              {/* <Route path="/listpatients" exact component={ListPatients} />
              <Route path="/listRendezvous" exact  component={ListRendezvous} /> */}
              <Route path="/" component={Stat} />
            </Switch>
         
        </div>
      </div>
    </div>
  );
}
