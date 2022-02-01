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
import { authRegister, authRegisterMedecin } from "../../store/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";

export default function Register() {
  const classes = useStyles();
  const [step, setstep] = useState(0);
  const [gender, setGender] = useState(1);

  const [date_de_naissance, setDate_de_naissance] = useState("");
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  const { loading, error, user } = useSelector((state) => state.auth);
  const [isPatient, setIsPatient] = useState(true);

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
    if(user){
      if(user?.user?.role_user === "Medecin"){
        history.push("/dashboard");
      }else {
        history.push("/");
      }
    }
  }, [user]);

  const handleChange = () => {
    dispatch(
      authRegister(
        nom,
        prenom,
        telephone,
        date_de_naissance,
        sexe,
        email,
        password?.password
      )
    );
  };

  function handleColorChange(gender) {
    setSexe(gender);
  }

  const handleIsPatient = (value) => {
    if(value !== isPatient){
      setIsPatient(value)
      setstep(0)
      setGender(1)
      setDate_de_naissance("")
      setEmail("")
      setNom("")
      setPrenom("")
      setTelephone("")
      setSexe("")
    }
    
  }
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
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          style={{
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Inscrivez-vous
        </Typography>

        <div
          style={{
            width: "50%",
            height: 55,
            backgroundColor: "#F5F5F5",
            padding: 5,
            display: "flex",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "48%",
              backgroundColor: isPatient ? "#1F95EE" : "#F5F5F5",
              color: isPatient ? "white" : "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              cursor: "pointer",
            }}
            onClick={() => handleIsPatient(true)}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontWeight: "bold",
              }}
            >
              Patient
            </Typography>
          </div>
          <div
            style={{
              height: "100%",
              width: "48%",
              backgroundColor: !isPatient ? "#1F95EE" : "#F5F5F5",
              color: !isPatient ? "white" : "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              cursor: "pointer",
            }}
            onClick={() => handleIsPatient(false)}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Medecin
            </Typography>
          </div>
        </div>
        {isPatient ? (
          step === 0 ? (
            <div
              style={{
                width: "100%",
                marginTop:20,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  flex: 1,
                  flexDirection: "column",
                }}
              >
                <TextField
                  label="Nom"
                  value={nom}
                  variant="outlined"
                  InputProps={{
                    style: { borderRadius: 20, marginBottom: "20px" },
                  }}
                  className={classes.root}
                  onChange={(event) => setNom(event.target.value)}
                />
                <TextField
                  label="Prenom"
                  value={prenom}
                  variant="outlined"
                  InputProps={{
                    style: { borderRadius: 20, marginBottom: "20px" },
                  }}
                  className={classes.root}
                  onChange={(event) => setPrenom(event.target.value)}
                />
                <TextField
                  label="Email"
                  value={email}
                  variant="outlined"
                  InputProps={{
                    style: { borderRadius: 20, marginBottom: "20px" },
                  }}
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
                          {password.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={100}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  onClick={() => setstep(1)}
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
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  Suivant
                </Button>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: "50%",
                marginTop:20,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  flex: 1,
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  style={{
                    alignItems: "center",
                    fontWeight: "bold",
                    width:"100%",
                  }}
                >
                  Sexe du patient :
                </Typography>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    flex: 3,
                    flexDirection: "row",
                  }}
                >
                  <Button
                    variant={sexe === "Male" ? "contained" : "outlined"}
                    className={
                      sexe === "Male" ? classes.buttonSelected : classes.button1
                    }
                    onClick={() => handleColorChange("Male")}
                    style={{ marginLeft: 5 }}
                    onChange={(event) => handleChange(event.target.value)}
                  >
                    <img
                      src={
                        sexe === "Male"
                          ? "/images/man 2.svg"
                          : "/images/man 2.svg"
                      }
                      alt="man"
                    />
                    Male
                  </Button>
                  <Button
                    variant={sexe === "Femelle" ? "contained" : "outlined"}
                    className={
                      sexe === "Femelle"
                        ? classes.buttonSelected
                        : classes.button1
                    }
                    onClick={() => handleColorChange("Femelle")}
                    style={{ marginLeft: 30 }}
                    onChange={(event) => handleChange(event.target.value)}
                  >
                    <img
                      src={
                        sexe === "Femelle"
                          ? "/images/man 2.svg"
                          : "/images/man 2.svg"
                      }
                      alt="woman"
                    />
                    Femelle
                  </Button>
                </div>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{
                    alignItems: "center",
                    fontWeight: "bold",
                    width:"100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Date de naissance :
                </Typography>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  style={{ marginTop: 15,width:"100%" }}
                >
                  <Stack spacing={0}>
                    <DesktopDatePicker
                      className={classes.root}
                      style={{
                        marginBottom: "20px",
                        top: 60,
                        borderColor: "#1F95EE",
                        borderRadius: "30px",
                      }}
                      InputProps={{
                        style: { borderRadius: 20, borderColor: "#1F95EE" },
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      value={date_de_naissance}
                      onChange={(value) => setDate_de_naissance(value)}
                    />
                  </Stack>
                </LocalizationProvider>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{
                    alignItems: "center",
                    fontWeight: "bold",
                    width:"100%",
                      marginTop: "20px",
                      marginBottom: "20px",
                  }}
                >
                  Numéro de télephone :
                </Typography>
                <TextField
                  label="Numéro"
                  value={telephone}
                  variant="outlined"
                  InputProps={{
                    style: { borderRadius: 20, marginBottom: "20px" },
                  }}
                  className={classes.root}
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
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleChange()}
                  disabled={loading}
                >
                  {loading ? "loading" : "Confirmer"}
                </Button>
              </div>
            </div>
          )
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
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
            style={{ marginTop: "20px"}}
            InputProps={{ style: { borderRadius: 20, } }}
            className={classes.root}
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
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() =>dispatch(authRegisterMedecin(nom, prenom, email, password?.password,telephone))}
            disabled={loading}
          >
            {loading ? "loading" : "Confirmer"}
          </Button>
          </div>
        )}
        <Typography
          variant="h7"
          component="h7"
          style={{
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Vous avez un compte?
        </Typography>
        <Link
          component="button"
          variant="body2"
          style={{
            height: "10px",
            fontWeight: "bold",
          }}
          onClick={handleClickCreateCount}
        >
          Connectez vous
        </Link>
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
