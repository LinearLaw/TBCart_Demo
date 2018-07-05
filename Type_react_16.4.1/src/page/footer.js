import React ,{Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
 
import "../assets/css/footers.css";

import { getServiceList , getInfoList , getCopyList } from "../store/action.js"

class Footers extends Component {
    render (){
        let serviceList = this.props.list.serviceList;
        let navInfoList = this.props.list.navInfoList;
        let copyList = this.props.list.copyList;
        return (
            <footer id="footer">
                <div className="container">
                    <div className="foot_paterner">
                        <ul  className="clearfix" v-if="service">
                            {
                                serviceList.map((item,index)=>{
                                    return (<li key={index}><a href={item.url}>{item.content}</a></li>)
                                })
                            }
                        </ul>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className="foot_copyright">
                        <div className="line_1">
                            <ul className="clearfix" v-if="navinfo">
                            {
                                navInfoList.map((item,index)=>{
                                    return (<li key={index}><a href={item.url}>{item.content}</a></li>)
                                })
                            }
                            </ul>
                        </div>
                        <div className="line_2">
                            <ul className="clearfix" v-if="copys">
                            {
                                copyList.map((item,index)=>{
                                    return (
                                        <li key={index}><a href={item.url}>{item.content}</a></li>
                                    )
                                })
                            }
                                
                            </ul>
                        </div>
                        <div className="line_3 clearfix">
                            <div className="marker fl"></div>
                            <span>浙公网安备 33010002000078号</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.actions.getServiceList();
        this.props.actions.getInfoList();
        this.props.actions.getCopyList();
    }
}

//mapState的时候，map的应该是reducer下的方法，具体的变量挂在了这个reducer下面
function mapState(state){
    return {
        list:state.list,
    }
}
function mapActions(dispatch){
    return {
        actions:bindActionCreators({
            getServiceList:getServiceList,
            getCopyList:getCopyList,
            getInfoList:getInfoList
        },dispatch)
    }
}

export default connect(mapState,mapActions)(Footers);

