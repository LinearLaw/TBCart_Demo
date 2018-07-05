
import * as acType from "./action-type.js";
let defaultState = {
    serviceList:[],
    navInfoList:[],
    copyList:[]
}

export const list = (state = defaultState,action)=>{
    switch(action.type){
        case acType.GET_SERVICE_LIST:
            return {
                ...state,
                serviceList:action.data.data
            };
        case acType.GET_INFO_LIST:
            return {
                ...state,
                navInfoList:action.data.data
            };
        case acType.GET_COPY_LIST:
            return {
                ...state,
                copyList:action.data.data
            };
        default:
            return state;
    }
}

