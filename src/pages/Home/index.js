import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import useStyles from "./style.js";
import {Link} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';


export default function Home(props){
    const classes = useStyles();
    const { user} = useSelector(state => state.auth)

    const [password, setPassword] = React.useState(
        {
          password: '',
          showPassword: false,
        }
      )
      const handleChangePassword = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    let history = useHistory();
    function handleClickCreateRendezVous() {
       history.push("/Rendezvous");
    };

    function handleClickLogin() {
        history.push("/Login");
     };

  
    return(
        <Grid container  className={classes.divContainer}>
            <div className={classes.div1}>
                <img src="/images/logo.png"  alt="sky" className={classes.divImg}/>
                <div className={classes.divButton}>
                  {user?.user &&  <Button variant="outlined" style={{ float:"right", left:"800px", top:'50px', height:"60px", padding: "15px 32px",color: "#1F95EE" , borderRadius: "30px", backgroundColor: "#fff", marginRight:"20px", boxShadow: "5px 3px 10px #9E9E9E", fontFamily:"Arial", fontWeight:"bold", fontStyle:"normal"}} onClick= {handleClickCreateRendezVous} >
                            Prendre un rendez-vous
                    </Button>}
                    {user?.user ? user?.user?.role_user  === "Medecin" ? <Button variant="outlined" style={{ float:"right", left:"800px", top:'50px', height:"60px", padding: "15px 32px",color: "#1F95EE" , borderRadius: "30px", backgroundColor: "#fff", marginRight:"20px", boxShadow: "5px 3px 10px #9E9E9E", fontFamily:"Arial", fontWeight:"bold", fontStyle:"normal"}}  onClick= {()=>history.push("/dashboard")}>
                            Mon Compte
                    </Button> : <Button variant="outlined" style={{ float:"right", left:"800px", top:'50px', height:"60px", padding: "15px 32px",color: "#1F95EE" , borderRadius: "30px", backgroundColor: "#fff", marginRight:"20px", boxShadow: "5px 3px 10px #9E9E9E", fontFamily:"Arial", fontWeight:"bold", fontStyle:"normal"}}  onClick= {()=>history.push("/profile")}>
                            Mon Compte
                    </Button> : <Button variant="outlined" style={{ float:"right", left:"800px", top:'50px', height:"60px", padding: "15px 32px",color: "#1F95EE" , borderRadius: "30px", backgroundColor: "#fff", marginRight:"20px", boxShadow: "5px 3px 10px #9E9E9E", fontFamily:"Arial", fontWeight:"bold", fontStyle:"normal"}}  onClick= {handleClickLogin}>
                            Se Connecter
                    </Button>}
                   
                </div>
                <img src="/images/illustration 1.png" alt="doc" className={classes.divImg1}/>
                <div className={classes.divText}>
                    <h1 className={classes.divH1} >Lorem Ipsum</h1>
                    <p className={classes.divP}>
                      <h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      </h3>
                    </p>
                </div>
            </div>
            <div className={classes.divText2}>
                <div className={classes.div2}>
                    <Typography variant="h2" component="h2" className={classes.divTypography} > À propos de nous</Typography>
                    <img src="/images/illustration 2.png" alt="doc2" className={classes.divImg2}/>
                </div>
                <div className={classes.div3}>
                <h1  className={classes.divH12}>Lorem Ipsum</h1>
                    <p style={{paddingRight:"40px", textAlign:"justify" }}>
                      <h3>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </h3>
                    </p>
                </div>
            </div>
            <div className={classes.div4}>
                <div style={{ width:"100%", height: "100%"}}>
                    <Typography variant="h2" component="h2" className={classes.divTp} > Nos Services</Typography>
                    <img src="/images/BiaKz5gaT.png" alt="plus" className={classes.divImg3}/>
                    <h2 style={{top:"390px",left:"430px", position:"absolute"}}>Lorem Ipsum</h2>
                    <h2 style={{top:"390px",right:"430px", position:"absolute"}}>Lorem Ipsum</h2>
                    <h2 style={{top:"670px",left:"430px", position:"absolute"}}>Lorem Ipsum</h2>
                    <h2 style={{top:"670px",right:"430px", position:"absolute"}}>Lorem Ipsum</h2>

                </div>
            </div>
            <div className={classes.div5}>
                <div style={{ width:"100%", height: "100%"}}>
                    <Typography variant="h2" component="h2" className={classes.divTyp} style={{marginBottom:"100px"}} > Contactez-nous</Typography>
                    <div className={classes.div6}>
                        <div className={classes.div7}>
                          <TextField label="Email"  variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginBottom: '20px'}} />
                          <FormControl className={classes.root} variant="outlined">
                            <InputLabel variant="outlined"  >Mot De Passe</InputLabel>
                            <OutlinedInput  
                                        id="outlined-adornment-password"
                                        variant="outlined" 
                                        style={{borderRadius: 20, marginBottom:"20px"}}
                                        type={password.showPassword ? 'text' : 'password'} 
                                        value={password.password}
                                        onChange={handleChangePassword('password')} 
                                        endAdornment={
                                          <InputAdornment position="end">
                                              <IconButton
                                                style={{color:"#1F95EE"}}
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
                            <TextField multiline rows={6} label="Message"  variant="outlined" InputProps={{style:{borderRadius: 20}}} className={classes.root} style={{marginBottom:"20px"}} />
                            <Button variant="contained" className={classes.button1} style={{ variant: "outlined",width:"250px",backgroundColor: "#1F95EE",padding: '15px 20px',borderRadius: '20px',textAlign: 'center',fontWeight:"bold", marginLeft:"27px"}}> Envoyer un message </Button>
                         </FormControl>
                        </div>
                        <div className={classes.div8}>
                            <h1>Lorem Ipsum</h1>
                            <p>
                                <h3>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </h3>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={classes.div9}>
                <div className={classes.div10}>
                   <div className={classes.div11}> 
                       <h1 style={{color:"#fff"}}><ins>Lorem</ins></h1>
                       <ul style={{color:"#fff", fontSize:"20px", paddingRight:"40px"}}>
                           <li >Lorem</li>
                           <li>Lorem</li>
                           <li>Lorem</li>
                       </ul>
                   </div>
                   <div className={classes.div12}> 
                       <h1 style={{color:"#fff"}}><ins>Lorem</ins></h1>
                       <ul style={{color:"#fff", fontSize:"20px", paddingRight:"40px"}}>
                           <li >Lorem</li>
                           <li>Lorem</li>
                           <li>Lorem</li>
                       </ul>
                       
                   </div>
                   <div className={classes.div13}> 
                       <h1 style={{color:"#fff"}}><ins>Contactez-nous</ins></h1>
                   </div>
                </div>
            </div>

        </Grid>
    )
}
