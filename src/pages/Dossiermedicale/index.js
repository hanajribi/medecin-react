import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from "./style.js";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useHistory } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { useSelector } from 'react-redux';




export default function Dossiermedicale(){
  const classes = useStyles();
  const [btn,setBtn]=useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [inactive, setInactive] = useState(false);
  const {user}  = useSelector(state => state.auth)

  let history = useHistory();
  function handleClickhome() {
     history.push("/Home");
  };
 /* function handleSideBarChange(step) {
    setstep(step)
  };*/
   
  return (
    <Grid container  className={classes.divContainer} >  
        <div className={inactive ? classes.sidebarActive : classes.sidebarInactive}>
            <IconContext.Provider value={{ color: '#fff' }}>
              <SidebarHeader onClick={()=> setInactive(!inactive)}>
                  { inactive ? (
                    <AiIcons.AiOutlineClose className={classes.sidebarCloseMenu}  />
                  ) : (
                    <FaIcons.FaBars  className={classes.sidebarMenu } />
                  )}
              </SidebarHeader>
              <SidebarContent onClick={()=> setInactive(!inactive)}>  
                <img src="/images/logo.png"  alt="sky"  className={inactive ?  classes.logoImgInactive : classes.logoImgActive} />
                <ul >
                  <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive} onClick={handleClickhome}>
                           <DashboardOutlinedIcon variant="outlined" />
                      </div>
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Accueil</span>
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive}  onClick={handleClickhome}>
                         <EventAvailableOutlinedIcon variant="outlined" />
                      </div>
                      <span className={inactive ? classes.spanActive: classes.spanInactive}>Rendez-vous</span>
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive} onClick={handleClickhome} >
                         <PersonAddOutlinedIcon variant="outlined"   />
                      </div>
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Patiens</span>
                    </a>
                  </li>
                </ul>
              </SidebarContent>
            </IconContext.Provider>
        </div>

        <div style={{position:"absolute", width:"200px", height:"150px", left:"200px", top:"30px"}}>
            <Typography variant="h4" component="h2">
                Patients
            </Typography>
        </div>
        <div style={{width:"300px", height:"100px", position:"absolute", marginLeft:"500px", marginTop:"40px"}}>
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
                    inputProps={{ 'aria-label': 'Recherche' }}
                />
            </div>
        </div>
        <div className= {classes.app}>
            <img src="/images/calendar.svg" alt="calendar" className= {classes.svg}/>
            <p className= {classes.p}>
            {' '}
            {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}
            </p>
            <img src="/images/clock.svg" alt="clock" className= {classes.svg}/>
            <p className= {classes.p}>
            {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
        <div>
            <IconButton aria-label="show 11 new notifications"  style={{marginRight:"10px", float:"right", right:"45px", top:"30px", position:"absolute", color:"#000"}}>
                <Badge badgeContent={11} color="primary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </div>
        <div className={classes.patientdiv}>
            <div className={classes.infodiv}>
                <div className={classes.avatardiv}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 150, height: 150 }}
                    />
                </div>
                <div className={classes.typographydiv}>
                  <ul>
                      <li>
                          <Typography variant="h6" component="h6">
                            {user?.user?.nom}
                          </Typography>
                      </li>
                      <li>
                          <Typography variant="h7" component="h7">
                            {user?.user?.prenom}
                          </Typography>
                      </li>
                      <li>
                          <Typography variant="h7" component="h7">
                              Male
                          </Typography>
                      </li>
                  </ul>
                    <Link href="#" underline="none" color="primary">Historique des <br/> rendez-vous <DoubleArrowIcon style={{marginBottom:" -5px"}}/></Link>
                </div>
            </div>
            <div className={classes.infodtaildiv}>
                <img src="/images/illustration 1.png" alt="doc2" style={{height:"250px", top:-70, left:"110px", position:"absolute"}}/>
            </div>
            <div style={{position:"absolute",
                        width:"85%", 
                        height:280,
                        bottom:30, 
                        left:80,
                        display:"flex",
                        flex:1,
                        flexDirection:"row",
                        justfyContent:"center",
                        display: 'inline-block',
                        boxShadow: "0px 5px 15px #9E9E9E",
                        borderRadius:"30px",
                        justifyContent:"center"}}>

                  <div style={{position:"absolute",display:"flex",flex:1,flexDirection:"column", width:"50%", height:"100%"}}>
                      <Typography variant="h6" gutterBottom color="black" style={{marginLeft:50, marginTop:50, marginBottom:30}}>
                                  Poids :
                      </Typography>
                      <Typography variant="h6" gutterBottom color="black" style={{marginLeft:50, marginBottom:30}}>
                                  Taille :
                      </Typography>
                      <Typography variant="h6" gutterBottom color="black" style={{marginLeft:50}}>
                                  Type de sang :
                      </Typography>
                  </div>
                  <div style={{position:"absolute",display:"flex",flex:1,flexDirection:"column", width:"50%", height:"100%", left:500}}>
                      <Typography variant="h6" gutterBottom color="black" style={{ marginTop:50, marginBottom:30}}>
                                  Allergie :
                      </Typography>
                      <Typography variant="h6" gutterBottom color="black" style={{marginBottom:30}}>
                                  Maladie Chronique :
                      </Typography>
                      <Typography variant="h6" gutterBottom color="black">
                                  Dernier Rendez-vous :
                      </Typography>
                  </div>
            </div>
        </div>
    </Grid>

  )
}