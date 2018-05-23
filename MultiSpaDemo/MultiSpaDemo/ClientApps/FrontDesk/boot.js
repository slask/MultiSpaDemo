﻿import Vue from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router'

import Payment from './Payment'
import Checkout from './Checkout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/frontdesk',
        redirect: '/frontdesk/checkout'
    },
    { path: '/frontdesk/checkout', component: Checkout },
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

