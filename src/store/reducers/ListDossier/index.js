import {GET_LIST_DOSSIER} from "../../actions/actionTypes.js";

const initialState = {
    dossier : []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_LIST_DOSSIER:
            return {
                ...state,
                dossier: action.payload
            };
        default:
            return state;
    }
}