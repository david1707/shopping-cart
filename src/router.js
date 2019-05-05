import Vue from 'vue'
import Router from 'vue-router'

import EventBus from './views/EventBus.vue'
import PropsEvents from './views/PropsEvents.vue'
import SameComponent from './views/SameComponent.vue'
import Vuex from './views/Vuex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/same-component',
      name: 'same-component',
      component: SameComponent,
    },
    {
      path: '/props-events',
      name: 'props-events',
      component: PropsEvents,
    },
    {
      path: '/event-bus',
      name: 'event-bus',
      component: EventBus,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex,
    },
  ]
})
