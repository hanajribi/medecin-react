import {GET_LIST_RENDEZVOUS} from "../../actions/actionTypes.js";

const initialState = {
    rendezvous : []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_LIST_RENDEZVOUS:
            return {
                ...state,
                rendezvous: action.payload
            };
        default:
            return state;
    }
}