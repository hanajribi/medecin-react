import { combineReducers } from "redux";
import patients from "./ListPatients";
import auth from "./AuthReducers";
import dossier from "./ListDossier";
import rendezvous from "./ListRendezvous";
import actualites from "./ListActualite";
import countRendezvous from "./CountRendezvous";
import ajouter from "./AjoutReducers";


export default combineReducers({
  patients,
  auth,
  dossier ,
  rendezvous,
  countRendezvous ,
  actualites,
  ajouter,
});
