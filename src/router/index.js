import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Car from '@/components/Car.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:'/Car',
    	name:'Car',
    	component:Car
    }
  ]
})
//const routes=[
//		 {
//    path: '/',
//    name: 'Index',
//    component: Index
//  }
////		{
////			path:'/',
////			component:Index
////		},
////		{
////			path:'/Car',
////			component : resolve => require(['@/components/Car'],resolve)
////		}
//]
//
//const router = new VueRouter({
//	routes
//})
//
//export default router;

//export default new Router({
//routes: [	
//  {
//    path: '/',
//    name: 'Index',
//    component: Index
//  },
//  {
//  	path:'/Car',
//  	name: 'Car',
//  	component:Car
//  }
//]
//})
