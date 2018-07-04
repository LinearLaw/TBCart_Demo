<template>
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
</template>

<script>
  import {mapState,mapActions} from "vuex"
  export default{
    created(){
        this.getServiceList();
        this.getInfosList();
        this.getAboutList();
    },
    computed:{
        ...mapState(["service","navinfo","copys"])
    },
    methods:{
        ...mapActions(["getServiceList","getInfosList","getAboutList"])
    }
  }
</script>

<style lang="less" scoped>
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
                    background-image: url("../assets/img/copy.jpg");
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