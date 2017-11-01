import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/home/HomeContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeContainer
    }
  ]
})
