<template>
    <div>
        <!--1、顶部导航栏-->
        <div id="nav">
            <div id="TB_nav">
                <div class="container">
                    <!--顶部导航栏可作为一个模块存在-->
                    <ul class="left_Nav fl">
                        <li class="otherColor"><a>username</a></li>
                        <li><a>消息</a></li>
                        <li class="otherColor"><a>手机逛淘宝</a></li>
                    </ul>
                    <ul class="right_nav fr">
                        <li><a>淘宝网首页</a></li>
                        <li class="otherColor"><a>我的淘宝</a></li>
                        <li><a>购物车</a></li>
                        <li class="otherColor"><a>收藏夹</a></li>
                        <li class="otherColor"><a>商品分类</a></li>
                        <li class="otherColor"><a>卖家中心</a></li>
                        <li class="otherColor"><a>联系客服</a></li>
                        <li><a>网站导航</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!--2、logo-->
        <div id="logo">
            <div class="container">
                <div class="head_left_logo fl">
                    <div class="logo fl"/>
                </div>
                <div class="tb_title">淘宝网</div>

                <h1 class="fl">购物车</h1>
            </div>
            <div class="head_right_search fr">
                <select name="sear_items" id="sear_items">
                    <option selected>宝 贝</option>
                    <option>天 猫</option>
                    <option>店 铺</option>
                </select>
                <input type="text" name="search"/>
                <button>搜 索</button>
            </div>
        </div>

        <!--3、购物车主体内容-->
        <div>
            <router-view></router-view>
        </div>

        <!--4、热卖广告-->
        <div id="ads">
            <div class="container">
                <!-- tab标题栏 -->
                <div class="hot_ads_title">
                    <ul>
                        <li><a href="#">掌柜热卖</a></li>
                        <li><a href="#">最近收藏的</a></li>
                        <li><a href="#">最近浏览的</a></li>
                        <li><a href="#">猜你喜欢的</a></li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="hot_ads_content">
                    <!-- 小轮播图 -->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">Slide 1</div>
                            <div class="swiper-slide">Slide 2</div>
                            <div class="swiper-slide">Slide 3</div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>

        <!--5、底部-->
        <footer id="footer">
            <div class="container">
                <div class="foot_paterner">
                    <ul  class="clearfix">
                        <li ng-repeat="server in service"><a href="server.url">server.content</a></li>
                    </ul>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="foot_copyright">
                    <div class="line_1">
                        <ul class="clearfix">
                            <li ng-repeat="infos in navinfo"><a href="infos.url">infos.content</a></li>
                        </ul>
                    </div>
                    <div class="line_2">
                        <ul class="clearfix">
                            <li ng-repeat="about in copys"><a href="about.url">about.content</a></li>
                        </ul>
                    </div>
                    <div class="line_3 clearfix">
                        <div class="marker fl"></div>
                        <span>浙公网安备 33010002000078号</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
/**
 * @desc  路由入口
 */

export default {
  name: 'app',
  data(){
      return{

      }
  },
  mounted(){
    
  }
}
</script>
<style lang="less" scoped>
//1、顶部导航栏
#nav {
  > #TB_nav {
    width: 100%;
    height: 35px;
    background-color: rgb(245, 245, 245);
    border-bottom: rgb(238, 238, 238);
    >.container{
      >ul{
        >li{
          float: left;
          >a{
            cursor: pointer;
            font:12px/35px tahoma,arial,"Hiragino Sans GB","宋体",sans-serif;
            &:hover{
              color:#ff4400;
            }
          }
        }
        >.otherColor{
          color:rgb(108, 108, 108);
        }
      }
      >.left_Nav{
        >li{
          margin-right:20px;
        }
      }
      >.right_nav{
        >li{
          margin-left:20px;
        }
      }
    }
  }
}

//2、LOGO部分
#logo {
  > .container {
    height: 98px;
    padding: 20px 0;
    >.head_left_logo{
      >.tb_title{
        position: absolute;
        opacity:0;
      }
      >.logo{
        width: 105px;
        height: 45px;
        background-size:300px 225px;
        background-image: url("./assets/img/logo.png");
        background-position:  -150px -150px;
        vertical-align: middle;
      }
      >h1{
        margin-left: 12px;
        font-size:22px;
        color:rgb(60, 60, 60);
        line-height: 45px;
      }
    }
    >.head_right_search{
      width: 510px;
      border:3px solid #ff4400;
      select,button,input{
        border:0;
        outline:0;
      }
      >button{
        width: 90px;
        height: 30px;
        float: right;
        background-color: #ff4400;
        font:18px/30px "Microsoft YaHei";
        color:#fff;
        &:hover{
          background-color: #F52B00;
        }
      }
      >select{
        width: 75px;
        height:30px;
        padding-left:15px;
        background-color: rgb(245,245,245);
      }
    }
  }
}
//5、结算
#foot {
  display: block;
  > .container {
    margin-top:20px;
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
