<template>
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
</template>

<script>
  export default{

  }
</script>
<style lang="less" scoped>
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
</style>