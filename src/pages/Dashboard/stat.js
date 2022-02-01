
//import useState hook to create menu collapse state
import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PropTypes from 'prop-types';
import useStyles from "./style.js";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import * as AiIcons from 'react-icons/ai';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Avatar from '@material-ui/core/Avatar';
//import {getCountrd} from '../../store/actions/CountRendezvous';
import {
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {useDispatch,useSelector} from 'react-redux';
import {getRendezvous } from '../../store/actions/ListRendezvous';

export default function Stat() {
    const classes = useStyles();
    const {rendezvous} = useSelector(state => state.rendezvous)
    return (
        <>
        <div style={{width:"300px", height:"520px", backgroundColor:"#FFF", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>
                <Typography variant="h5" component="h2">
                     Statistiques
                </Typography>
            </div>
            <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                <div style={{width:"100%",height:"30%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>



                <div style={{width:"30%", height:"70%",padding:10, backgroundColor:"#FFF",boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>
                <Grid item>
                    <Typography
                        color="textSecondary"
                        variant="overline"
                    >
                        Total patient
                    </Typography>
            
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                        backgroundColor: "#1F95EE",
                        height: 100,
                        width: 100
                        }}
                    >
                        <MapsUgcIcon 
                            sx={{
                                backgroundColor: "#1F95EE",
                                height: 80,
                                width: 80
                                }}
                        />
                    </Avatar>
                </Grid>
            </div>


            <div style={{width:"30%", height:"70%",padding:10, backgroundColor:"#FFF", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>
            
</div>

   <div style={{width:"30%", height:"70%",padding:10, backgroundColor:"#FFF", boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"30px"}}>

   <img src="/images/illustration 1.png" alt="doc" style={{height:"150px",right:"0%", top:"10%", position:"absolute"}}/>
</div>



                </div>
                <div style={{display:"flex",flex:1,padding:5}}>



                <div style={{flex:1, width:"90%", display:"flex", backgroundColor:"#FFF",   boxShadow: "0px 5px 15px #9E9E9E", borderRadius:"60px 0px",flexDirection:"column"}}>
                 <Typography variant="h6" component="h6">
                     Les rendez-vous récents
                 </Typography>
                 <div style={{width:"100%",height:40, display:"flex",flexDirection:"row", justifyContent:"space-evenly", marginTop:"20px", marginBottom:"30px"}}> 
                     <h5 >Patient</h5>  
                     <h5>Type</h5>  
                     <h5 >Date</h5>  
                     <h5 >Heure</h5> 
                     <h5 >Statut</h5> 
                 </div>
                 <div  className= {classes.firstdiv}>
                     <div className= {classes.seconddiv }>      
                        
                        {rendezvous?.map((item,index)=>(
                            <ListItem style={{ bgcolor: 'background.paper' ,borderRadius:"20px",boxShadow: "0px 5px 15px #9E9E9E", marginBottom:20}} >
                            <ListItemAvatar>
                                    <Avatar primary={`${item?.patient?.profile_image}`} style={{width:"50px", height:"50px"}}/>
                            </ListItemAvatar>
                            <ListItemText sx={{ ml:"5px"}}>
                                    <Typography>{`${item?.patient?.nom}`}  </Typography>
                                    <Typography>{`${item?.patient?.prenom}`}</Typography> 
                            </ListItemText>
                            <ListItemText primary={`${item?.type}`} sx={{my:"15px", ml:"-5px"}} />
                            <ListItemText primary={`${item?.date_rendezvous}`}  sx={{my:"15px", ml:"15px"}} />
                            <ListItemText primary={`${item?.heure_rendezvous }`}  sx={{mr:"10px"}} />
                            <ListItemText primary={`${item?.statut}`} sx={{my:"15px",ml:"-20px"}} />
                            </ListItem>
                        ))  }
                     
          
                     </div>
                 </div>
            </div>



                </div>

            </div>
            {/* 
   

           */}
            </>
    )
}
