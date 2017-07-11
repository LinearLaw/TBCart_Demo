
import * as types from './mutation-types'

const CalculateCount = function(obj){
  let totalPrice = 0;
  let totalCount = 0;
  obj.map((value,index)=>{
    obj["shopGoods"].map((innerVal,innerInd)=>{
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
export const [types["GET_SERVICE_LIST"]] = (state,outerData) => {
    state.service = outerData;
}
export const [types["GET_INFO_LIST"]] = (state,outerData) => {
    state.navinfo = outerData;
}
export const [types["GET_ABOUT_LIST"]] = (state,outerData) => {
    state.copys = outerData;
}
export const [types["GET_CART_LIST"]] = (state,outerData) => {
    state.cart = outerData;
}

export const [types["ON_CHECK_SHOP"]] = (state,outerData) => {
    state.cart[outerData]["checkitem"] = true;
    state.cart[outerData].map((items)=>{
      items["checkitem"] = true;
    })
    state.total = CalculateCount(state.cart);
}
export const [types["UN_CHECK_SHOP"]] = (state,outerData) => {
    state.cart[outerData]["checkitem"] = false;
    state.cart[outerData].map((items)=>{
      items["checkitem"] = false;
    })
    state.total = CalculateCount(state.cart);

}
export const [types["ON_CHECK_ITEMS"]] = (state,outerData) => {
    state.cart[outerData.index]["shopGoods"][outerData.innerInd]["checkitem"] = true;
    let signal = true;
    state.cart[outerData.index]["shopGoods"].map((items,index)=>{
      if(items["checkitem"] == false){
        signal = false;
      }
    })
    state.cart[outerData]["checkitem"] = signal;
    state.total = CalculateCount(state.cart);
}
export const [types["UN_CHECK_ITEMS"]] = (state,outerData) => {
    state.cart[outerData.index]["shopGoods"][outerData.innerInd]["checkitem"] = false;
    state.cart[outerData]["checkitem"] = false;
    state.total = CalculateCount(state.cart);
}

export const [types["ALL_CHECK"]] = (state,outerData) => {
    let totalPrice = 0;
    let totalCount = 0;
    let tempcart = state.cart
    tempcart.map((value,index)=>{
      value["checkitem"] = true;
      tempcart["shopGoods"].map((innerVal,innerInd)=>{
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
export const [types["ALL_UNCHECK"]] = (state,outerData) => {
    let tempcart = state.cart
    tempcart.map((value,index)=>{
      value["checkitem"] = false;
      tempcart["shopGoods"].map((innerVal,innerInd)=>{
        innerVal["checkitem"] = false
      })
    })
    state.cart = tempcart;
    state.total = {
      totalPrice:0,
      totalCount:0
    }
}
