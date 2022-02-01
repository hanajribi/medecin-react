import axios from 'axios';

import {GET_LIST_ACTUALITE } from '../actionTypes.js';
import * as settings from '../../../settings';

// GGET_LIST_ACTUALITE 
export const getActualite = () => dispatch => {
   
        axios.get(`${settings.API_SERVER}/api/actualite/`)
        .then(res => {
            dispatch({
                type: GET_LIST_ACTUALITE ,
                payload: res.data
            });
            
        })
        .catch(err => console.log(err));
};