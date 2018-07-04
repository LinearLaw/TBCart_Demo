import React,{Component} from "react";
import "../assets/css/goods.css";

class Goods extends Component{
    render (){
        return ( 
            <div>
                {/*<!--3、tab栏-->*/}
                <section id="tab" v-if="total">
                    <div class="container clearfix">
                        <div class="tab_left fl">
                            <ul>
                                {/*<!--这里通过配置路由来实现三者的切换-->*/}
                                <li class="fl">
                                    <a class="active">全部商品 total.totalCount</a>
                                </li>
                                <li class="fl"><a>降价商品 0 </a></li>
                                <li class="fl"><a>库存紧张 0 </a></li>
                            </ul>
                        </div>
                        <div class="tab_right fr">
                            <span>已选商品（不含运费）</span>
                            <span class="allCount">total.totalCount</span>
                            <button>结算</button>
                        </div>
                        <div class="baseLine fl">
                            <div class="line"></div>
                        </div>
                    </div>
                </section>
                {/**<!--4、详情页--> */}
                <section id="goods_content">
                    <div class="container">
                        <div class="table_head clearfix">
                            <div>
                                <input type="checkbox" click="checkAll()" v-model="allSelect"/>
                                <span>全选</span>
                            </div>
                            <div>商品信息</div>
                            <div>单价</div>
                            <div>数量</div>
                            <div>金额</div>
                            <div>操作</div>
                        </div>
                        <div class="shopGoods" v-if="cart">
                            <div class="table_body clearfix" v-for="(item,index) in cart">
                                <div class="shop_name">
                                    <input type="checkbox" click="checkShops($event,index)" v-model="item.checkitem"/>
                                    <span>店铺：</span>
                                    <a>item.shopName</a>
                                </div>
                                <div class="goods_box" v-if="item.shopGoods">
                                <div class="goods_content" v-for="(shopItem,innerInd) in item.shopGoods">
                                    <div class="goods_sel"><input type="checkbox" click="checkItems($event,index,innerInd)" v-model="shopItem.checkitem"/></div>
                                    <div class="goods_pic"><img src="shopItem.imgSrc" alt=""/></div>
                                    <div class="goods_title"><a href="#">shopItem.goTitle</a></div>
                                    <div class="goods_type">
                                        <div>shopItem.goColor}}</div>
                                        <div>shopItem.goType}}</div>
                                    </div>
                                    <div class="goods_price">
                                        <span>￥shopItem.price}}.00</span>
                                    </div>
                                    <div class="goods_count">
                                        <button class="minus" click="minusCount($event,index,innerInd)">-</button>
                                        <input type="text" v-model="shopItem.count"/>
                                        <button class="plus" click="plusCount($event,index,innerInd)">+</button>
                                    </div>
                                    <div class="goods_total">￥shopItem.count * parseInt(shopItem.price)}}.00</div>
                                    <div class="goods_oper">
                                        <div><a>移入收藏夹</a></div>
                                        <div><a ng-click="delThis(item,shopItem)">删除</a></div>
                                        <div class="resemGoods"><a>相似宝贝</a></div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/*<!--5、结算-->*/}
                <footer id="foot" class="normal">
                    <div class="container clearfix">
                        <div class="con_left fl">
                            <div class="foot_left fl">
                                <input type="checkbox" click="checkAll()" v-model="allSelect"/>
                                <label class="fl"><a>全选</a></label>
                                <div><a>删除</a></div>
                                <div><a>清除失效宝贝</a></div>
                                <div><a>移入收藏夹</a></div>
                                <div><a>分享</a></div>
                            </div>
                            <div class="footer_right fr" v-if="total">
                                <div><span>已选商品<span>total.totalCount}}</span>件</span></div>
                                <div><span>合计（不含运费）:<span>total.totalPrice}}.00</span></span>
                                </div>
                            </div>
                        </div>
                        <button class="con_right fr">结 算</button>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Goods;