import React,{Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as GA from "../store/goods/goodsAction.js";

class Tabs extends Component{
    render (){
        return ( 
            <section id="tab">{/*<!--3、tab栏-->*/}
                <div className="container clearfix">
                    <div className="tab_left fl">
                        <ul>
                            {/*<!--这里通过配置路由来实现三者的切换-->*/}
                            <li className="fl">
                                <a className="active">全部商品 {this.props.goods.total.totalCount}</a>
                            </li>
                            <li className="fl"><a>降价商品 0 </a></li>
                            <li className="fl"><a>库存紧张 0 </a></li>
                        </ul>
                    </div>
                    <div className="tab_right fr">
                        <span>已选商品（不含运费）</span>
                        <span className="allCount">{this.props.goods.total.totalCount}</span>
                        <button>结算</button>
                    </div>
                    <div className="baseLine fl">
                        <div className="line"></div>
                    </div>
                </div>
            </section>
        )
    }
    componentDidMount(){

    }
    checkAll(_this){
        console.log(_this);
        // this.props.actions.checkAllItems();
    }
}
function mapState(state){
    return {
        goods:state.goods
    }
}
function mapActions(dispatch){
    return {
        actions:bindActionCreators({
            ...GA
        },dispatch)
    }
}

export default connect(mapState,mapActions)(Tabs);