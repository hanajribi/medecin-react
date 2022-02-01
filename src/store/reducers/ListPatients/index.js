import {GET_LIST_PATIENTS} from "../../actions/actionTypes.js";

const initialState = {
    patients : []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_LIST_PATIENTS:
            return {
                ...state,
                patients: action.payload
            };
        default:
            return state;
    }
};

