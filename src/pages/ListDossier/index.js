import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from "./style.js";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useHistory } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
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
import ButtonGroup from '@mui/material/ButtonGroup';
import ReactPhoneInput from 'react-phone-input-material-ui';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import {useDispatch,useSelector} from 'react-redux';
import {getDossier } from '../../store/actions/ListDossier';
import {getPatients } from '../../store/actions/ListPatients';
import {ajoutDossiermedical} from '../../store/actions/AjoutAction';
import {editDossiermedical} from '../../store/actions/EditAction';
import {deleteDossiermedical} from '../../store/actions/DeleteAction';


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

export default function ListDossier(props){

  const classes = useStyles();
  const [btn,setBtn]=useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [inactive, setInactive] = useState(false);
  const [step, setStep] = useState(0);
  const [gender,setGender]=useState(1);
  const {patients} = useSelector(state => state.patients)
  const {dossier} = useSelector(state => state.dossier)
  const [value, setValue] = React.useState('False');
  const [dossiertoEdit, setDossiertoEdit] = useState();

  const [counter, setCounter] = useState(0);
  const {loading,error} = useSelector(state => state.ajouter)

  const [patient, setPatient] = useState("");
  const [medecin, setMedecin] = useState("");
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [type_de_sang, setType_de_sang] = useState("");
  const [chronique, setChronique] = useState("");
  const [allergie, setAllergie] = useState("");
  const [description, setDescription] = useState("");
  const [scanner, setScanner] = useState("");

  let history = useHistory();
  const dispatch = useDispatch()
  function handleClickhome() {
     history.push("/Home");
  };
  useEffect(() => {

      dispatch(getPatients())

  }, [])
  useEffect(() => {

      dispatch(getDossier())

  }, [])
  ListDossier.propTypes = {
      dossier: PropTypes.array.isRequired,
      patients: PropTypes.array.isRequired,
  };
    
  

  const savedata = () => {
    setStep();
    dispatch(editDossiermedical(dossiertoEdit, dossiertoEdit?.id))
  };
  const [openedit, setOpenedit] = React.useState(false);
  const [openedelete, setOpenedelete] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { user} = useSelector(state => state.auth)
  const handleClickOpen = () => {
    setOpenAdd(true);
    setStep(0)
  };

  const handleClose = () => {
    setOpenAdd(false);
    setOpenedit(false);
    setStep(0)
  };
  const handleClickOpenEdit = (item) => {
    setOpenedit(true);
    setDossiertoEdit(item);
  };

  const handleCloseEdit = () => {
    setOpenedit(false);
  };
  const handleClickOpenDelete = (item) => {
    setOpenedelete(true);
    setDossiertoEdit(item);
  };

  const handleCloseDelete = () => {
    setOpenedelete(false);
  };

  function handleColorChange(gender) {
      setGender(gender)
  };

  const handleChangAllergie = (event) => {
    setValue(event.target.value);
  };
  const handleAjout = () => {

    dispatch(ajoutDossiermedical(patient, 6, poids, taille, type_de_sang,chronique, allergie ,description, scanner))
  };
    
  function handleChange(input,value) {
    setDossiertoEdit({...dossiertoEdit,[input]: value})
  };
  const handleDelete = () => {
    dispatch(deleteDossiermedical(dossiertoEdit.id))
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
                Dossier médical
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
            <div style={{marginLeft:"650px", width:"250px", marginTop:"8px"}}>
               <Button variant="outlined" onClick={handleClickOpen} sx={{ m: "15px", minWidth: 140, minHeight:55}} style={{textTransform:"capitalize", color:"#1F95EE", borderRadius:"20px"}}>
                  Ajouter un dossier médical 
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
                    Ajouter un dossier médical
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
                          label="Patient"
                          value={patient} 
                          onChange={(event) => setPatient(event.target.value)}
                        >
                          {patients?.map((item,index)=>(
                            <MenuItem value={item?.id}>{`${item?.nom} ${item?.prenom}`} </MenuItem>
                          ))  }
                        </Select>
                      </FormControl>
                     
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold", fontSize:15, marginBottom:5}}  >Taille  :</Typography>
                        <TextField
                            id="outlined-number"
                            label="Taille"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            // InputProps={{style:{}}} 
                            className={classes.root}
                            sx={{ width: 380, borderRadius: 20}}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }} 
                            value={taille} 
                            onChange={(event) => setTaille(event.target.value)}
                        />
                        <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:5}}  >Poids :</Typography>
                        <TextField
                            id="outlined-number"
                            label="Poids"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            // InputProps={{style:{}}} 
                            className={classes.root}
                            sx={{ width: 380, borderRadius: 20}}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }} 
                            value={poids} 
                            onChange={(event) => setPoids(event.target.value)}
                        />                   
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setStep(step+1)} style={{width: '30%',right:150, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                  </DialogActions>
               </Dialog>
              )} {step === 1 && (
                <Dialog
                  variant="outlined"
                  sx={{ borderRadius: 16 }}
                  PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '90vh', maxHeight: '90vh' , borderRadius: 6 , top:50} }}
                  style={{ borderRadius:"30px",height : '450px'}}
                  open={openAdd}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
               >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                       Ajouter un dossier médical
                  </DialogTitle>
                  <DialogContent >
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                      }}
                      
                    >
                     <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Type de sang :</Typography>
                     <FormControl sx={{ /* m: 1, */ minWidth: 120, borderRadius: 20 }} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}>
                        <InputLabel id="demo-simple-select-helper-label">Type de sang :</InputLabel>
                        <Select
                          sx={{ borderRadius:"20px" }}
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="type de sang"
                          value={type_de_sang} 
                          onChange={(event) => setType_de_sang(event.target.value)}
                        >
                          <MenuItem value={10}>O+</MenuItem>
                          <MenuItem value={20}>O-</MenuItem>
                          <MenuItem value={20}>A+</MenuItem>
                          <MenuItem value={20}>A-</MenuItem>
                          <MenuItem value={10}>B+</MenuItem>
                          <MenuItem value={20}>B-</MenuItem>
                          <MenuItem value={10}>AB+</MenuItem>
                          <MenuItem value={10}>AB-</MenuItem>
                          
                        </Select>
                      </FormControl>
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Allergie :</Typography>
                      <RadioGroup
                        aria-label="Allergie"
                        value={allergie } 
                        onChange={(event) => setAllergie(event.target.value)}
                        name="radio-buttons"
                      >
                         <FormControlLabel value="False" control={<Radio />} label="False" />
                         <FormControlLabel value="True" control={<Radio />} label="True" />
                      </RadioGroup>
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Chronique :</Typography>
                      <RadioGroup
                        aria-label="Chronique"
                        value={allergie} 
                        onChange={(event) => setChronique(event.target.value)}
                        name="radio-buttons"
                      >
                         <FormControlLabel value="False" control={<Radio />} label="False" />
                         <FormControlLabel value="True" control={<Radio />} label="True" />
                      </RadioGroup>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setStep(step+1)} style={{width: '30%',left:120, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                    <Button onClick={() => setStep(step-1)} style={{width: '30%',right:300, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                  </DialogActions>
               </Dialog>
               )} {step ===2 && (
                <Dialog
                  variant="outlined"
                  sx={{ borderRadius: 16 }}
                  PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '90vh', maxHeight: '90vh' , borderRadius: 6 , top:50} }}
                  style={{ borderRadius:"30px",height : '450px'}}
                  open={openAdd && step === 2}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
              >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                      Ajouter un dossier médical
                  </DialogTitle>
                  <DialogContent >
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                      }}
                      
                    >
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:10}}  >Description :</Typography>
                      <TextField multiline rows={5} value={description} onChange={(event) => setDescription(event.target.value)}  label="Description" sx={{ width: 380}} variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginTop:"10px"}} />
                      <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Sélectionner une image :</Typography>
                      <TextField 
                            id="outlined-basic" 
                            type="file"
                            variant="outlined"
                            className={classes.root } 
                            InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                            sx={{ width: 280, top:10  }}
                            //value={scanner} 
                            onChange={(event) => setScanner(event.target.files[0])}
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                  <Button onClick={() => setStep(step+1)} style={{width: '30%',left:100, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Sauvegarde</Button>
                  <Button onClick={() => setStep(step-1)} style={{width: '30%',right:280, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                  </DialogActions>
              </Dialog>
              )}
            <div style={{ width:"1000px", height:"50px", marginLeft:"100px", display:"flex",  flex: 1, flexDirection: "row", marginBottom:"50px"}}>
                <div style={{marginLeft:"10px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Patient</Typography>
                </div>
                <div style={{marginLeft:"30px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{ textAlign:"center" }} >Medecin</Typography>
                </div>
                <div style={{marginLeft:"50px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Poids</Typography>
                </div>
                <div style={{marginLeft:"5px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom >Taille</Typography>
                </div>
                <div style={{marginLeft:"10px", marginRight:"50px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom sx={{  textAlign:"center" }} >Type de sang</Typography>
                </div>
                <div style={{marginLeft:"20px", marginRight:"20px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom  >Chronique</Typography>
                </div>
                <div style={{marginLeft:"20px", marginRight:"20px",marginTop:"10px",  width:"100px"}}>
                  <Typography  ariant="button" display="block" gutterBottom  >Allergie</Typography>
                </div>
               
            </div>
            <div className={classes.listdiv}>
                <List variant="outlined" sx={{ position:"absolute",width: '950px', marginLeft:'30px', marginRight:'30px'}}>
                  {dossier?.map((item,index)=>(
                    <ListItem style={{ bgcolor: 'background.paper' ,borderRadius:"20px",boxShadow: "0px 5px 15px #9E9E9E", marginBottom:20}} >
                      <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:"50px", height:"50px"}}/>
                      </ListItemAvatar>
                      {/* <ListItemText primary={`${item?.patient?.nom} ${item?.patient?.prenom}`} sx={{mx:"10px"}} /> */}
                      <ListItemText sx={{ ml:"5px"}}>
                               <Typography>{`${item?.patient?.nom}`}  </Typography>
                               <Typography>{`${item?.patient?.prenom}`}</Typography> 
                      </ListItemText>
                      {/* <ListItemText primary={`${item?.medecin?.nom} ${item?.medecin?.prenom}`} sx={{my:"15px", mx:"-10px"}} /> */}
                      <ListItemText sx={{ ml:"-20px"}}>
                               <Typography>{`${item?.medecin?.nom}`}  </Typography>
                               <Typography>{`${item?.medecin?.prenom}`}</Typography> 
                      </ListItemText>
                      <ListItemText primary={`${item?.poids}`} sx={{my:"15px"}} />
                      <ListItemText primary={`${item?.taille}`} sx={{my:"15px", mx:"-10px"}} />
                      <ListItemText primary={`${item?.type_de_sang}`} sx={{my:"15px"}} />
                      <ListItemText primary={`${item?.chronique}`} sx={{my:"15px"}} />
                      <ListItemText primary={`${item?.allergie}`} sx={{my:"15px"}} />
                      {/* <ListItemIcon sx={{my:"10px", mx:"-5px"}}>
                           <img src="/images/profile.png" alt="profile" style={{width:"50px", height:"50px"}}/>
                      </ListItemIcon> */}
                      <Box style={{ display:"flex",  flex: 1, flexDirection: "column"}} sx={{ ml:"10px"}}>
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
                                  Modifier un dossier médical
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
                                        label="Patient"
                                        value={dossiertoEdit?.patient?.id}  
                                        onChange={(event) => handleChange("patient", event.target.value)}
                                      >
                                        {patients?.map((item,index)=>(
                                          <MenuItem value={item?.id} >{`${item?.nom} ${item?.prenom}`} </MenuItem>
                                        ))  }
                                      </Select>
                                    </FormControl>
                                  
                                    <Typography variant="h6" component="h6"style={{ fontWeight:"bold", fontSize:15, marginBottom:5}}  >Taille  :</Typography>
                                    <TextField
                                          id="outlined-number"
                                          label="Taille"
                                          type="number"
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                          // InputProps={{style:{}}} 
                                          className={classes.root}
                                          sx={{ width: 380, borderRadius: 20}}
                                          InputProps={{
                                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                                          }} 
                                          value={dossiertoEdit?.taille} 
                                          onChange={(event) => handleChange("taille", event.target.value)}
                                      />
                                    <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:5}}  >Poids :</Typography>
                                    <TextField
                                          id="outlined-number"
                                          label="Poids"
                                          type="number"
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                          // InputProps={{style:{}}} 
                                          className={classes.root}
                                          sx={{ width: 380, borderRadius: 20}}
                                          InputProps={{
                                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                          }} 
                                          value={dossiertoEdit?.poids} 
                                          onChange={(event) => handleChange("poids", event.target.value)}
                                    />                   
                                  </Box>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={() => setStep(step+1)} style={{width: '30%',right:150, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                                </DialogActions>
                              </Dialog>
                              )} {step === 1 && (
                                <Dialog
                                  variant="outlined"
                                  sx={{ borderRadius: 16 }}
                                  PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '90vh', maxHeight: '90vh' , borderRadius: 6 , top:50} }}
                                  style={{ borderRadius:"30px",height : '450px'}}
                                  open={openedit && step === 1}
                                  onClose={handleCloseEdit}
                                  PaperComponent={PaperComponent}
                                  aria-labelledby="draggable-dialog-title"
                              >
                                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                    Ajouter un dossier médical
                                </DialogTitle>
                                <DialogContent >
                                  <Box
                                    component="form"
                                    sx={{
                                      '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                                    }}
                                    
                                  >
                                  <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Type de sang :</Typography>
                                  <FormControl sx={{ /* m: 1, */ minWidth: 120, borderRadius: 20 }} className={classes.root } InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}>
                                      <InputLabel id="demo-simple-select-helper-label">Type de sang :</InputLabel>
                                      <Select
                                        sx={{ borderRadius:"20px" }}
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="type de sang"
                                        value={dossiertoEdit?.type_de_sang}
                                        onChange={(event) => handleChange("type_de_sang", event.target.value)}
                                      >
                                        <MenuItem value={10}>O+</MenuItem>
                                        <MenuItem value={20}>O-</MenuItem>
                                        <MenuItem value={20}>A+</MenuItem>
                                        <MenuItem value={20}>A-</MenuItem>
                                        <MenuItem value={10}>B+</MenuItem>
                                        <MenuItem value={20}>B-</MenuItem>
                                        <MenuItem value={10}>AB+</MenuItem>
                                        <MenuItem value={10}>AB-</MenuItem>
                                        
                                      </Select>
                                    </FormControl>
                                    <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Allergie :</Typography>
                                    <RadioGroup
                                      aria-label="Allergie"
                                      value={dossiertoEdit?.allergie} 
                                      onChange={(event) => handleChange("allergie", event.target.value)}
                                      name="radio-buttons"
                                    >
                                      <FormControlLabel value="False" control={<Radio />} label="False" />
                                      <FormControlLabel value="True" control={<Radio />} label="True" />
                                    </RadioGroup>
                                    <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginBottom:-5}}  >Chronique :</Typography>
                                    <RadioGroup
                                      aria-label="Chronique"
                                      value={dossiertoEdit?.chronique} 
                                      onChange={(event) => handleChange("chronique", event.target.value)}
                                      name="radio-buttons"
                                    >
                                      <FormControlLabel value="False" control={<Radio />} label="False" />
                                      <FormControlLabel value="True" control={<Radio />} label="True" />
                                    </RadioGroup>
                                  </Box>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={() => setStep(step+1)} style={{width: '30%',left:120, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}} >Continuer</Button>
                                  <Button onClick={() => setStep(step-1)} style={{width: '30%',right:300, bottom:40, display:"flex",justifyContent:"center", alignItems:"center",borderRadius: 20 ,backgroundColor:"#1F95EE", color:"white"}}>Précedent</Button>
                                </DialogActions>
                            </Dialog>
                            )} {step ===2 && (
                              <Dialog
                                variant="outlined"
                                sx={{ borderRadius: 16 }}
                                PaperProps={{ sx: {maxWidth:'80vh',minWidth:'80vh',minHeight: '90vh', maxHeight: '90vh' , borderRadius: 6 , top:50} }}
                                style={{ borderRadius:"30px",height : '450px'}}
                                open={openedit && step === 2}
                                onClose={handleClose}
                                PaperComponent={PaperComponent}
                                aria-labelledby="draggable-dialog-title"
                            >
                                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{display:"flex",justifyContent:"center" ,backgroundColor:"#1F95EE", color:"white"}}>
                                    Ajouter un dossier médical
                                </DialogTitle>
                                <DialogContent >
                                  <Box
                                    component="form"
                                    sx={{
                                      '& > :not(style)': { m: 1, width: '50ch' , top:10, borderRadius: 10, borderColor:"#1F95EE"},
                                    }}
                                    
                                  >
                                    <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:10, marginBottom:10}}  >Description :</Typography>
                                    <TextField multiline rows={5} value={dossiertoEdit?.description} onChange={(event) => handleChange("description", event.target.value)} label="Description" sx={{ width: 380}} variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginTop:"10px"}} />
                                    <Typography variant="h6" component="h6"style={{ fontWeight:"bold",fontSize:15, marginTop:15}}  >Sélectionner une image :</Typography>
                                    <TextField 
                                          id="outlined-basic" 
                                          type="file"
                                          variant="outlined"
                                          className={classes.root } 
                                          InputProps={{style:{borderRadius: 20,borderColor:"#1F95EE"}}}
                                          sx={{ width: 280, top:10  }}
                                          value={dossiertoEdit?.scanner} 
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
                                      Supprimer un dossier médical
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
