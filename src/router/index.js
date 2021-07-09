import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	 {
    path:'',
    redirect:'/home'
   },
   {
    path: '/home',
    name: 'Home',
    component:() => import('../views/home/Home.vue')
   },
   {
    path: '/category',
    name: 'Category',
    component:() => import('../views/category/Cate.vue')
   },
   {
    path: '/shopcart',
    name: 'Shopcart',
    component:() => import('../views/shop/Shop.vue')
   },
   {
    path: '/profile',
    name: 'Profile',
    component:() => import('../views/profile/Profile.vue')
   }
]
const router =new VueRouter({
	routes,
	mode:'history'

})

export default router