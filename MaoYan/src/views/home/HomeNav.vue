<template>
  <ul>
    <router-link tag = "li" to = "/city" class="city">
      <span> 杭州 </span>
      <i class="fas fa-caret-down"></i>
    </router-link>
    <li class="nav">
      <router-link :to = "{name: 'f-hot'}" active-class="active"> 正在热映 </router-link>
      <router-link :to = "{name: 'f-coming'}" active-class="active"> 即将上映 </router-link>
    </li>
    <router-link to = "/search" tag = "li" class="search">
      <a href="">
        <i class="fas fa-hand-point-up"></i>
      </a>
    </router-link>
  </ul>
</template>


<style lang="stylus" scoped>
  @import '../../assets/css/border.styl';
  @import '../../assets/css/theme.styl';
  ul 
    display flex 
    height .44rem 
    border 0 0 1px 0,#ccc 
    .city 
      flex 70 
      display flex 
      justify-content center 
      align-items center
      span 
        font-size .14rem 
        margin-right .03rem 
      i 
        font-size .08rem 
    .nav 
      flex 255 
      display flex 
      justify-content space-around
      align-items center
      a 
        font-size .15rem 
        text-decoration none 
        color #666 
        height 100% 
        line-height .44rem 
        padding 0 .15rem 
        font-weight bold 
        border-bottom .02rem solid transparent 
        &.active 
          color $theme_color 
          border-bottom .02rem solid $theme_color 
    .search 
      flex 50
      width .45rem 
      height .45rem 
      a 
        display flex 
        width 100% 
        height 100% 
        justify-content center 
        align-items center
        i 
          font-size .2rem 
          color #666 
      
      
</style>
