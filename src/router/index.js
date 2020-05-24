import Vue from 'vue'
// import Router from 'vue-router'
import { IonicVueRouter } from '@ionic/vue'
import layout from '@/components/layout'

// Vue.use(Router)
Vue.use(IonicVueRouter)


export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '/one',
          name: 'one',
          component: () => import('../components/one.vue')
        },
        {
          path: '/two',
          name: 'two',
          component: () => import('../components/two.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/about.vue')
    },
    
  ]
})
