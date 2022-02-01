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
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Link from '@mui/material/Link';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListItemIcon from '@mui/material/ListItemIcon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable'; 
import TextField from '@mui/material/TextField';
import ReactPhoneInput from 'react-phone-input-material-ui';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import {useDispatch,useSelector} from 'react-redux';
import {getActualite} from '../../store/actions/ListActualite';
import {ajoutActualite} from '../../store/actions/AjoutAction';
import {editActualite} from '../../store/actions/EditAction';
import {deleteActualite } from '../../store/actions/DeleteAction';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}




export default function ListActualite(props){

  const classes = useStyles();
  const [btn,setBtn]=useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [inactive, setInactive] = useState(false);
  const [step, setStep] = useState(0);
  const [gender,setGender]=useState(1);
  const [age, setAge] = React.useState('');
  const [selectedDate, handleDateChange] = useState(new Date());
  const [value, setValue] = React.useState(new Date());


  const [titre, setTitre] = useState("");
  const [date_action, setDate_action] = useState("");
  const [heure_action, setHeure_action] = useState("");
  const [description_action, setDescription_action] = useState("");
  const [image_action, setImage_action] = useState("");
  //const [medecin, setMedecin] = useState("");
  const [actualitetoEdit, setActualitetoEdit] = useState();
  
  const {actualites} = useSelector(state => state.actualites)
  const {loading,error} = useSelector(state => state.ajouter)

  let history = useHistory();
  const dispatch = useDispatch()
  function handleClickhome() {
     history.push("/Home");
  };

  useEffect(() => {

    dispatch(getActualite())

  }, [])
  ListActualite.propTypes = {
    actualites: PropTypes.array.isRequired
  };
   
  
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  //componentDidMount() {
 //     this.props.getPatients
 // }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const savedata = () => {
    setStep();
    dispatch(editActualite(actualitetoEdit,actualitetoEdit?.id))
  };
  const [openedit, setOpenedit] = React.useState(false);
  const [openedelete, setOpenedelete] = React.useState(false);

  const handleClickOpenEdit = (item) => {
    setOpenedit(true);
    setActualitetoEdit(item);
  };

  const handleCloseEdit = () => {
    setOpenedit(false);
  };


  const handleClickOpenDelete = (item) => {
    setOpenedelete(true);
    setActualitetoEdit(item);
  };

  const handleCloseDelete = () => {
    setOpenedelete(false);
  };

  function handleChange(input,value) {
    setActualitetoEdit({...actualitetoEdit,[input]: value})
  };
  const handleAjout = () => {
  
   dispatch(ajoutActualite(titre, date_action, heure_action, description_action, image_action, 6))
   };
  const handleDelete = () => {
    dispatch(deleteActualite(actualitetoEdit.id))
  };

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
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive} onClick={()=>history.push("/dashboard")}>
                           <DashboardOutlinedIcon variant="outlined" />
                      </div>
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Accueil</span>
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive}  onClick={()=>history.push("/listRendezvous")}>
                         <EventAvailableOutlinedIcon variant="outlined" />
                      </div>
                      <span className={inactive ? classes.spanActive: classes.spanInactive}>Rendez-vous</span>
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.menuItem}>
                      <div className={inactive ? classes.buttonInactive : classes.buttonActive} onClick={()=>history.push("/listpatients")} >
                         <PersonAddOutlinedIcon variant="outlined"   />
                      </div>
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Patients</span>
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

        <div style={{position:"absolute", width:"200px", height:"150px", left:"200px", top:"30px"}}>
            <Typography variant="h4" component="h2">
                Actualités
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
           <div style={{position:"absolute", marginTop:"23px", marginLeft:"900px", width:"100px"}}>
              <Box sx={{ minWidth: 130, borderColor: 'primary.main'}} variant="outlined" style={{borderColor:"#1F95EE", borderRadius:"30px"}}>
                  <FormControl fullWidth  variant="outlined" style={{borderColor:"#1F95EE", borderRadius:"30px"}}>
                    <InputLabel id="demo-simple-select-label" style={{color: "#1F95EE"}}>Filters</InputLabel>
                    <Select
                      variant="outlined" 
                      sx={{ borderColor: 'primary.main' }}
                      style={{borderColor:"#1F95EE", borderRadius:"30px"}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Filters"
                      labelWidth={80}
                      onChange={handleChange}
                    > 
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
              </Box>
                    
            </div>
            <div style={{position:"absolute", width:"300px", marginTop:"20px", marginLeft:"80px"}}>
                <Typography  variant="outlined" variant="h6" gutterBottom component="div" ><u>Historique des actualités</u></Typography>
            </div>
            <div style={{marginLeft:"700px", width:"250px", marginTop:"8px"}}>
               <Button variant="outlined" onClick={handleClickOpen} sx={{ m: "15px", minWidth: 140, minHeight:55}} style={{textTransform:"capitalize", color:"#1F95EE", borderRadius:"30px"}}>
                  Ajouter une actualité
               </Button>
            </div>
            {step ===0 && (
               <Dialog
                  variant="outlined"
                  sx={{ borderRadius: 16 }}
                  PaperProps={{ sx: {maxWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                  style={{ borderRadius:"30px",height : '400px'}}
                  open={open}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
               >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                      Ajouter une actualité
                  </DialogTitle>
                  <DialogContent >
                    <Box
                      component="form"
                      sx={{
                        m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                      }}
                      
                    >
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold", fontSize:15, marginBottom:10}}  >Titre de l'actualité :</Typography>
                        <TextField 
                            id="outlined-basic" 
                            label="Titre" 
                            variant="outlined"
                            className={classes.root } 
                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                            style={{marginBottom:10}}
                            sx={{ width: 380, top:10  }}
                            value={titre}
                            onChange={(event) => setTitre(event.target.value)}
                        />
                            
                       
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:10}}  >Sujet de l'actualité :</Typography>
                        <TextField multiline rows={5} value={description_action} onChange={(event) => setDescription_action(event.target.value)} label="Sujet" sx={{ width: 380}} variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginTop:"10px"}} />
                       
                    </Box>
                
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setStep(step+1)} style={{width: '30%',right:150, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Continuer</Button>
                  </DialogActions>
               </Dialog>
              )} {step ===1 && (
                <Dialog
                  variant="outlined"
                  sx={{ borderRadius: 16 }}
                  PaperProps={{ sx: {maxWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                  style={{ borderRadius:"30px",height : '400px'}}
                  open={open}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
               >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                       Ajouter une actualité
                  </DialogTitle>
                  <DialogContent >
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                      }}
                      
                    >
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:10}}  >Sélectionner une date :</Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns}style={{ marginTop:15}}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                              minDate={new Date('2017-01-01')}
                              className={classes.root } 
                              style={{borderColor:"#1F95EE"}}
                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                              renderInput={(params) => <TextField {...params} />}
                              value={date_action}
                              onChange={(value) => setDate_action(value)}
                          />
                        </Stack>
                      </LocalizationProvider>
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15, marginBottom:15}}  >Sélectionner un horaire :</Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop:15}}>
                        <Stack spacing={3}>
                            <DesktopTimePicker
                              className={classes.root } 
                              style={{borderColor:"#1F95EE"}}
                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                              renderInput={(params) => <TextField {...params} style={{borderColor:"#1F95EE"}} />}
                              value={heure_action}
                              onChange={(value) => setHeure_action(value)}
                            />
                        </Stack>
                      </LocalizationProvider>
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Sélectionner une image :</Typography>
                        <TextField 
                            id="outlined-basic" 
                            type="file"
                            variant="outlined"
                            className={classes.root } 
                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                            sx={{ width: 280, top:10  }}
                            value={image_action}
                            onChange={(event) => setImage_action(event.target.value)}
                        />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => handleAjout()} style={{width: '30%',left:120, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Ajouter</Button>
                    <Button onClick={() => setStep(step-1)} style={{width: '30%',right:300, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                  </DialogActions>
               </Dialog>
              )}
            <div style={{ width:"1000px", height:"50px", marginLeft:"100px", display:"flex",  flex: 1, flexDirection: "row", marginBottom:"50px"}}>
                <div style={{marginLeft:"60px",marginTop:"10px",  width:"150px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Nom de l'actualité</Typography>
                </div>
                <div style={{marginLeft:"50px",marginTop:"10px",  width:"150px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{ textAlign:"center" }} >Sujet de l'actualité</Typography>
                </div>
                <div style={{marginLeft:"70px",marginTop:"10px",  width:"150px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Date de la publication</Typography>
                </div>
                <div style={{marginLeft:"50px",marginTop:"10px",  width:"150px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Heure de la publication</Typography>
                </div>
                <div style={{marginLeft:"40px", marginRight:"50px",marginTop:"10px",  width:"150px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{  textAlign:"center" }} >Détails</Typography>
                </div>
            
               
            </div>
            <div className={classes.listdiv}>
                <List variant="outlined" sx={{ position:"absolute",width: '950px', marginLeft:'30px', marginRight:'30px'}}>
                  {actualites?.map((item,index)=>(
                    <ListItem style={{ bgcolor: 'background.paper' ,borderRadius:"20px",boxShadow: "0px 5px 15px #9E9E9E", marginBottom:20}} >
                      <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:"50px", height:"50px"}}/>
                      </ListItemAvatar>
                      <ListItemText primary={`${item?.titre}`} sx={{mx:"10px"}} />
                      <ListItemText primary={`${item?.description_action}`} sx={{my:"15px", mx:"-10px"}} />
                      <ListItemText primary={`${item?.date_action }`} sx={{my:"15px"}} />
                      <ListItemText primary={`${item?.heure_action }`} sx={{my:"15px", mx:"-10px"}} />
                      <ListItemIcon sx={{my:"10px", mx:"-5px"}}>
                           <img src="/images/profile.png" alt="profile" style={{width:"50px", height:"50px"}}/>
                      </ListItemIcon>
                      <Box style={{ display:"flex",  flex: 1, flexDirection: "column"}} sx={{ ml:"10px"}}>
                          <ListItemIcon sx={{my:"10px", mx:"-5px"}}>
                              <Button variant="outlined" onClick={() => handleClickOpenEdit(item)} style={{borderRadius:"50%"}} >
                                  <ModeEditIcon color="primary" style={{width:"20px", height:"20px", borderRadius:"50%"}}/>
                              </Button>
                              {step ===0 && (
                                <Dialog
                                    variant="outlined"
                                    sx={{ borderRadius: 16 }}
                                    PaperProps={{ sx: {maxWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                                    style={{ borderRadius:"30px",height : '400px'}}
                                    open={open}
                                    onClose={handleClose}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                >
                                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                        Modifier une actualité
                                    </DialogTitle>
                                    <DialogContent >
                                      <Box
                                        component="form"
                                        sx={{
                                          m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                                        }}
                                        
                                      >
                                          <Typography variant="h6" component="h6"style={{ fontWeight:"bold", fontSize:15, marginBottom:10}}  >Titre de l'actualité :</Typography>
                                          <TextField 
                                              id="outlined-basic" 
                                              label="Titre" 
                                              variant="outlined"
                                              className={classes.root } 
                                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                              style={{marginBottom:10}}
                                              sx={{ width: 380, top:10  }}
                                              value={titre}
                                              onChange={(event) => setTitre(event.target.value)}
                                          />
                                              
                                        
                                          <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:10}}  >Sujet de l'actualité :</Typography>
                                          <TextField multiline rows={5} value={description_action} onChange={(event) => setDescription_action(event.target.value)} label="Sujet" sx={{ width: 380}} variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginTop:"10px"}} />
                                        
                                      </Box>
                                  
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={() => setStep(step+1)} style={{width: '30%',right:150, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Continuer</Button>
                                    </DialogActions>
                                  </Dialog>
                                  )} {step ===1 && (
                                  <Dialog
                                    variant="outlined"
                                    sx={{ borderRadius: 16 }}
                                    PaperProps={{ sx: {maxWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                                    style={{ borderRadius:"30px",height : '400px'}}
                                    open={open}
                                    onClose={handleClose}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                    >
                                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                        Modifier une actualité
                                    </DialogTitle>
                                    <DialogContent >
                                      <Box
                                        component="form"
                                        sx={{
                                          '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                                        }}
                                        
                                      >
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:10}}  >Sélectionner une date :</Typography>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}style={{ marginTop:15}}>
                                          <Stack spacing={3}>
                                            <DesktopDatePicker
                                                minDate={new Date('2017-01-01')}
                                                className={classes.root } 
                                                style={{borderColor:"#1F95EE"}}
                                                InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                                renderInput={(params) => <TextField {...params} />}
                                                value={date_action}
                                                onChange={(value) => setDate_action(value)}
                                            />
                                          </Stack>
                                        </LocalizationProvider>
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15, marginBottom:15}}  >Sélectionner un horaire :</Typography>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop:15}}>
                                          <Stack spacing={3}>
                                              <DesktopTimePicker
                                                className={classes.root } 
                                                style={{borderColor:"#1F95EE"}}
                                                InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                                renderInput={(params) => <TextField {...params} style={{borderColor:"#1F95EE"}} />}
                                                value={heure_action}
                                                onChange={(value) => setHeure_action(value)}
                                              />
                                          </Stack>
                                        </LocalizationProvider>
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Sélectionner une image :</Typography>
                                          <TextField 
                                              id="outlined-basic" 
                                              type="file"
                                              variant="outlined"
                                              className={classes.root } 
                                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                              sx={{ width: 280, top:10  }}
                                              value={image_action}
                                              onChange={(event) => setImage_action(event.target.value)}
                                          />
                                      </Box>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={() => savedata()} style={{width: '30%',left:120, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Ajouter</Button>
                                      <Button onClick={() => setStep(step-1)} style={{width: '30%',right:300, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                                    </DialogActions>
                                </Dialog>
                                )}
                                </ListItemIcon>
                                <ListItemIcon  sx={{my:"10px", ml:"15px"}}>
                                    <Button variant="outlined" onClick={handleClickOpenEdit} style={{borderRadius:"50%"}} >
                                      <DeleteForeverIcon color="primary" style={{width:"20px", height:"20px"}} onClick={() => handleClickOpenEdit(item)} />
                                    </Button>
                                    <Dialog
                                        variant="outlined"
                                        sx={{ borderRadius: 16 }}
                                        PaperProps={{ sx: {maxWidth:'70vh',minHeight: '70vh', maxHeight: '70vh' , borderRadius: 6 , top:50} }}
                                        style={{ borderRadius:"30px",height : '400px'}}
                                        open={openedit}
                                        onClose={handleCloseEdit}
                                        PaperComponent={PaperComponent}
                                        aria-labelledby="draggable-dialog-title"
                                    >
                                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                            Supprimer une actualité
                                        </DialogTitle>
                                        <DialogContent >
                                          <Box
                                            component="form"
                                            sx={{
                                              '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                                            }}
                                            
                                          >
                                              <Typography variant="h6" component="h2">
                                                  Cet élément va etre supprimé de manière définitive.
                                              </Typography>
                                              <Typography variant="h6" component="h2">
                                                  Voulez-vous vraiment continuer
                                              </Typography>
                                          </Box>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={() => handleDelete()} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Oui</Button>
                                          <Button onClick={handleClose} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Non</Button>
                                        </DialogActions>
                                    </Dialog>
                                </ListItemIcon>
                              </Box> */}
                          </ListItem>
                        ))  }
                </List>
            </div>
        </div>
    </Grid>

  )
}

//const mapStateToProps = state => ({
//   patients: state.patients.patients
//});

//export default connect(mapStateToProps, {getPatients})(ListPatients); 
