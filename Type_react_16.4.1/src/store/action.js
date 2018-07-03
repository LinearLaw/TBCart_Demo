import * as acType  from "./action-type.js"


export const list = (data)=>{
    return {
        type:acType.ADD,
        data
    }
}