import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

var routes = [
        {
          path:'/',
          component:() => import("../components/Index.vue")
        },

]


const router = new createRouter({
  history: createWebHistory(), // history为必填项
 //history:createWebHashHistory(),
  routes,
})

export {
    router
}
