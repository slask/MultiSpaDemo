import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Payment from './Payment'
import Products from './Products'
import NotFound from '../common/NotFound'

Vue.use(VueRouter)

const routes = [
    {
        path: '/frontdesk',
        redirect: '/frontdesk/products'
    },
    { path: '/frontdesk/products', component: Products },
    { path: '/frontdesk/payment', component: Payment },
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


new Vue({
    el: '#app-root',
    render: h => h(App),
    router
})

