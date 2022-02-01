import axios from 'axios';

import {GET_LIST_PATIENTS} from '../actionTypes.js';
import * as settings from '../../../settings';

// GET PATIENTS
export const getPatients = () => dispatch => {
   
        axios.get(`${settings.API_SERVER}/api/auth/listpatient/`)
        .then(res => {
            dispatch({
                type: GET_LIST_PATIENTS,
                payload: res.data
            });
            
        })
        .catch(err => console.log(err));
};



