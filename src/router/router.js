import Vue from 'vue'
import Router from 'vue-router'
import Light from '@/components/Light'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/red',
            component: Light
        },
        {
            path: '/yellow',
            component: Light
        },
        {
            path: '/green',
            component: Light
        }
    ]
})
