import axios from 'axios';

import {GET_LIST_RENDEZVOUS} from '../actionTypes.js';
import * as settings from '../../../settings';

// GET_LIST_RENDEZVOUS
export const getRendezvous = () => dispatch => {
   
        axios.get(`${settings.API_SERVER}/api/rendezvous/`)
        .then(res => {
            dispatch({
                type: GET_LIST_RENDEZVOUS,
                payload: res.data
            });
            
        })
        .catch(err => console.log(err));
};