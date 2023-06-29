import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import Topic from '../views/Topic.vue'
import Layout from '../views/Layout.vue'
const routes = [
  //主页面
  {
    path:'/',
    name:"Layout",
    component:Layout,
    children:[
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/topic',
        name: 'topic',
        component: Topic
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine
      },
      {
        path: '/search',
        name: 'search',
        component: Search
      }
    ]
   },
   {
    path:"/dokke",//独家
    name:"Dokke",
    component:()=>import("../views/Home/MusicDokke.vue")
   },
   //歌单详情
   {
    path:'/details/:id',
    name:"Details",
    component:()=>import("../views/Home/MusicDetails.vue")
    
   },
   //歌曲播放
   {
    path:"/player/:id/:name/:picUrl",
    name:"Player",
    component:()=>import("../views/Player.vue")
   }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:"active"
})

export default router
