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
import {getPatients } from '../../store/actions/ListPatients';
import {getRendezvous } from '../../store/actions/ListRendezvous';
import {ajoutRendezvous } from '../../store/actions/AjoutAction';
import {editRendezvous } from '../../store/actions/EditAction';
import {deleteRendezvous } from '../../store/actions/DeleteAction';




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




export default function ListRendezvous(props){

  const classes = useStyles();
  const [btn,setBtn]=useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [inactive, setInactive] = useState(false);
  const [step, setStep] = useState(0);
  const [gender,setGender]=useState(1);
  
  const [selectedDate, handleDateChange] = useState(new Date());
  const [value, setValue] = React.useState(new Date());
  const {patients} = useSelector(state => state.patients)
  const {rendezvous} = useSelector(state => state.rendezvous)
  const [rendezvousEdit, setRendezvousEdit] = useState();
  const {loading,error} = useSelector(state => state.ajouter)

  const [patient, setPatient] = useState("");
  const [date_rendezvous, setDate_rendezvous] = useState("");
  const [heure_rendezvous, setHeure_rendezvous] = useState("");
  const [statut, setStatut] = useState("");
  const [objet, setObjet] = useState("");
  const [scanner, setScanner] = useState("");
  const [type, setType] = useState("");
  
  let history = useHistory();
  const dispatch = useDispatch()
  function handleClickhome() {
     history.push("/Home");
  };

  useEffect(() => {

    dispatch(getPatients())

  }, [])

  useEffect(() => {

    dispatch(getRendezvous())

  }, [])
  ListRendezvous.propTypes = {
    rendezvous: PropTypes.array.isRequired,
    patients: PropTypes.array.isRequired,
  };
   
  const [age, setAge] = React.useState('');

  /* const handleChange = (event) => {
    setAge(event.target.value);
  }; */
  //componentDidMount() {
 //     this.props.getPatients
 // }
 const savedata = () => {
  setStep();
  dispatch(editRendezvous(rendezvousEdit, rendezvousEdit?.id))
};
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openedit, setOpenedit] = React.useState(false);
  const [openedelete, setOpenedelete] = React.useState(false);
  const { user} = useSelector(state => state.auth)


  const handleClickOpenEdit = (item) => {
    setOpenedit(true);
    setRendezvousEdit(item);
    setStep(0)
  };
  const handleCloseEdit = () => {
    setOpenedit(false);
  };
  const handleClickOpen = () => {
    setOpenAdd(true);
    setStep(0)
  };

  const handleClose = () => {
    setOpenAdd(false);
    setOpenedit(false);
    setStep(0)
  };
  function handleColorChange(gender) {
    setGender(gender)
  };
  function handleChange(input,value) {
    setRendezvousEdit({...rendezvousEdit,[input]: value})
  };
  const handleDelete = () => {
    dispatch(deleteRendezvous(rendezvousEdit.id))
  };
  const handleAjout = () => {
    dispatch(ajoutRendezvous(type, objet, date_rendezvous, heure_rendezvous,statut,scanner, patient, user ? user?.user?.id :42 ))
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
                      <span className={inactive ? classes.spanActive : classes.spanInactive}>Patiens</span>
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

        <div style={{position:"absolute", width:"300px", height:"150px", left:"200px", top:"30px"}}>
            <Typography variant="h4" component="h2">
                Rendez-vous
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
                <Typography  variant="outlined" variant="h6" gutterBottom component="div" ><u>Rendez-vous à venir</u></Typography>
            </div>
            <div style={{marginLeft:"680px", width:"250px", marginTop:"8px"}}>
               <Button variant="outlined" onClick={handleClickOpen} sx={{ m: "15px", minWidth: 140, minHeight:55}} style={{textTransform:"capitalize", color:"#1F95EE", borderRadius:"20px"}}>
                  Ajouter un rendez-vous
               </Button>
            </div>
              {step ===0 && (
                <Dialog
                    variant="outlined"
                    sx={{ borderRadius: 16 }}
                    PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                    style={{ borderRadius:"30px",height : '400px'}}
                    open={openAdd}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                        Ajouter un rendez-vous
                    </DialogTitle>
                    <DialogContent >
                      <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 20, borderColor:"#1F95EE"},
                        }}
                        
                      >
                           <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-3}}  >Ajouter patient :</Typography>
                           <FormControl sx={{ /* m: 1, */ minWidth: 120 , borderRadius: 20}} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}  >
                            <InputLabel id="demo-simple-select-helper-label">Patient</InputLabel>
                            <Select
                              sx={{ borderRadius:"20px" }}
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Patientss"
                              value={patient} 
                              onChange={(event) => setPatient(event.target.value)}
                            >
                              {patients?.map((item,index)=>(
                                <MenuItem value={item?.id}>{`${item?.nom} ${item?.prenom}`} </MenuItem>
                              ))  }
                            </Select>
                          </FormControl>
                          <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-3, marginTop:10}}  >Type de radiographie:</Typography>
                          <TextField className={classes.root } value={type}  onChange={(event) => setType(event.target.value)} InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}} id="outlined-basic" label="Type" variant="outlined"   />
                          <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Statut :</Typography>
                          <FormControl sx={{ /* m: 1, */ minWidth: 120, borderRadius: 20 }} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}>
                              <InputLabel id="demo-simple-select-helper-label">Statut</InputLabel>
                              <Select
                                sx={{ borderRadius:"20px" }}
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Statut"
                                onChange={handleChange}
                                value={statut} 
                                onChange={(event) => setStatut(event.target.value)}
                             >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Valider</MenuItem>
                                <MenuItem value={20}>En cours</MenuItem>
                              </Select>
                          </FormControl>                     
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
                    open={openAdd}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                        Ajouter un rendez-vous
                    </DialogTitle>
                    <DialogContent >
                      <Box
                        component="form"
                        sx={{
                          m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                        }}
                        
                      >
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:10}}  >Sélectionner une date :</Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop:15}} >
                            <DesktopDatePicker
                                sx={{ borderRadius:"20px",borderColor:"#1F95EE" }}
                                minDate={new Date('2017-01-01')}
                                className={classes.root } 
                                style={{borderColor:"#1F95EE"}}
                                InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE",width: 380}}}
                                renderInput={(params) => <TextField {...params} />}
                                value={date_rendezvous} 
                                onChange={(value) => setDate_rendezvous(value)}
                            />
                        </LocalizationProvider>
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15, marginBottom:15}}  >Sélectionner un horaire :</Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop:15,borderColor:"#1F95EE"}}>
                            <DesktopTimePicker
                              sx={{ borderRadius:"20px",borderColor:"#1F95EE" }}
                              className={classes.root } 
                              style={{borderColor:"#1F95EE"}}
                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE",width: 380 }}}
                              renderInput={(params) => <TextField {...params} style={{borderColor:"#1F95EE"}} />}
                              value={heure_rendezvous} 
                              onChange={(value) => setHeure_rendezvous(value)}
                            />
                        </LocalizationProvider>
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Sélectionner une image :</Typography>
                          <TextField 
                              id="outlined-basic" 
                              type="file"
                              variant="outlined"
                              className={classes.root } 
                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                              sx={{ width: 380, top:10  }}
                           //   value={scanner?.name} 
                              onChange={(event) => setScanner(event.target.files[0])}
                          />
                      </Box>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => setStep(step+1)} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                    <Button onClick={() => setStep(step-1)} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                    </DialogActions>
                </Dialog>
                )} {step ===2 && (
                  <Dialog
                    variant="outlined"
                    sx={{ borderRadius: 16 }}
                    PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '70vh', maxHeight: '70vh' , borderRadius: 6 , top:50} }}
                    style={{ borderRadius:"30px",height : '400px'}}
                    open={openAdd && step === 2}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                        Ajouter un rendez-vous
                    </DialogTitle>
                    <DialogContent >
                      <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                        }}
                        
                      >
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:10}}  >Objet :</Typography>
                        <TextField multiline rows={5} label="Objet" sx={{ width: 380}} variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginTop:"10px"}} />
                      </Box>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => handleAjout()} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Sauvegarde</Button>
                    <Button onClick={() => setStep(step-1)} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                    </DialogActions>
                </Dialog>
                )}
            <div style={{ width:"1000px", height:"50px", marginLeft:"100px", display:"flex",  flex: 1, flexDirection: "row", marginBottom:"50px"}}>
                <div style={{marginLeft:"20px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Patient</Typography>
                </div>
                <div style={{marginLeft:"40px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{ textAlign:"center" }} >Type</Typography>
                </div>
                <div style={{marginLeft:"80px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Date</Typography>
                </div>
                <div style={{marginLeft:"50px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Heure</Typography>
                </div>
                <div style={{marginLeft:"40px", marginRight:"50px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{  textAlign:"center" }} >Statut</Typography>
                </div>
                <div style={{marginLeft:"-15px", marginRight:"80px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{  textAlign:"center" }} >Resultat du test</Typography>
                </div>

               
            </div>
            <div className={classes.listdiv}>
                <List variant="outlined" sx={{ position:"absolute",width: '940px', marginLeft:'30px', marginRight:'30px'}}>
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
                      <ListItemIcon sx={{my:"10px", ml:"-5px"}}>
                           <img src={`${item?.scanner }`} alt="profile" style={{width:"50px", height:"50px"}}/>
                      </ListItemIcon>
                      <Box style={{display:"flex",  flex: 1, flexDirection: "column"}} sx={{my:"10px", mx:"-5px"}}>
                          <ListItemIcon sx={{my:"10px", ml:"15px"}}>
                              <Button variant="outlined" onClick={() => handleClickOpenEdit(item)} style={{borderRadius:"50%", borderColor: 'white'}} >
                                  <ModeEditIcon color="primary" style={{width:"20px", height:"20px"}}/>
                              </Button>
                              {step ===0 && (
                              <Dialog
                                  variant="outlined"
                                  sx={{ borderRadius: 16 }}
                                  PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '80vh', maxHeight: '80vh' , borderRadius: 6 , top:50} }}
                                  style={{ borderRadius:"30px",height : '400px'}}
                                  open={openedit && step === 0}
                                  onClose={handleClose}
                                  PaperComponent={PaperComponent}
                                  aria-labelledby="draggable-dialog-title"
                              >
                                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                      Modifier un rendez-vous
                                  </DialogTitle>
                                  <DialogContent >
                                    <Box
                                      component="form"
                                      sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 20, borderColor:"#1F95EE"},
                                      }}
                                      
                                    >
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-3}}  >Ajouter patient :</Typography>
                                        <FormControl sx={{ /* m: 1, */ minWidth: 120 , borderRadius: 20}} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}  >
                                          <InputLabel id="demo-simple-select-helper-label">Patient</InputLabel>
                                          <Select
                                            Disable
                                            sx={{ borderRadius:"20px" }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            label="Patient"
                                            value={rendezvousEdit?.patient?.id} 
                                            onChange={(event) => handleChange("patient", event.target.value)}
                                          >
                                            {patients?.map((item,index)=>(
                                              <MenuItem value={item?.id} >{`${item?.nom} ${item?.prenom}`} </MenuItem>
                                            ))  }
                                          </Select>
                                        </FormControl>
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-3, marginTop:10}}  >Type de radiographie:</Typography>
                                        <TextField className={classes.root } value={rendezvousEdit?.type} onChange={(event) => handleChange("type", event.target.value)} InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}} id="outlined-basic" label="Type" variant="outlined"   />
                                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Statut :</Typography>
                                        <FormControl sx={{ /* m: 1, */ minWidth: 120, borderRadius: 20 }} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}>
                                            <InputLabel id="demo-simple-select-helper-label">Statut</InputLabel>
                                            <Select
                                              sx={{ borderRadius:"20px" }}
                                              labelId="demo-simple-select-helper-label"
                                              id="demo-simple-select-helper"
                                              label="Statut"
                                              value={rendezvousEdit?.statut} 
                                              onChange={(event) => handleChange("statut", event.target.value)}
                                          >
                                              <MenuItem value="">
                                                <em>None</em>
                                              </MenuItem>
                                              <MenuItem value={10}>Valider</MenuItem>
                                              <MenuItem value={20}>En cours</MenuItem>
                                            </Select>
                                        </FormControl>                     
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
                                  open={openedit && step === 1}
                                  onClose={handleClose}
                                  PaperComponent={PaperComponent}
                                  aria-labelledby="draggable-dialog-title"
                              >
                                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                      Modifier un rendez-vous
                                  </DialogTitle>
                                  <DialogContent >
                                    <Box
                                      component="form"
                                      sx={{
                                        m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"
                                      }}
                                      
                                    >
                                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:10}}  >Sélectionner une date :</Typography>
                                      <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop:15}} >
                                          <DesktopDatePicker
                                              sx={{ borderRadius:"20px",borderColor:"#1F95EE" }}
                                              value={value}
                                              minDate={new Date('2017-01-01')}
                                              className={classes.root } 
                                              style={{borderColor:"#1F95EE"}}
                                              InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE",width: 380}}}
                                              value={rendezvousEdit?.date_rendezvous} 
                                              onChange={(event) => handleChange("date_rendezvous", event.target.value)}
                                              renderInput={(params) => <TextField {...params} />}
                                          />
                                      </LocalizationProvider>
                                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15, marginBottom:15}}  >Sélectionner un horaire :</Typography>
                                      <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop:15,borderColor:"#1F95EE"}}>
                                          <DesktopTimePicker
                                            sx={{ borderRadius:"20px",borderColor:"#1F95EE" }}
                                            className={classes.root } 
                                            style={{borderColor:"#1F95EE"}}
                                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE",width: 380 }}}
                                            value={rendezvousEdit?.heure_rendezvous} 
                                            onChange={(event) => handleChange("heure_rendezvous", event.target.value)}
                                            renderInput={(params) => <TextField {...params} style={{borderColor:"#1F95EE"}} />}
                                          />
                                      </LocalizationProvider>
                                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Sélectionner une image :</Typography>
                                        <TextField 
                                            id="outlined-basic" 
                                            type="file"
                                            variant="outlined"
                                            className={classes.root } 
                                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                            sx={{ width: 380, top:10  }}
                                            value={rendezvousEdit?.scanner} 
                                            onChange={(event) => handleChange("scanner", event.target.value)}
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
                          <ListItemIcon color="primary" sx={{my:"10px", ml:"15px"}}>
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
                                      Supprimer une rendez-vous
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
