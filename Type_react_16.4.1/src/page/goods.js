import React,{Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../assets/css/goods.css";
//{ getGoodsList,itemCountPlus,itemCountMinus }
import * as GA from "../store/goods/goodsAction.js";

class Goods extends Component{
    render (){
        return ( 
            <section id="goods_content">{/**<!--4、详情页--> */}
                <div className="container">
                    <div className="table_head clearfix">
                        <div>
                            <input type="checkbox" onClick={this.checkAll.bind(this)} />
                            <span>全选</span>
                        </div>
                        <div>商品信息</div>
                        <div>单价</div>
                        <div>数量</div>
                        <div>金额</div>
                        <div>操作</div>
                    </div>
                    <div className="shopGoods" v-if="cart">
                        {
                            this.props.goods.goodsList.map((item,index)=>{
                                return (
                                    <div className="table_body clearfix" key={index}>
                                        <div className="shop_name">
                                            <input type="checkbox" onChange={this.checkShops.bind(this,index)} value={item["checkitem"]} ref={"i_"+index}/>
                                            <span>店铺：</span>
                                            <a>{item.shopName}</a>
                                        </div>
                                        <div className="goods_box" >
                                        {
                                            item.shopGoods.map((shopItem,innerInd)=>{
                                                return (
                                                    <div className="goods_content" key={innerInd}>
                                                        <div className="goods_sel">
                                                            <input type="checkbox" onChange={this.checkItems.bind(this,index,innerInd)} defaultValue={shopItem.checkitem} ref={"i_"+index+innerInd}/>
                                                        </div>
                                                        <div className="goods_pic"><img src={require('../assets/img/tb20.jpg')} alt=""/></div>
                                                        <div className="goods_title"><a href="#">{shopItem.goTitle}</a></div>
                                                        <div className="goods_type">
                                                            <div>{shopItem.goColor}</div>
                                                            <div>{shopItem.goType}</div>
                                                        </div>
                                                        <div className="goods_price">
                                                            <span>￥{shopItem.price}.00</span>
                                                        </div>
                                                        <div className="goods_count">
                                                            <button className="minus" onClick={this.minusCount.bind(this,index,innerInd)}>-</button>
                                                            <input type="text" value={shopItem.count} readOnly="readonly"/>
                                                            <button className="plus" onClick={this.plusCount.bind(this,index,innerInd)}>+</button>
                                                        </div>
                                                        <div className="goods_total">￥{shopItem.count * parseInt(shopItem.price)}.00</div>
                                                        <div className="goods_oper">
                                                            <div><a>移入收藏夹</a></div>
                                                            <div><a ng-click="delThis(item,shopItem)">删除</a></div>
                                                            <div className="resemGoods"><a>相似宝贝</a></div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
    componentDidMount(){
        this.props.actions.getGoodsList();
    }
    plusCount(index,innerInd,_this){
        this.props.actions.itemCountPlus({
            index,
            innerInd
        })
    }
    minusCount(index,innerInd,_this){
        this.props.actions.itemCountMinus({
            index,
            innerInd
        })
    }
    checkAll(_this){
        console.log(_this);
        // this.props.actions.checkAllItems();
    }
    checkShops(index,_this){
        let str = "i_"+index;
        let val = this.refs[str].checked;
        let _item = this.props.goods.goodsList[index];
        let that = this;
        _item["shopGoods"].map((items,_index)=>{
            let _str = str + _index;
            that.refs[_str].checked = val;
        })
        this.props.actions.checkShop({
            index,
            val
        })
    }
    checkItems(index,innerInd,_this){
        let str = "i_"+index+innerInd;
        let val = this.refs[str].checked;
        let _item = this.props.goods.goodsList[index];
        if(val == true){
            let signal = true;
            _item["shopGoods"].map((items,index)=>{
                if(items["checkitem"] == false){
                    signal = false;
                }
            })
            this.props.actions.checkItems({
                index,
                innerInd,
                signal
            })
        }else{
            this.props.actions.unCheckItems({
                index,
                innerInd,
            })
        }
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

export default connect(mapState,mapActions)(Goods);