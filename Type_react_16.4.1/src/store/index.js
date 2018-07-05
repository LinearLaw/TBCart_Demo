import { createStore,combineReducers,applyMiddleware } from "redux";

import * as Rdc from "./reducer.js";
import * as GoodsRdc from "./goods/goodsReducer.js"

import thunk from "redux-thunk";


//多个reducer时，combineReducer({ Rdc,Rdc_1 })
let store = createStore(
    // combineReducers(Rdc),
    combineReducers({ ...Rdc,...GoodsRdc }),
    applyMiddleware(thunk)
)
export default store;