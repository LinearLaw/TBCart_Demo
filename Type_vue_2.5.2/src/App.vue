<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
/**
 * @desc  路由入口
 */
import Headers from "@/components/common/Header.vue"
import Tabs from "@/components/common/Tabs.vue"

export default {
  name: 'app',
  components:{
    Headers,Tabs
  },
  mounted(){
    
  }
}
</script>
<style scroped>

</style>
