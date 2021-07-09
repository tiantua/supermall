<template>
   <div id="home">
     <NavBar class="homenav"><template v-slot:center>购物街</template></NavBar>
     <Scroll class="height">
       <HomeSwiper :banners="banners"/>
       <RecommendView :recommends="recommends"/>
       <FeatureView/>
       <TabControl class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
       <GoodsList :goods="showGoods"/>
     </Scroll>
   </div> 
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import {getHomeMultidata,getHomeGoods} from 'network/home'
  export default{
    name:"Home",
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop'
      }
    },
    computed:{
      showGoods(){
        //这里的currentType要加this
        return this.goods[this.currentType].list
      }
    },
    //一般钩子函数里只写主要逻辑,细节写在methods里
    created(){
      // 请求数据
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      },
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
        }
      }
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
}
.homenav{
  background-color: var(--color-tint);
  color: #fff ;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index:10;
}
/*tabcontrol停留效果的简单用法*/
.tabControl{
  /*只有在使用默认scroll时才生效*/
 /* position: sticky;*/
  top: 44px;
  z-index:10 ;
}
.height{
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>