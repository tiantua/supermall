<template>
    <TabBar>
      <!-- 颜色可用默认值，也可以在此修改 -->
     <TabBarItem path='/home' activeColor="lightgray">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
     </TabBarItem>
     <TabBarItem path='/category'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
     </TabBarItem>
     <TabBarItem path='/shopcart' activeColor="deeppink">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
     </TabBarItem>
     <TabBarItem path='/profile' activeColor="yellowgreen">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
     </TabBarItem>
    </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default{
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>