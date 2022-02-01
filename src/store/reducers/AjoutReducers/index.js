import { TRY_CREATE_USER , AJOUT_FAIL, AUTH_START,  AUTH_FAIL} from '../../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
    loading: false,
    error: null,
};

export const authStart = (state, action) => {
    return updateObject(state,{
        loading: action.payload,
        error: null,    
    });
};

export const authFail = (state, action) => {
    return updateObject(state,{
        error: action.error,    
    });
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_START:
            return authStart(state, action);
        case AUTH_FAIL:
            return authFail(state, action);
        default:
            return initialState;
    }
};

export default reducer;