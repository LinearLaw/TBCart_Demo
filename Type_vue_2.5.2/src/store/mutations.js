
import * as types from './mutation-types'

const CalculateCount = function(obj){
  let totalPrice = 0;
  let totalCount = 0;
  obj.map((value,index)=>{
    value["shopGoods"].map((innerVal,innerInd)=>{
      if(innerVal["checkitem"] == true){
        totalPrice = totalPrice + parseInt(innerVal["price"]);
        totalCount ++;
      }
    })
  })
  return {
    totalPrice,
    totalCount
  }
}
export const GET_SERVICE_LIST = (state,outerData) => {
    state.service = outerData;
}
export const GET_INFO_LIST = (state,outerData) => {
    state.navinfo = outerData;
}
export const GET_ABOUT_LIST = (state,outerData) => {
    state.copys = outerData;
}
export const GET_CART_LIST = (state,outerData) => {
    state.cart = outerData;
}

export const ON_CHECK_SHOP = (state,outerData) => {
    state.cart[outerData]["checkitem"] = true;
    state.cart[outerData]["shopGoods"].map((items)=>{
      items["checkitem"] = true;
    })
    state.total = CalculateCount(state.cart);
}
export const UN_CHECK_SHOP = (state,outerData) => {
    state.cart[outerData]["checkitem"] = false;
    state.cart[outerData]["shopGoods"].map((items)=>{
      items["checkitem"] = false;
    })
    state.total = CalculateCount(state.cart);

}
export const ON_CHECK_ITEMS = (state,outerData) => {
    state.cart[outerData.index]["shopGoods"][outerData.innerInd]["checkitem"] = true;
    let signal = true;
    state.cart[outerData.index]["shopGoods"].map((items,index)=>{
      if(items["checkitem"] == false){
        signal = false;
      }
    })
    state.cart[outerData.index]["checkitem"] = signal;
    state.total = CalculateCount(state.cart);
}
export const UN_CHECK_ITEMS = (state,outerData) => {
    state.cart[outerData.index]["shopGoods"][outerData.innerInd]["checkitem"] = false;
    state.cart[outerData.index]["checkitem"] = false;
    state.total = CalculateCount(state.cart);
}

export const ALL_ONCHECK = (state,outerData) => {
    let totalPrice = 0;
    let totalCount = 0;
    let tempcart = state.cart
    tempcart.map((value,index)=>{
      value["checkitem"] = true;
      value["shopGoods"].map((innerVal,innerInd)=>{
        innerVal["checkitem"] = true
        totalPrice = totalPrice + parseInt(innerVal["price"]);
        totalCount ++;
      })
    })
    state.cart = tempcart;
    state.total = {
      totalPrice:totalPrice,
      totalCount:totalCount
    }
}
export const ALL_UNCHECK = (state,outerData) => {
    let tempcart = state.cart
    tempcart.map((value,index)=>{
      value["checkitem"] = false;
      value["shopGoods"].map((innerVal,innerInd)=>{
        innerVal["checkitem"] = false
      })
    })
    state.cart = tempcart;
    state.total = {
      totalPrice:0,
      totalCount:0
    }
}
