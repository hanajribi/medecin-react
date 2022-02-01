
//import useState hook to create menu collapse state
import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
//import {Sidebar} from '../src/Component/Sidebar';
//import  '../src/Component/Sidebar/style.js';
import { Box, Card, CardContent} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import useStyles from "./style.js";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import * as AiIcons from 'react-icons/ai';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Avatar from '@material-ui/core/Avatar';
import {getCountrd} from '../../store/actions/CountRendezvous';
import {useDispatch,useSelector} from 'react-redux';
import Button from '@mui/material/Button';

import {
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";






export default function Accueil(){
    const classes = useStyles();
    const [btn,setBtn]=useState(false);
    const [dateState, setDateState] = useState(new Date());

    const [inactive, setInactive] = useState(false);
    
    //const {countUsers} = useSelector(state => state.countUsers);
    const dispatch = useDispatch();
    const Input = styled('input')({
        display: 'none',
    });

    let history = useHistory();
    function handleClickhome() {
       history.push("/Home");
    };
    useEffect(() => {

        dispatch(getCountrd())
    
      }, "")
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
   
   
  return (
        <Grid container  style={{width:"100vw", height: "100vh", display:"flex", backgroundColor:"#f5f9ff", position:"fixed", }}>
            <div className={inactive ? classes.sidebarActive : classes.sidebarInactive}>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <SidebarHeader onClick={()=> setInactive(!inactive)}>
                        { inactive ? (
                            <AiIcons.AiOutlineClose className={classes.sidebarCloseMenu  }  />
                        ) : (
                            <FaIcons.FaBars  className={classes.sidebarMenu } />
                        )}
                    </SidebarHeader>
                    <SidebarContent className={classes.sidebarContent} onClick={()=> setInactive(!inactive)}>  
                        <img src="/images/logo.png"  alt="sky" className={classes.logoImg}/>
                        <ul >
                            <li className={classes.li}>
                                <a className={classes.menuItem}>
                                    <div className={inactive ? classes.buttonActive: classes.buttonInactive} onClick={handleClickhome}>
                                       <DashboardOutlinedIcon variant="contained"  className={classes.buttonStyle}  />
                                    </div>
                                    <span className={inactive ? classes.spanActive : classes.spanInactive}>Accueil</span>
                                </a>
                            </li>
                            <li className={classes.li}>
                                <a className={classes.menuItem}>
                                    <div className={inactive ? classes.buttonActive : classes.buttonInactive}  onClick={handleClickhome}>
                                       <EventAvailableOutlinedIcon variant="contained"  className={classes.buttonStyle}/>
                                    </div>
                                    <span className={inactive ? classes.spanActive: classes.spanInactive}>Rendez-vous</span>
                                </a>
                            </li>
                            <li className={classes.li}>
                                <a className={classes.menuItem}>
                                    <div className={inactive ? classes.buttonActive: classes.buttonInactive} onClick={handleClickhome} >
                                       <PersonAddOutlinedIcon variant="contained"  className={classes.buttonStyle}/>
                                    </div>
                                    <span className={inactive ? classes.spanActive : classes.spanInactive}>Patiens</span>
                                </a>
                            </li>
                        </ul>
                    </SidebarContent>
                </IconContext.Provider>
            </div>
            <div>
                <IconButton aria-label="show 11 new notifications"  style={{marginRight:"10px", float:"right", right:"45px", top:"30px", position:"absolute", color:"#000"}}>
                    <Badge badgeContent={11} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
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
            <div style={{width:"300px", height:"100px", position:"absolute", marginLeft:"600px", marginTop:"40px"}}>
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
            <div style={{position:"absolute", width:"200px", height:"150px", left:"300px", top:"30px"}}>
                <Typography variant="h4" component="h2" style={{justifyContent:"center", paddingRight:"30px"}}>
                    Accueil
                </Typography>
            </div>
            <div style={{width:"300px", height:"520px",position:"relative", backgroundColor:"#FFF", marginLeft:"300px", marginTop:"110px", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>
                    <div className={classes.avatardiv}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 150, height: 150 , ml:8, mt:5 }}
                            />
                    </div>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span" style={{width: '50%',left:70, top:20, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>
                            Upload image
                        </Button>
                    </label>
                    <div className={classes.infodtaildiv}>
                        <Typography variant="h7" gutterBottom color="gray">
                                    Email :
                        </Typography>
                        <Typography variant="h7" gutterBottom color="gray">
                                    Nom et prenom :
                        </Typography>
                        <Typography variant="h7" gutterBottom color="gray">
                                    Sexe :
                        </Typography>
                        <Typography variant="h7" gutterBottom color="gray">
                                    Date de naissance :
                        </Typography>
                        <Typography variant="h7" gutterBottom color="gray">
                                    Numéro du télephone :
                        </Typography>
                        <Button  style={{width: '50%',left:60, top:60, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Edit profile</Button>
                    </div>
            </div>
            <div style={{width:"200px", height:"120px",position:"relative", backgroundColor:"#FFF", marginLeft:"50px", marginTop:"110px", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>
                <Grid item>
                    <Typography variant="h7" component="h7" style={{justifyContent:"center", marginLeft:50}}>
                         Total patient
                    </Typography>
                  
            
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                        backgroundColor: "#1F95EE",
                        height: 80,
                        width: 80, 
                        ml:7,
                        mt:2
                        }}
                    >
                        <MapsUgcIcon 
                            sx={{
                                backgroundColor: "#1F95EE",
                                height: 60,
                                width: 60
                                }}
                        />
                    </Avatar>
                </Grid>
            </div>
            <div style={{width:"200px", height:"120px",position:"relative", backgroundColor:"#FFF", marginLeft:"25px", marginTop:"110px", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>

            </div>
            <div style={{width:"200px", height:"120px",position:"relative", backgroundColor:"#FFF", marginLeft:"25px", marginTop:"110px", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>
                 <img src="/images/illustration 1.png" alt="doc" style={{height:"150px",bottom:"150px", right:"-40px", top:"-25px", position:"absolute"}}/>
            </div>
            <div style={{width:"650px", height:"380px", position:"absolute",  backgroundColor:"#FFF", marginLeft:"650px", marginTop:"250px", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"60px 0px"}}>
                 <Typography variant="h6" component="h6" style={{position:"absolute", top:"20px", left:"50px"}}>
                     Les actualités
                 </Typography>
                 <div style={{width:"100%", height:"100px", display:"flex", flex:1, position:"absolute", flexDirection:"row", justifyContent:"center", marginTop:"20px", marginBottom:"30px"}}> 
        
                 </div>
                 <div  className= {classes.firstdiv}>
                     <div className= {classes.seconddiv }>  
                            ghhhhhhhhhhff
                     </div>
                 </div>
            </div>
        </Grid>
  )
}
