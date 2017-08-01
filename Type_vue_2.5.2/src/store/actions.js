
import * as types from './mutation-types'
import axios from "axios"

export const getServiceList = ({commit})=>{
  axios.get("../../static/json/service.json").then((result)=>{
    let tempData = result.data;
    commit("GET_SERVICE_LIST",tempData);
  })
}
export const getInfosList = ({commit})=>{
  axios.get("../../static/json/navinfo.json").then((result)=>{
    let tempData = result.data;
    commit("GET_INFO_LIST",tempData);
  })
}
export const getAboutList = ({commit})=>{
  axios.get("../../static/json/copys.json").then((result)=>{
    let tempData = result.data;
    commit("GET_ABOUT_LIST",tempData);
  })
}
export const getCartList = ({commit})=>{
  axios.get("../../static/json/cart.json").then((result)=>{
    let tempData = result.data;
    commit("GET_CART_LIST",tempData);
  })
}

