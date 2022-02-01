import { TRY_CREATE_USER , AJOUT_FAIL} from '../actionTypes';
import axios from "axios";
import * as settings from '../../../settings';
import moment from 'moment';

export const ajoutStart = (payload) => {
    return {
        type: TRY_CREATE_USER ,
        payload
    };
};

export const ajoutFail = error => {
    return {
        type: AJOUT_FAIL,
        error: error
    };
};

export const ajoutPatient = (nom, prenom, telephone, date_de_naissance, sexe,email, password) => {
    return dispatch => {
        dispatch(ajoutStart());
        axios.post(`${settings.API_SERVER}/api/auth/listpatient/`, {
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            date_de_naissance:  moment(date_de_naissance).format("YYYY-MM-DD"),
            sexe: sexe,
            email: email,
            password: password
        })
        .then(res => {
     

        })
        .catch(err => {
            dispatch(ajoutFail(err))
        });
    }
}


export const ajoutRendezvous= (type, objet, date_rendezvous, heure_rendezvous,statut,scanner, patient, medecin) => {
    return dispatch => {
        dispatch(ajoutStart());
        let formdata = new FormData();
        formdata.append("type", type);
        formdata.append("patient", patient);
        formdata.append("date_rendezvous", moment(date_rendezvous).format("YYYY-MM-DD"));
        formdata.append("heure_rendezvous", moment(heure_rendezvous).format("HH:MM") );
        formdata.append("statut", statut );
        formdata.append("objet", objet);
        formdata.append("scanner", scanner);
        formdata.append("medecin", medecin);
        axios.post(`${settings.API_SERVER}/api/rendezvous/`, formdata)
        .then(res => {
     

        })
        .catch(err => {
            dispatch(ajoutFail(err))
        });
    }
}

export const ajoutDossiermedical = (patient, medecin, poids, taille, type_de_sang,chronique,allergie ,
description, scanner ) => {
    return dispatch => {
        dispatch(ajoutStart());
        let formdata = new FormData();
            formdata.append("patient", patient);
            formdata.append("medecin", medecin);
            formdata.append("poids", poids);
            formdata.append("taille", taille);
            formdata.append("type_de_sang", type_de_sang);
            formdata.append("chronique", chronique);
            formdata.append("description", description);
            formdata.append("scanner", scanner); 
        axios.post(`${settings.API_SERVER}/api/dossiermedical/`, formdata)
        .then(res => {
     

        })
        .catch(err => {
            dispatch(ajoutFail(err))
        });
    }
}

export const ajoutActualite = (titre, date_action, heure_action, description_action , image_action,medecin) => {
    return dispatch => {
        dispatch(ajoutStart());
        let formdata = new FormData();
        formdata.append("titre", titre);
        formdata.append("date_action",moment(date_action).format("YYYY-MM-DD") );
        formdata.append("heure_action", moment(heure_action).format("HH:MM") );
        formdata.append("description_action", description_action);
        formdata.append("medecin", medecin);
        formdata.append("image_action", image_action); 
        axios.post(`${settings.API_SERVER}/api/actualite/`, formdata)
        .then(res => {
     

        })
        .catch(err => {
            dispatch(ajoutFail(err))
        });
    }
}