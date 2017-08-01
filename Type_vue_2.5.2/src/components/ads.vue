<template>
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
</template>

<script>
  export default{
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
  }
</script>
<style lang="less" scoped>

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
</style>