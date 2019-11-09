<template>
  <div class = "lay-out-box">
    <Tab/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar/>
  </div>
</template>
<script>
import Tab from '../components/common/Tab'
import TabBar from '../components/common/TabBar'
import Home from '../views/home'
export default {
  components: {
    Tab,TabBar,Home
  }
}
</script>

<style lang="stylus" scoped>
  .lay-out-box 
    height 100% 
    display flex 
    flex-direction column 
</style>


