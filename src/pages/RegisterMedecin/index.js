import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
//import bluesky from '/bluesky.jpg';
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import useStyles from "./style.js";
import { authRegisterMedecin } from "../../store/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";

export default function RegisterMedecin() {
  const classes = useStyles();
  const [step, setstep] = useState(0);
  const [gender, setGender] = useState(1);

  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const { loading, error, user } = useSelector((state) => state.auth);

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
    history.push("/Login");
  }

  useEffect(() => {
    user && history.push("/home");
  }, [user]);

  const handleChange = () => {
    dispatch(authRegisterMedecin(nom, prenom, email, password?.password));
  };
  return (
    <Grid
      container
      style={{ width: "100vw", height: "100vh", display: "flex" }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          style={{
            alignItems: "center",
            position: "absolute",
            paddingBottom: 450,
            fontWeight: "bold",
          }}
        >
          Inscrivez-vous
        </Typography>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: 1,
            flexDirection: "column",
            paddingTop: 30,
          }}
        >
          <TextField
            label="Nom"
            value={nom}
            variant="outlined"
            InputProps={{ style: { borderRadius: 20, marginBottom: "20px" } }}
            className={classes.root}
            onChange={(event) => setNom(event.target.value)}
          />
          <TextField
            label="Prenom"
            value={prenom}
            variant="outlined"
            InputProps={{ style: { borderRadius: 20, marginBottom: "20px" } }}
            className={classes.root}
            onChange={(event) => setPrenom(event.target.value)}
          />
          <TextField
            label="Email"
            value={email}
            variant="outlined"
            InputProps={{ style: { borderRadius: 20, marginBottom: "20px" } }}
            className={classes.root}
            onChange={(event) => setEmail(event.target.value)}
          />
          <FormControl className={classes.root} variant="outlined">
            <InputLabel variant="outlined">Mot De Passe</InputLabel>
            <OutlinedInput
              variant="outlined"
              style={{ borderRadius: 20 }}
              type={password.showPassword ? "text" : "password"}
              value={password.password}
              onChange={(event) =>
                setPassword({ ...password, password: event.target.value })
              }
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
              labelWidth={100}
            />
          </FormControl>

          <TextField
            label="Numéro"
            value={telephone}
            variant="outlined"
            InputProps={{ style: { borderRadius: 20, marginBottom: "20px" } }}
            className={classes.root}
            style={{ top: 100 }}
            onChange={(event) => setTelephone(event.target.value)}
          />
          <Button
            variant="contained"
            style={{
              variant: "outlined",
              backgroundColor: "#1F95EE",
              color: "#fff",
              borderRadius: "30px",
              textAlign: "center",
              margin: "4px 2px",
              padding: "10px 60px",
              fontWeight: "bold",
              marginBottom: "40px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              top: 100,
            }}
            onClick={() => handleChange()}
            disabled={loading}
          >
            {loading ? "loading" : "Confirmer"}
          </Button>
          <Typography
            variant="h7"
            component="h7"
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: 55,
              fontWeight: "bold",
            }}
          >
            Vous avez un compte?
          </Typography>
          <Link
            component="button"
            variant="body2"
            style={{
              position: "absolute",
              height: "10px",
              bottom: 30,
              fontWeight: "bold",
            }}
            onClick={handleClickCreateCount}
          >
            Connectez vous
          </Link>
        </div>
      </div>

      <div
        style={{
          width: "50%",
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          backgroundImage: "url(/images/Pic.png)",
          objectFit: "cover",
          borderTopLeftRadius: 75,
          borderBottomLeftRadius: 75,
        }}
      >
        <img
          src="/images/logo.png"
          style={{
            width: "50%",
            height: "50%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          alt="reg"
        />
      </div>
    </Grid>
  );
}
