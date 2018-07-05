import React,{Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as GA from "../store/goods/goodsAction.js";

class Totals extends Component{
    render (){
        return ( 
                <footer id="foot" className="static">{/*<!--5、结算-->*/}
                    <div className="container clearfix">
                        <div className="con_left fl">
                            <div className="foot_left fl">
                                <input type="checkbox" onClick={this.checkAll.bind(this)} checked={!!this.props.goods.allCheck}/>
                                <label className="fl"><a>全选</a></label>
                                <div><a>删除</a></div>
                                <div><a>清除失效宝贝</a></div>
                                <div><a>移入收藏夹</a></div>
                                <div><a>分享</a></div>
                            </div>
                            <div className="footer_right fr" v-if="total">
                                <div><span>已选商品<span>{this.props.goods.total.totalCount}</span>件</span></div>
                                <div><span>合计（不含运费）:<span>{this.props.goods.total.totalPrice}.00</span></span>
                                </div>
                            </div>
                        </div>
                        <button className="con_right fr">结 算</button>
                    </div>
                </footer>
        )
    }
    componentDidMount(){

    }
    checkAll(_this){
        this.props.actions.checkAllItems();
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

export default connect(mapState,mapActions)(Totals);