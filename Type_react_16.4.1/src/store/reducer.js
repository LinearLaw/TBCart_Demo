
import * as acType from "./action-type.js";
let defaultState = {
    list:[]
}

export const list = (state = defaultState,action)=>{
    switch(action.type){
        case acType.ADD:
            return {
                ...state
            }
        default:
            return state;
    }
}