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
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import {useDispatch,useSelector} from 'react-redux';
import {getPatients } from '../../store/actions/ListPatients';
import {editPatients } from '../../store/actions/EditAction';
import {deletePatients } from '../../store/actions/DeleteAction';
import {ajoutPatient } from '../../store/actions/AjoutAction';


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




export default function ListPatients(props){

  const classes = useStyles();
  const [btn,setBtn]=useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [inactive, setInactive] = useState(false);
  const [step, setStep] = useState(0);
  const [gender,setGender]=useState(1);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [value, setValue] = React.useState(new Date());
  const {patients} = useSelector(state => state.patients)
  const [patienttoEdit, setPatienttoEdit] = useState();

  const [date_de_naissance, setDate_de_naissance] = useState("");
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  //const [password, setPassword] = useState("");
  const {loading,error} = useSelector(state => state.ajouter)

  let history = useHistory();
  const dispatch = useDispatch()
  function handleClickhome() {
     history.push("/Home");
  };

  useEffect(() => {

    dispatch(getPatients())

  }, [])
  
  ListPatients.propTypes = {
    patients: PropTypes.array.isRequired
  };
   
  const [age, setAge] = React.useState('');

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
    dispatch(editPatients(patienttoEdit, patienttoEdit?.id))
  };
  const [openedit, setOpenedit] = React.useState(false);
  const [openedelete, setOpenedelete] = React.useState(false);

  const handleClickOpenEdit = (item) => {
    setOpenedit(true);
    setPatienttoEdit(item);
  };

  const handleCloseEdit = () => {
    setOpenedit(false);
  };
  function handleColorChange(gender) {
    setSexe(gender)
  };

  const handleClickOpenDelete = (item) => {
    setOpenedelete(true);
    setPatienttoEdit(item);
  };

  const handleCloseDelete = () => {
    setOpenedelete(false);
  };

  function handleChange(input,value) {
    setPatienttoEdit({...patienttoEdit,[input]: value})
  };
  const handleAjout = () => {
   dispatch(ajoutPatient(nom, prenom, telephone, date_de_naissance, sexe,email))
   };
  const handleDelete = () => {
    dispatch(deletePatients(patienttoEdit.id))
  };


  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChangePassword = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
           <div style={{position:"absolute", marginTop:"23px", marginLeft:"900px", width:"100px"}}>
              <Box sx={{ minWidth: 130, borderColor: 'primary.main'}} variant="outlined" style={{borderColor:"#1F95EE", borderRadius:"30px"}}>
                  <FormControl sx={{ /* m: 1, */ minWidth: 130, borderRadius: 20 }} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}>
                      <InputLabel id="demo-simple-select-helper-label">Filters</InputLabel>
                      <Select
                        sx={{ borderRadius:"20px" }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Filters"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}></MenuItem>
                        <MenuItem value={20}></MenuItem>
                      </Select>
                  </FormControl> 
              </Box>
                    
            </div>
            <div style={{position:"absolute", width:"300px", marginTop:"20px", marginLeft:"80px"}}>
                <Typography  variant="outlined" variant="h6" gutterBottom component="div" ><u>Patients inscrits</u></Typography>
            </div>
            <div style={{marginLeft:"700px", width:"250px", marginTop:"8px"}}>
               <Button variant="outlined" onClick={handleClickOpen} sx={{ m: "15px", minWidth: 140, minHeight:55}} style={{textTransform:"capitalize", color:"#1F95EE", borderRadius:"20px"}}>
                  Ajouter un patient
               </Button>
            </div>
               {step ===0 && (
               <Dialog
                  variant="outlined"
                  sx={{ borderRadius: 16 }}
                  PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                  style={{ borderRadius:"30px",height : '400px'}}
                  open={open}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
               >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                      Ajouter un patient
                  </DialogTitle>
                  <DialogContent >
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                      }}
                      
                    > 
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15}}  >Email de patient:</Typography>
                      <TextField className={classes.root } value={email} onChange={(event) => setEmail(event.target.value)} InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}} id="outlined-basic" label="Email" variant="outlined"   />
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15}}  >Nom de patient:</Typography>
                      <TextField className={classes.root } value={nom} onChange={(event) => setNom(event.target.value)} InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}} id="outlined-basic" label="Nom" variant="outlined" />
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15}}  >Prenom de patient:</Typography>
                      <TextField className={classes.root } value={prenom} onChange={(event) => setPrenom(event.target.value)} InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}} id="outlined-basic" label="Prenom" variant="outlined" />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setStep(step+1)} style={{width: '30%',right:150, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                  </DialogActions>
               </Dialog>
              )}  {step ===1 && (
               <Dialog
                  variant="outlined"
                  sx={{ borderRadius: 16 }}
                  PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                  style={{ borderRadius:"30px",height : '400px'}}
                  open={open}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
               >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                      Ajouter un patient
                  </DialogTitle>
                  <DialogContent >
                    <Box
                      component="form"
                      sx={{
                        m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                      }}
                      
                    >
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15}}  >Sexe du patient :</Typography>
                        <Box 
                          component="form"
                          sx={{
                               m: 1, width: '40ch' ,  ml:5, top:5, borderRadius: 10, borderColor:"#1F95EE",alignItems: "center", display:"flex", justifyContent:"center" , flex: 1, flexDirection: "row"
                          }}
                          
                        >
                            <Button variant={sexe === "Male" ? "contained" : "outlined"} className={sexe === "Male" ? classes.buttonSelected :classes.button1 } onClick={()=>handleColorChange("Male")} onChange={(event) => handleChange(event.target.value)} style={{marginLeft:5, borderRadius: '20px'}} > 
                               <img src={sexe === "Male" ?"/images/man 2.svg" :"/images/man 2.svg"} alt="man"/>
                               Male 
                            </Button>
                            <Button variant={sexe === "Femelle" ? "contained" : "outlined"} className={sexe === "Femelle"? classes.buttonSelected :classes.button1 } onClick={()=>handleColorChange("Femelle")} onChange={(event) => handleChange(event.target.value)} style={{marginLeft:20,borderRadius: '20px'}} > 
                               <img src={sexe === "Femelle" ?"/images/woman 1.svg" :"/images/woman 1.svg"} alt="woman"/>
                               Femelle 
                            </Button>
                        </Box>
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Date de naissance :</Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}style={{ marginTop:15}}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                              className={classes.root } 
                              style={{borderColor:"#1F95EE"}}
                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                              renderInput={(params) => <TextField {...params} />}
                              value={date_de_naissance} 
                              onChange={(value) => setDate_de_naissance(value)}
                          />
                        </Stack>
                        </LocalizationProvider>
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Numéro de télèphone :</Typography>
                        <TextField 
                            id="outlined-basic" 
                            label="Numéro" 
                            variant="outlined"
                            value={telephone} 
                            onChange={(event) => setTelephone(event.target.value)}
                            className={classes.root } 
                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                            sx={{ width: 400, top:10  }}
                        />
                      
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setStep(step+1)} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                    <Button onClick={() => setStep(step-1)} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                  </DialogActions>
               </Dialog>
                )}  {step ===2 && (
                  <Dialog
                     variant="outlined"
                     sx={{ borderRadius: 16 }}
                     PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                     style={{ borderRadius:"30px",height : '400px'}}
                     open={open}
                     onClose={handleClose}
                     PaperComponent={PaperComponent}
                     aria-labelledby="draggable-dialog-title"
                  >
                     <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                         Ajouter un patient
                     </DialogTitle>
                     <DialogContent >
                       <Box
                         component="form"
                         sx={{
                           m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                         }}
                         
                       >
                           <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15}}  >Mot de passe :</Typography>
                           <FormControl className={classes.root} variant="outlined" >
                                <InputLabel>Mot De Passe</InputLabel>
                                <OutlinedInput
                                  id="outlined-adornment-password"
                                  variant="outlined"
                                  style={{ borderRadius: 20, marginBottom: "60px" }}
                                  type={password.showPassword ? "text" : "password"}
                                  value={password.password}
                                  onChange={handleChangePassword("password")}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        style={{ color: "#1F95EE" }}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {password.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                  label="Mot De Passe"
                                  labelWidth={100}
                                />
                            </FormControl>
                         
                       </Box>
                     </DialogContent>
                     <DialogActions>
                       <Button onClick={() => handleAjout()} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Ajouter</Button>
                       <Button onClick={() => setStep(step-1)} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                     </DialogActions>
                  </Dialog>
              )}
            <div style={{ width:"1000px", height:"50px", marginLeft:"100px", display:"flex",  flex: 1, flexDirection: "row", marginBottom:"50px"}}>
                <div style={{marginLeft:"20px", marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Patient</Typography>
                </div>
                <div style={{marginLeft:"80px",marginRight:"10px", marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{ textAlign:"center" }} >Date de naissance</Typography>
                </div>
                <div style={{marginLeft:"80px", marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Sexe</Typography>
                </div>
                <div style={{marginLeft:"50px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Num Tel</Typography>
                </div>
                <div style={{marginLeft:"100px", marginRight:"20px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom  >Profil</Typography>
                </div>
            </div>
            <div className={classes.listdiv}>
                <List variant="outlined" sx={{ position:"absolute",width: '950px', marginLeft:'30px', marginRight:'30px'}}>
                  {patients?.map((item,index)=>(
                    <ListItem style={{ bgcolor: 'background.paper' ,borderRadius:"20px",boxShadow: "0px 5px 15px #9E9E9E", marginBottom:20}} >
                      <ListItemAvatar>
                            <Avatar alt="Remy Sharp" primary={`${item?.patient?.profile_image}`} style={{bgcolor: 'background.paper' ,borderRadius:"20px",boxShadow: "0px 5px 15px #9E9E9E", marginBottom:20}}/>
                      </ListItemAvatar>
                      <ListItemText sx={{ ml:"5px"}}>
                               <Typography>{`${item?.nom}`}  </Typography>
                               <Typography>{`${item?.prenom}`}</Typography> 
                      </ListItemText>
                      <ListItemText primary={`${item?.date_de_naissance}`} sx={{my:"15px", mx:"-10px"}} />
                      <ListItemText primary={`${item?.sexe}`} sx={{my:"15px"}} />
                      <ListItemText primary={`${item?.telephone}`}sx={{my:"15px", mx:"10px"}} />
                      <ListItemIcon sx={{my:"15px", mx:"-5px"}}>
                           <img src="/images/profile.png" alt="profile" style={{width:"50px", height:"50px"}}/>
                      </ListItemIcon>
                      <Box style={{ display:"flex",  flex: 1, flexDirection: "column"}} sx={{ ml:"10px"}}>
                          <ListItemIcon sx={{my:"10px", ml:"15px"}}>
                              <Button variant="outlined" onClick={() => handleClickOpenEdit(item)} style={{borderRadius:"50%", borderColor: 'white'}} >
                                  <ModeEditIcon color="primary" style={{width:"20px", height:"20px"}}/>
                              </Button>
                              {step ===0 && (
                              <Dialog
                                  variant="outlined"
                                  sx={{ borderRadius: 16 }}
                                  PaperProps={{ sx: {maxWidth:'80vh', minWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                                  style={{ borderRadius:"30px",height : '400px'}}
                                  open={openedit}
                                  onClose={handleCloseEdit}
                                  PaperComponent={PaperComponent}
                                  aria-labelledby="draggable-dialog-title"
                              >
                                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                      Modifier un patient
                                  </DialogTitle>
                                  <DialogContent >
                                    <Box
                                      component="form"
                                      sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                                      }}
                                      
                                    >
                                      <TextField className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE", marginBottom:20}}} id="outlined-basic" label="Email" variant="outlined" value={patienttoEdit?.email} onChange={(event) => handleChange("email", event.target.value)} />
                                      <TextField className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE", marginBottom:20}}} id="outlined-basic" label="Nom" variant="outlined" value={patienttoEdit?.nom} onChange={(event) => handleChange("nom", event.target.value)} />
                                      <TextField className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE", marginBottom:20}}} id="outlined-basic" label="Prenom" variant="outlined" value={patienttoEdit?.prenom} onChange={(event) => handleChange("prenom", event.target.value)} />
                                    </Box>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button onClick={() => setStep(step+1)} style={{width: '30%',right:150, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                                  </DialogActions>
                              </Dialog>
                              )}  {step ===1 && (
                              <Dialog
                                  variant="outlined"
                                  sx={{ borderRadius: 16 }}
                                  PaperProps={{ sx: {maxWidth:'80vh', minWidth:'80vh',minHeight: '70vh', maxHeight: '70vh' , borderRadius: 6 , top:50} }}
                                  style={{ borderRadius:"30px",height : '400px'}}
                                  open={openedit}
                                  onClose={handleCloseEdit}
                                  PaperComponent={PaperComponent}
                                  aria-labelledby="draggable-dialog-title"
                              >
                                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                      Modifier un patient
                                  </DialogTitle>
                                  <DialogContent >
                                    <Box
                                      component="form"
                                      sx={{
                                        m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                                      }}
                                      
                                    >
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15}}  >Sexe du patient :</Typography>
                                        <Box 
                                          component="form"
                                          sx={{
                                              m: 1, width: '40ch' ,  ml:5, top:5, borderRadius: 10, borderColor:"#1F95EE",alignItems: "center", display:"flex", justifyContent:"center" , flex: 1, flexDirection: "row"
                                          }}
                                          
                                        >
                                            <Button variant={patienttoEdit?.sexe === "Male" ? "contained" : "outlined"} className={patienttoEdit?.sexe === "Male" ?classes.buttonSelected :classes.button1 } onClick={()=>handleColorChange("Male")} style={{marginLeft:5, borderRadius: '20px'}} > 
                                              <img src={patienttoEdit?.sexe === "Male" ?"/images/man 2.svg" :"/images/man 2.svg"} alt="man"/>
                                              Male 
                                            </Button>
                                            <Button variant={patienttoEdit?.sexe === "Femelle" ? "contained" : "outlined"} className={patienttoEdit?.sexe === "Femelle" ?classes.buttonSelected :classes.button1 } onClick={()=>handleColorChange("Femelle")}  style={{marginLeft:20,borderRadius: '20px'}} > 
                                              <img src={patienttoEdit?.sexe === "Femelle" ? "/images/man 2.svg" :"/images/man 2.svg"} alt="woman"/>
                                              Femelle 
                                            </Button>
                                        </Box>
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Date de naissance :</Typography>
                                        <TextField
                                            disabled
                                            value={patienttoEdit?.date_de_naissance }
                                            id="date"
                                            label="Date de naissance"
                                            type="date"
                                            defaultValue="2021-10-17"
                                            className={classes.root } 
                                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                            sx={{ width: 280, top:10  }}
                                            InputLabelProps={{
                                              shrink: true,
                                            }}
                                            
                                        />
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Numéro de télèphone :</Typography>
                                        <TextField 
                                            value={patienttoEdit?.telephone}
                                            id="outlined-basic" 
                                            label="Numéro" 
                                            variant="outlined"
                                            className={classes.root } 
                                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                            sx={{ width: 280, top:10  }}
                                            onChange={(event) => handleChange("telephone", event.target.value)}
                                        />
                                      
                                    </Box>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button onClick={() => savedata()} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Sauvegarde</Button>
                                    <Button onClick={() => setStep(step-1)} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                                  </DialogActions>
                              </Dialog>
                            )}
                          </ListItemIcon>
                          <ListItemIcon  sx={{my:"10px", ml:"15px"}}>
                              <Button variant="outlined"  onClick={() => handleClickOpenEdit(item)} style={{borderRadius:"50%", borderColor: 'white'}} >
                                 <DeleteForeverIcon color="primary" style={{width:"20px", height:"20px"}}  onClick={() => handleClickOpenEdit(item)}  />
                              </Button>
                              <Dialog
                                  variant="outlined"
                                  sx={{ borderRadius: 16 }}
                                  PaperProps={{ sx: {maxWidth:'70vh',minHeight: '70vh', maxHeight: '70vh' , borderRadius: 6 , top:50} }}
                                  style={{ borderRadius:"30px",height : '400px'}}
                                  open={openedelete}
                                  onClose={handleCloseEdit}
                                  PaperComponent={PaperComponent}
                                  aria-labelledby="draggable-dialog-title"
                              >
                                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                      Supprimer un patient
                                  </DialogTitle>
                                  <DialogContent >
                                    <Box
                                      component="form"
                                      sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                                      }}
                                      
                                    >
                                        <Typography variant="h6" component="h2" style={{ fontWeight:"bold",fontSize:15, marginTop:15}} >
                                             Cet élément va etre supprimé de manière définitive.
                                        </Typography>
                                        <Typography variant="h6" component="h2" style={{ fontWeight:"bold",fontSize:15, marginTop:15}}>
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
                      </Box>
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
