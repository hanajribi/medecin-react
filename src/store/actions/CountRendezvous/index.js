import axios from 'axios';

import {COUNT_RENDEZVOUS} from '../actionTypes.js';
import * as settings from '../../../settings';

export const getCountrd= () => dispatch => {
    
    axios.get(`${settings.API_SERVER}/api/rendezvousCount/`)
    .then(res => {
        dispatch({
            type: COUNT_RENDEZVOUS,
            payload: res.data
        });
        
    })
    .catch(err => console.log(err));
};