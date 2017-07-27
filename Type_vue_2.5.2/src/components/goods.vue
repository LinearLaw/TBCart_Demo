<template>
    <div>
        <!--3、tab栏-->
        <section id="tab" v-if="total">
            <div class="container clearfix">
                <div class="tab_left fl">
                    <ul>
                        <!--这里通过配置路由来实现三者的切换-->
                        <li class="fl">
                            <a ui-sref="agoods" class="active">全部商品 {{total.totalCount}}</a>
                        </li>
                        <li class="fl"><a>降价商品 0 </a></li>
                        <li class="fl"><a>库存紧张 0 </a></li>
                    </ul>
                </div>
                <div class="tab_right fr">
                    <span>已选商品（不含运费）</span>
                    <span class="allCount">{{total.totalCount}}</span>
                    <button>结算</button>
                </div>
                <div class="baseLine fl">
                    <div class="line"></div>
                </div>
            </div>
        </section>
        <!--4、详情页-->
        <section id="goods_content">
            <div class="container">
                <div class="table_head clearfix">
                    <div>
                        <input type="checkbox" @click="checkAll()" v-model="allSelect"/>
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
                            <input type="checkbox" @click="checkShops($event,index)" v-model="item.checkitem"/>
                            <span>店铺：</span>
                            <a>{{item.shopName}}</a>
                        </div>
                        <div class="goods_box" v-if="item.shopGoods">
                          <div class="goods_content" v-for="(shopItem,innerInd) in item.shopGoods">
                              <div class="goods_sel"><input type="checkbox" @click="checkItems($event,index,innerInd)" v-model="shopItem.checkitem"/></div>
                              <div class="goods_pic"><img :src="shopItem.imgSrc" alt=""/></div>
                              <div class="goods_title"><a href="#">{{shopItem.goTitle}}</a></div>
                              <div class="goods_type">
                                  <div>{{shopItem.goColor}}</div>
                                  <div>{{shopItem.goType}}</div>
                              </div>
                              <div class="goods_price">
                                  <span>￥{{shopItem.price}}.00</span>
                              </div>
                              <div class="goods_count">
                                  <button class="minus" ng-click="shopItem.minus()">-</button>
                                  <input type="text" ng-model="shopItem.count"/>
                                  <button class="plus" ng-click="shopItem.plus()">+</button>
                              </div>
                              <div class="goods_total">￥{{shopItem.count * parseInt(shopItem.price)}}.00</div>
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

        <!--5、结算-->
        <footer id="foot" class="normal">
            <div class="container clearfix">
                <div class="con_left fl">
                    <div class="foot_left fl">
                        <input type="checkbox" @click="checkAll()" v-model="allSelect"/>
                        <label class="fl"><a>全选</a></label>
                        <div><a>删除</a></div>
                        <div><a>清除失效宝贝</a></div>
                        <div><a>移入收藏夹</a></div>
                        <div><a>分享</a></div>
                    </div>
                    <div class="footer_right fr" v-if="total">
                        <div><span>已选商品<span>{{total.totalCount}}</span>件</span></div>
                        <div><span>合计（不含运费）:<span>{{total.totalPrice}}.00</span></span>
                        </div>
                    </div>
                </div>
                <button class="con_right fr">结 算</button>
            </div>
        </footer>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapActions} from "vuex"
    export default{
        data(){
            return{
                allSelect:false
            }
        },
        created(){
          this.getCartList();
        },
        computed:{
          /**
           * @description  映射state
           */
          ...mapState(["cart","total"])
        },
        methods:{
          /**
           * @description  映射mutations 和 actions
           */
          ...mapMutations([
            "ON_CHECK_SHOP" , "UN_CHECK_SHOP",
            "ON_CHECK_ITEMS", "UN_CHECK_ITEMS",
            "ALL_ONCHECK"   , "ALL_UNCHECK" ]),
          ...mapActions(["getCartList"]),
          /**
           * [description] 选择单个商品
           */
          checkItems(event,index,innerInd){
            if(this.cart[index]["shopGoods"][innerInd]["checkitem"]!=true){
              this.ON_CHECK_ITEMS({index:index,innerInd:innerInd})
            }else{
              this.UN_CHECK_ITEMS({index:index,innerInd:innerInd})
            }
          },
          /**
           * [description] 选择整个店铺的所有商品
           */
          checkShops(event,index){
            if(this.cart[index]["checkitem"]!=true){
              this.ON_CHECK_SHOP(index);
            }else{
              this.UN_CHECK_SHOP(index);
            }
          },
          /**
           * [description] 选择购物车内所有商品
           */
          checkAll(){
            if(this.allSelect!=true){
              this.ALL_ONCHECK();
            }else{
              this.ALL_UNCHECK();
            }
          }
        }
    }
