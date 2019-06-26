import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    
  {
        path: '/helloworld',
        name: 'helloworld',
        component: () => import("@/views/HelloWorld/HelloWorld")
    }
]
})
export default router
