import {GET_LIST_ACTUALITE} from "../../actions/actionTypes.js";

const initialState = {
    actualites : []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_LIST_ACTUALITE:
            return {
                ...state,
                actualites: action.payload
            };
        default:
            return state;
    }
}