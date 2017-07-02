
import * as types from './mutation-types'
export const GET_SERVICE_LIST = (state,outerData) => {
    state.service = outerData;
}
export const GET_INFO_LIST = (state,outerData) => {
    state.navinfo = outerData;
}
export const GET_ABOUT_LIST = (state,outerData) => {
    state.copys = outerData;
}

