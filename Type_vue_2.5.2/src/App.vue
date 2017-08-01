<template>
    <div>
        <!--1、顶部导航栏-->
        <Nav></Nav>
        <!--2、logo-->
        <Logo></Logo>

        <!--3、购物车主体内容-->
        <section>
            <router-view></router-view>
        </section>

        <!--4、热卖广告-->
        <Ads></Ads>

        <!--5、底部-->
        <Footers></Footers>
    </div>
</template>

<script>

import Nav from "./components/nav.vue"
import Logo from "./components/logo.vue"
import Ads from "./components/ads.vue"
import Footers from "./components/footers.vue"
export default {
    name: 'app',
    components:{
        Nav,Logo,Ads,Footers
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>

</style>
