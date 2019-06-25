import Vue from 'vue'
import Router from 'vue-router'
import Pagination from '@/components/Pagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pagination',
      component: Pagination
    }
  ]
})
