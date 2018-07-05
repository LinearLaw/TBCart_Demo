import React,{Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../assets/css/goods.css";
//{ getGoodsList,itemCountPlus,itemCountMinus }
import * as GA from "../store/goods/goodsAction.js";

class Goods extends Component{
    render (){
        return ( 
            <div>
                {/*<!--3、tab栏-->*/}
                <section id="tab" v-if="total">
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
                {/**<!--4、详情页--> */}
                <section id="goods_content">
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
                                                <input type="checkbox" onChange={this.checkShops.bind(this,index)} value={item.checkitem} ref={"i_"+index}/>
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

                {/*<!--5、结算-->*/}
                <footer id="foot" className="static">
                    <div className="container clearfix">
                        <div className="con_left fl">
                            <div className="foot_left fl">
                                <input type="checkbox" onClick={this.checkAll.bind(this)} />
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
            </div>
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