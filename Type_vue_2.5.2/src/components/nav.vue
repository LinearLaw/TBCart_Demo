<template>
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
</template>

<script>
  export default{

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
</style>