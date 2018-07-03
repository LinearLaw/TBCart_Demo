import { createStore,combineReducer,appluMiddleware } from "redux";

import * as Rdc from "./reducer.js";

import thunk from "redux-thunk";


//多个reducer时，combineReducer({ Rdc,Rdc_1 })
let store = createStore(
    combineReducer(Rdc),
    applyMiddleware(thunk)
)
export default store;