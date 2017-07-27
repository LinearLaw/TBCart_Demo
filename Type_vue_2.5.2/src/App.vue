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
        <section id="logo">
            <div class="container">
                <div class="head_left_logo fl">
                    <div class="logo fl"></div>
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
        </section>

        <!--3、购物车主体内容-->
        <section>
            <router-view></router-view>
        </section>

        <!--4、热卖广告-->
        <section id="ads">
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
        </section>

        <!--5、底部-->
        <footer id="footer">
            <div class="container">
                <div class="foot_paterner">
                    <ul  class="clearfix" v-if="service">
                        <li v-for="server in service"><a href="server.url">{{server.content}}</a></li>
                    </ul>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="foot_copyright">
                    <div class="line_1">
                        <ul class="clearfix" v-if="navinfo">
                            <li v-for="infos in navinfo"><a href="infos.url">{{infos.content}}</a></li>
                        </ul>
                    </div>
                    <div class="line_2">
                        <ul class="clearfix" v-if="copys">
                            <li v-for="about in copys"><a href="about.url">{{about.content}}</a></li>
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
import {mapState,mapActions} from "vuex"
export default {
  name: 'app',
  data(){
      return{
        services:[],
        navinfos:[],
        copy:[]
      }
  },
  created(){
    this.getServiceList();
    this.getInfosList();
    this.getAboutList();
  },
  computed:{
      ...mapState(["service","navinfo","copys"])
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 1500,
            autoplayDisableOnInteraction: false,
            observer:true,
            observeParents:true
    });

  },
  methods:{
      ...mapActions(["getServiceList","getInfosList","getAboutList"])
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
        .head_right_search{
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
/*热卖广告*/
#ads{
    margin-top:15px;
    >.container{
        background-color: #fff;
        >.hot_ads_title{
            width: 100%;
            height:100%;
            >ul{
                height:100%;
                >li{
                    width: 80px;
                    height: 35px;
                    float: left;
                    text-align: center;
                    >a{
                        color:rgb(60,60,60);
                        font:bold 14px/35px "Hiragino Sans GB","Lantinghei SC","Microsoft Yahei",SimSun
                    }
                    &+li{
                        width: 100px;
                        >a{
                            padding-left:15px;
                            border-left:1px solid #f0f0f0;
                        }
                    }
                }
            }
        }
        >.line{
            width: 100%;
            height: 2px;
            background-color: #f0f0f0;
            float: left;
            display: block;
            margin-bottom:25px;
        }
        >.hot_ads_content{
            width: 100%;
            height:100%;
        }
    }
}
#footer{
    padding-bottom: 30px;
    >.container{
        ul{
            text-align: center;
            >li{
                float: left;
                padding:5px 0;
                >a{
                    padding:0 10px;
                    font:12px "Hiragino Sans GB","Lantinghei SC","Microsoft Yahei",SimSun;
                    color:rgb(60,60,60);
                }
            }
        }
        >.foot_paterner{
            height:60px;
            display: block;
            border-bottom: 1px solid #f0f0f0;
            >ul{
                >li{
                    &+li{
                        >a{
                            border-left:1px solid #f0f0f0;
                        }
                    }
                }
            }
        }
        >.foot_copyright{
            >.line_1{
                width: 100%;
                height:35px;
                display: block;
            }
            >.line_2{
                height:70px;
                >ul{
                    >li{
                        &+li{
                            >a{
                                border-left:1px solid #f0f0f0;
                            }
                        }
                        &:last-child{
                            >a{
                                border:0;
                            }
                        }
                    }
                }
            }
            >.line_3{
                padding-left:10px;
                >.marker{
                    width: 20px;
                    height: 25px;
                    margin:0 5px;
                    background-size:880px 35px;
                    background-image: url("./assets/img/copy.jpg");
                    background-position:  -860px 0px;
                    vertical-align: middle;
                }
                >span{
                    float: left;
                    padding-top:2px;
                    font:12px "Hiragino Sans GB","Lantinghei SC","Microsoft Yahei",SimSun;
                }
            }
        }
    }
}
</style>
