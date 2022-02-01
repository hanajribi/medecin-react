import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
    loading: false,
    error: null,
    token: null,
    user:null,
};

export const authStart = (state, action) => {
    return updateObject(state,{
        loading: action.payload,
        error: null,    
    });
};

export const authSuccess = (state, action) => {
    return updateObject(state,{
        loading: false,
        user: action.payload,    
    });
};

export const authFail = (state, action) => {
    return updateObject(state,{
        error: action.error,    
    });
};

export const authLogout = (state, action) => {
    return updateObject(state,{
        token: null,    
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_START:
            return authStart(state, action);
        case AUTH_SUCCESS:
            return authSuccess(state, action);
        case AUTH_FAIL:
            return authFail(state, action);
        case AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return initialState;
    }
};

export default reducer;