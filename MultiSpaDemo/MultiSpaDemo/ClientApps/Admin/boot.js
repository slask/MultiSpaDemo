import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Orders from './Orders'
import Users from './Users'

Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        redirect: '/admin/orders'
    },
    { path: '/admin/orders', component: Orders },
    { path: '/admin/users', component: Users }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


new Vue({
    el: '#app-root',
    render: h => h(App),
    router //<---same as ES5: router: router
})

