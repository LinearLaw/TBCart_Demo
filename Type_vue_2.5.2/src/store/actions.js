
import * as types from './mutation-types'
import axios from "axios"

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
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

