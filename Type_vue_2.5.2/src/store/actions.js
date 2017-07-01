
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
    console.log(result);
    
  })
}
