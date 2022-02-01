import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../actionTypes';
import axios from "axios";
import * as settings from '../../../settings';
import moment from 'moment';

const SESSION_DURATION = settings.SESSION_DURATION



export const authStart = (payload) => {
    return {
        type: AUTH_START,
        payload
    };
};

export const authSuccess = (user) => {
    return {
        type: AUTH_SUCCESS,
        payload: user
    };
};

export const authFail = error => {
    return {
        type: AUTH_FAIL,
        error: error
    };
};


export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart(true));
        axios.post(`${settings.API_SERVER}/api/auth/login/`, {
            email: email,
            password: password
        })
        .then(res => {
            dispatch(authStart(false));
             localStorage.setItem('user', JSON.stringify(res?.data));
             dispatch(authSuccess(res?.data));
        })
        .catch(err => { dispatch(authStart(false));
         //   dispatch(authFail(err))
        });
    }
}

export const authLogout = () => {
    return dispatch => {
    localStorage.clear()
     dispatch(authSuccess(null));
    }
}

// This sets a timer, which would automatically logout the user after a specified time
export const authCheckTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime)
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined || token === null) {
            dispatch(authLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(authLogout());
            } else {
                dispatch(authSuccess(token));
                dispatch(authCheckTimeout( expirationDate.getTime() - new Date().getTime()) );
            }
        }
    }
}

export const authRegister = (nom, prenom, telephone, date_de_naissance, sexe,email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${settings.API_SERVER}/api/auth/patient/register/`, {
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            date_de_naissance: moment(date_de_naissance).format("YYYY-MM-DD"),
            sexe: sexe,
            email: email,
            password: password,
            role_user: "Patient"
        })
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res?.data));
            dispatch(authSuccess(res?.data));
        })
        .catch(err => {
            dispatch(authFail(err))
        });
    }
}

export const authRegisterMedecin = (nom, prenom ,email, password,telephone) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${settings.API_SERVER}/api/auth/medecin/register/`, {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
            telephone,
            role_user: "Medecin"
        })
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res?.data) );
            dispatch(authSuccess(res?.data));
        })
        .catch(err => {
            dispatch(authFail(err))
        });
    }
}


