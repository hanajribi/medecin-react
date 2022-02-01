import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Alert, AlertTitle } from "@mui/material";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

import clsx from "clsx";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { authLogin } from "../../store/actions/AuthAction";

function Login(props) {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const {loading,error, user} = useSelector(state => state.auth)

  const dispatch = useDispatch();
  let history = useHistory();

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


  function handleClickCreateCount() {
    history.push("/Register");
  }
  useEffect(() => {
    if(user){
      if(user?.user?.role_user === "Medecin"){
        history.push("/dashboard");
      }else {
        history.push("/");
      }
    }
  }, [user])

  const handleLogin = () => {
   // e.preventDefault();
  // props.login(email, password);
  //  history.push("/home");
  dispatch(authLogin(email, password?.password))
  };

  return (
    <Grid container className={classes.divContainer}>
      <form className={classes.div1}>
        <Typography
          variant="h4"
          component="h4"
          className={classes.divTypography}
        >
          Connectez-vous
        </Typography>
        <form className={classes.divForm}>
          <TextField
            id="email"
            type="email"
            className={classes.root}
            label="Email"
            variant="outlined"
            InputProps={{ style: { borderRadius: 20 } }}
            style={{ marginBottom: "40px", marginTop: "80px" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <FormControl className={classes.root} variant="outlined" required>
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
          <Button
            variant="contained"
            style={{
              borderRadius: "30px",
              color: "#fff",
              backgroundColor: "#1F95EE",
              textAlign: "center",
              padding: "10px 60px",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
            onClick={() => handleLogin()}
            disabled={loading}
          >
            
           {loading ? "loading" : "Se connecter"} 
          </Button>
          <Typography
            variant="h7"
            component="h7"
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: 150,
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Vous n'avez pas un compte?
          </Typography>
          <Link
            component="button"
            variant="body2"
            style={{ marginTop: "20px" }}
            onClick={handleClickCreateCount}
          >
            Créer Un Compte
          </Link>
          {error && (
            <Alert
            
              severity="error"
            >
              <AlertTitle>{error}</AlertTitle>{" "}
            </Alert>
          )}
        </form>
      </form>
      <div className={classes.div2}>
        <img src="/images/logo.png" className={classes.divTmg} alt="sky" />
      </div>
    </Grid>
  );
}



export default Login;
