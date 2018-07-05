import * as acType from "../action-type.js";
import axios from "axios";


//获取商品列表
export const getGoodsList = (data)=>{
    return function(dispatch){
        try{
            axios.get("/static/json/cart.json").then((res)=>{
                let _res = res;
                if(typeof res === "string"){
                    _res = JSON.parse(res);
                }
                dispatch({
                    type:acType.GET_GOODS_LIST,
                    data:_res
                })
            })
        }catch(err){throw err;}
    }
}

//增减商品数量
export const itemCountPlus = (data)=>{
    return {
        type:acType.ITEM_COUNT_PLUS,
        data:data
    }
}
export const itemCountMinus = (data)=>{
    return {
        type:acType.ITEM_COUNT_MINUS,
        data:data
    }
}

//选中item
export const checkItems = (data)=>{
    return {
        type:acType.CHECK_ITEMS,
        data:data
    }
}
export const unCheckItems = (data)=>{
    return {
        type:acType.UN_CHECK_ITEMS,
        data:data
    }
}

//选中shop
export const checkShop = (data)=>{
    return {
        type:acType.CHECK_SHOP,
        data:data
    }
}

//选中所有内容
export const checkAllItems = (data)=>{
    return {
        type:acType.CHECK_ALL_ITEMS,
        data:data
    }
}
export const unCheckAllItems = (data)=>{
    return {
        type:acType.UN_CHECK_ALL_ITEMS,
        data:data
    }
}