</script>
<style lang="less" scoped>
//3、tab栏
#tab {
  > .container {
    > .tab_left {
      padding-top: 5px;
      height: 100%;
      > ul {
        > li {
          height:35px;
          font:bold 16px "microsoft yahei";
          cursor: pointer;
          padding-bottom:10px;
          >a{
            padding-left: 20px;
            padding-right:30px;
            border-left:1px solid #f0f0f0;
            color:rgb(60, 60, 60);
          }
          & + li {
          }
          >.active{
            color:#ff4400;
          }
        }
        >li:first-child{
          a{
            border:0;
          }
        }
      }
    }
    > .tab_right {
      font-size:14px;
      font-family: "宋体";
      >.allCount{
        color:#ff4400;
        font-weight:bold;
      }
      > button {
        width: 56px;
        height: 26px;
        border-radius: 4px;
        background-color: #AAA;
        color: #fff;
        &:hover {
          background-color: #ff4400;
        }
      }
    }
    >.baseLine{
      width: 100%;
      height:2px;
      background-color: #f0f0f0;
      >.line{
        width: 128px;
        height: 100%;
        background-color: #ff4400;
      }
    }
  }
}
//4、详情页
#goods_content {
  > .container {
    > .table_head {
      padding:15px 0;
      padding-left:10px;
      > div {
        float: left;
        font-size:14px;
      }
      > div:first-child {
        width: 150px;
      }
      > div:nth-child(2) {
        width: 390px;
      }
      > div:nth-child(3) {
        width: 135px;
      }
      > div:nth-child(4) {
        width: 135px;
      }
      > div:nth-child(5) {
        width: 100px;
      }
      > div:nth-child(6) {
        width: 65px;
      }
    }
    > .shopGoods {
      font-size:14px;
      > .table_body {
        margin-top:10px;
        > .shop_name {
          width: 100%;
          height: 35px;
          padding-left:10px;
          >a,span{
            font:12px "宋体";
          }
        }
        >.goods_box{
          border: 1px solid rgb(232, 232, 232);
          width: 100%;
          > .goods_content {
            height: 120px;
            padding: 15px 20px;
            &+.goods_content{
              border-top:1px solid rgb(232,232,232);
            }
            background-color: #fcfcfc;
            > div {
              height: 100%;
              float: left;
              &.goods_sel {
                width: 25px;
              }
              &.goods_pic {
                width: 90px;
              }
              &.goods_title {
                width: 220px;
                padding-right:40px;
                >a{
                  font-size:12px;
                  color:rgb(60,60,60);
                  &:hover{
                    color:#ff4400;
                    border-bottom:1px solid #ff4400;
                  }
                }
              }
              &.goods_type {
                width: 170px;
                font-size:12px;
                color:rgb(156, 156, 156);
                >div{
                  display: block;
                }
              }
              &.goods_price {
                width: 135px;
                font: bold 14px/40px "宋体";
                color:rgb(60, 60, 60);
                >span{
                  font-family: Verdana,Tahoma,arial;
                }
              }
              &.goods_count {
                width: 135px;
                padding-top: 10px;
                button {
                  width: 20px;
                  height: 25px;
                  background-color: #F0F0F0;
                  cursor: pointer;
                  &:hover {
                    border: 1px solid #ff4400;
                  }
                }
                > input {
                  width: 42px;
                  height: 27px;
                  text-align: center;
                }
              }
              &.goods_total {
                width: 100px;
                font: bold 16px/40px Verdana,Tahoma,arial;
                color: #ff4400;
              }
              &.goods_oper {
                width: 65px;
                >div{
                  >a{
                    font:12px "宋体";
                    cursor: pointer;
                    &:hover{
                      color:#ff4400;
                      border-bottom: 1px solid #ff4400;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
//5、结算
#foot {
  display: block;
    .container {
    margin-top:20px;
    height:auto;
    background-color: #E5E5E5;
    > .con_left {
      width: 88%;
      padding: 10px 5px;
      line-height:40px;
      > .foot_left {
        > input, div,label{
          float: left;
        }
        >input{
          margin-right:10px;
          margin-top:10px;
        }
        >div,label{
          margin-right:30px;
          >a{
            font:12px "宋体";
            cursor: pointer;
            &:hover{
              color:#ff4400;
              border-bottom: 1px solid #ff4400;
            }
          }
        }
      }
      > .footer_right {
        > div {
          float: left;
          margin-left: 20px;
          padding-top:8px;
          font:12px "宋体";
          >span{
            >span{
              margin:0 5px;
              font:bold 20px tohoma,arial;
              color:#ff4400;
            }
          }
        }
      }
    }
    > button {
      width: 12%;
      height: 60px;
      border: 0;
      outline: 0;
      color: #fff;
      font-size: 20px;
      float: right;
      background-color: #aaa;
      &:hover {
        background-color: #ff4400;
      }
    }
  }
}
</style>


