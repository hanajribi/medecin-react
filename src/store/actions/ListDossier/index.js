import axios from 'axios';

import {GET_LIST_DOSSIER} from '../actionTypes.js';
import * as settings from '../../../settings';

// GET PATIENTS
export const getDossier = () => dispatch => {
   
        axios.get(`${settings.API_SERVER}/api/dossiermedical/`)
        .then(res => {
            dispatch({
                type: GET_LIST_DOSSIER,
                payload: res.data
            });
            
        })
        .catch(err => console.log(err));
};