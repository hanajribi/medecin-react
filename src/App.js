import "./App.css";
import Login from "../src/pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Rendezvous from "../src/pages/Rendezvous";
import Dashboard from "../src/pages/Dashboard";
import Register from "../src/pages/Register";
import RegisterMedecin from "../src/pages/RegisterMedecin";

import Dossiermedicale from "../src/pages/Dossiermedicale";
import ListPatients from "../src/pages/ListPatients";
import ListDossier from "../src/pages/ListDossier";
import ListRendezvous from "../src/pages/ListRendezvous";
import ListActualite from "../src/pages/ListActualite";
import Accueil from "../src/pages/Accueil"
import theme from "../src/utility/theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import reducer from "./store/reducers/configStore";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/Alert";
import { authSuccess } from "store/actions/AuthAction";
import { useEffect } from "react";

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const composeEnhances = window.__REDUX_DEVTOOLS_EXTEBSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
     
         <AppRedux />
    
      </Provider>
    </ThemeProvider>
  );
}


 function AppRedux() {
   const dispatch = useDispatch()
   useEffect(() => {
    const user = localStorage.getItem('user')
    if(user) {
      dispatch(authSuccess(JSON.parse(user)));
    }
   }, [])
  return (
    <Router>
           
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/accueil" exact component={Accueil} />
      <Route path="/rendezvous" exact component={Rendezvous} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/register" exact component={Register} />
      {/* <Route path="/registerMedecin" component={RegisterMedecin} /> */}
      <Route path="/listpatients" component={ListPatients} />
      <Route path="/listdossier" exact component={ListDossier} />
      <Route path="/dossiermedicale" exact component={Dossiermedicale} />
      <Route path="/listRendezvous" component={ListRendezvous} />
      <Route path="/listActualite" exact component={ListActualite} />
    </Switch>
 
</Router>
  )
}


export default App;
