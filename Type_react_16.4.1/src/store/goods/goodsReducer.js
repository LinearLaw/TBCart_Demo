import * as acType from "../action-type.js";

let defaultState = {
    goodsList: [],
    total: {
        totalPrice: 0,
        totalCount: 0
    },
    allCheck:false
}
const CalculateCount = function (obj) {
    let totalPrice = 0;
    let totalCount = 0;
    obj.map((value, index) => {
        value["shopGoods"].map((innerVal, innerInd) => {
            if (innerVal["checkitem"] == true) {
                totalPrice = totalPrice + parseInt(innerVal["price"]) * parseInt(innerVal["count"]);
                totalCount ++;
                return;
            }
        })
        return;
    })
    return {totalPrice,totalCount}
    
}
//获取商品列表
export const goods = (state = defaultState, action) => {
    const { goodsList,total,allCheck } = state;
    switch (action.type) {
        case acType.GET_GOODS_LIST:
            return {
                ...state,
                goodsList: action.data.data
            };
        case acType.ITEM_COUNT_PLUS:
            /* 增加数量 */
            let checkout_p = goodsList[action.data.index]["shopGoods"][action.data.innerInd]["checkitem"];
            goodsList[action.data.index]["shopGoods"][action.data.innerInd]["count"]++;
            if (checkout_p == true) {
                total.totalPrice = total.totalPrice + parseInt(goodsList[action.data.index]["shopGoods"][action.data.innerInd]["price"]);
            }
            return {
                ...state,
                total,
                goodsList
            };
        case acType.ITEM_COUNT_MINUS:
            /* 减少数量 */
            let checkout_m = goodsList[action.data.index]["shopGoods"][action.data.innerInd]["checkitem"];
            let count = goodsList[action.data.index]["shopGoods"][action.data.innerInd]["count"];
            if (count <= 0) {
                goodsList[action.data.index]["shopGoods"][action.data.innerInd]["count"] = 0;
                goodsList[action.data.index]["shopGoods"][action.data.innerInd]["checkitem"] = false;
                goodsList[action.data.index]["checkitem"] = false;
            } else {
                count--;
                goodsList[action.data.index]["shopGoods"][action.data.innerInd]["count"] = count;
                if (checkout_m == true) {
                    total.totalPrice = total.totalPrice - parseInt(goodsList[action.data.index]["shopGoods"][action.data.innerInd]["price"]);
                }
            }
            return {
                ...state,
                total,
                goodsList
            };
        case acType.CHECK_ITEMS:/* 选中某一个item */
            goodsList[action.data.index]["shopGoods"][action.data.innerInd]["checkitem"] = true;
            goodsList[action.data.index]["checkitem"] = action.data.signal;
            total.totalPrice = CalculateCount(goodsList).totalPrice;
            total.totalCount++;
            return {
                goodsList,
                total
            }
        case acType.UN_CHECK_ITEMS: /* 取消选中某一个item */
            goodsList[action.data.index]["shopGoods"][action.data.innerInd]["checkitem"] = false;
            goodsList[action.data.index]["checkitem"] = false;
            total.totalPrice = CalculateCount(goodsList).totalPrice;
            total.totalCount--;
            if(total.totalCount<=0){total.totalCount=0;}
            return {
                goodsList,
                total
            }
        case acType.CHECK_SHOP:/* 选中店铺 */
            goodsList[action.data.index]["checkitem"] = action.data.val;
            goodsList[action.data.index]["shopGoods"].map((items)=>{
                items["checkitem"] = action.data.val;
            })
            let calObj = CalculateCount(goodsList);
            total.totalPrice = calObj.totalPrice;
            total.totalCount = calObj.totalCount;
            return {
                goodsList,
                total
            }
        case acType.CHECK_ALL_ITEMS:/* 选中所有 */
            let totalPrice = 0;
            let totalCount = 0;

            goodsList.map((value,index)=>{
                value["checkitem"] = !allCheck;
                value["shopGoods"].map((innerVal,innerInd)=>{
                    innerVal["checkitem"] = !allCheck;
                    totalPrice = totalPrice + parseInt(innerVal["price"]) * parseInt(innerVal["count"]);
                    totalCount ++;
                });
            })
            return {
                goodsList,
                total:{
                    totalPrice:totalPrice,
                    totalCount:totalCount
                },
                allCheck:!allCheck
            }
            
        case acType.UN_CHECK_ALL_ITEMS:/* 取消选中所有 */

        default:
            return state;
    }
}