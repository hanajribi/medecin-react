import {COUNT_RENDEZVOUS} from "../../actions/actionTypes.js";
const initialState = {
    countRendezvous: ""
}

export default function(state = initialState, action) {
    switch(action.type){
        case COUNT_RENDEZVOUS:
            return {
                ...state,
                countRendezvous: action.payload
            };
        default:
            return state;
    }
};