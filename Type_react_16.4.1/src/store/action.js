import * as acType  from "./action-type.js";
import axios from "axios";



//获取服务列表数据
export const getServiceList = (data)=>{
    return function(dispatch){
        try{
            axios.get("/static/json/service.json").then((res)=>{
                let _res = res;
                if(typeof res == "string"){
                    _res = JSON.parse(res);
                }
                dispatch({
                    type:acType.GET_SERVICE_LIST,
                    data:_res
                })
            })
        }catch(err){
            throw err;
        }
    }
}

//获取footer链接列表
export const getInfoList = (data)=>{
    return function(dispatch){
        try{
            axios.get("/static/json/navinfo.json").then((res)=>{
                let _res = res;
                if(typeof res == "string"){
                    _res = JSON.parse(res);
                }
                dispatch({
                    type:acType.GET_INFO_LIST,
                    data:_res
                })
            })
        }catch(err){throw err}
    }
}

//获取版权信息
export const getCopyList = (data)=>{
    return function(dispatch){
        try{
            axios.get("/static/json/copys.json").then((res)=>{
                let _res = res;
                if(typeof res == "string"){
                    _res = JSON.parse(res);
                }
                dispatch({
                    type:acType.GET_COPY_LIST,
                    data:_res
                })
            })
        }catch(err){throw err;}
    }
}