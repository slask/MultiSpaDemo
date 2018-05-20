import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Payment from './Payment'
import Products from './Products'

Vue.use(VueRouter)

const routes = [
    {
        path: '/frontdesk',
        redirect: '/frontdesk/products'
    },
    { path: '/frontdesk/products', component: Products },
    { path: '/frontdesk/payment', component: Payment }
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

