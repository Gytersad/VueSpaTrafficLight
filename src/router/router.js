import Vue from 'vue'
import Router from 'vue-router'
import light from '@/components/light'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/red',
            component: light
        },
        {
            path: '/yellow',
            component: light
        },
        {
            path: '/green',
            component: light
        }
    ]
})