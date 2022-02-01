
import axios from 'axios';

import {TRY_UPDATE_USER, TRY_UPDATE_RENDEZVOUS, TRY_UPDATE_DOSSIERMEDICAL, TRY_UPDATE_ACTUALITE} from '../actionTypes.js';
import * as settings from '../../../settings';


export const deletePatients = (id) => dispatch => {
        axios.delete(`${settings.API_SERVER}/api/patient/detail/${id}/`)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};

export const deleteRendezvous = (id) => dispatch => {
        axios.delete(`${settings.API_SERVER}/api/rendezvous/delete/${id}/`)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};

export const deleteDossiermedical = (id) => dispatch => {
        axios.delete(`${settings.API_SERVER}/api/dossiermedical/delete/${id}/`)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};

export const deleteActualite = (id) => dispatch => {
        axios.delete(`${settings.API_SERVER}/api/actualite/delete/${id}/`)
        .then(res => {
            
        })
        .catch(err => console.log(err));
};