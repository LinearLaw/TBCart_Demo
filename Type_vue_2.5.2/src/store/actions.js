
import * as types from './mutation-types'
import axios from "axios"

export const getServiceList = ({commit})=>{
  axios.get("/static/json/service.json").then((result)=>{
    commit("GET_SERVICE_LIST",result.data);
  })
}
export const getInfosList = ({commit})=>{
  axios.get("/static/json/navinfo.json").then((result)=>{
    commit("GET_INFO_LIST",result.data);
  })
}
export const getAboutList = ({commit})=>{
  axios.get("/static/json/copys.json").then((result)=>{
    commit("GET_ABOUT_LIST",result.data);
  })
}
export const getCartList = ({commit})=>{
  axios.get("/static/json/cart.json").then((result)=>{
    commit("GET_CART_LIST",result.data);
  })
}

