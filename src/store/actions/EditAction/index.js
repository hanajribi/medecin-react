
import axios from 'axios';

import {TRY_UPDATE_USER, TRY_UPDATE_RENDEZVOUS, TRY_UPDATE_DOSSIERMEDICAL, TRY_UPDATE_ACTUALITE} from '../actionTypes.js';
import * as settings from '../../../settings';

// GET PATIENTS
export const editPatients = (data, id) => dispatch => {
        axios.put(`${settings.API_SERVER}/api/patient/update/${id}/`, data)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};

export const editRendezvous = (type, objet, date_rendezvous, heure_rendezvous,statut,scanner, patient , id) => dispatch => {
        let formdata = new FormData();
        formdata.append("patient", patient);
        formdata.append("date_rendezvous", date_rendezvous);
        formdata.append("heure_rendezvous", heure_rendezvous);
        formdata.append("statut", statut);
        formdata.append("objet", objet);
        formdata.append("scanner", scanner);
        axios.put(`${settings.API_SERVER}/api/rendezvous/update/${id}/`, formdata)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};

export const editDossiermedical = (patient, poids, taille, type_de_sang,chronique,allergie ,
        description, scanner , id) => dispatch => {
        let formdata = new FormData();
        formdata.append("patient", patient);
        formdata.append("poids", poids);
        formdata.append("taille", taille);
        formdata.append("type_de_sang", type_de_sang);
        formdata.append("chronique", chronique);
        formdata.append("description", description);
        formdata.append("scanner", scanner);
        axios.put(`${settings.API_SERVER}/api/dossiermedical/update/${id}/`, formdata )
        .then(res => {
            
        })
        .catch(err => console.log(err));
};

export const editActualite = (titre, date_action, heure_action, description_action , image_action , id) => dispatch => {
        let formdata = new FormData();
        formdata.append("titre", titre);
        formdata.append("date_action", date_action);
        formdata.append("heure_action", heure_action);
        formdata.append("description_action", description_action);
        formdata.append("image_action", image_action);
        axios.put(`${settings.API_SERVER}/api/actualite/update/${id}/`, formdata)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};