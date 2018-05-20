<template>
    <div class="app-root-comp">
        {{msg}}
        <p>
            <router-link to="/frontdesk/products">Go to products</router-link>&nbsp&nbsp&nbsp
            <router-link to="/frontdesk/payment">Go to payment</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "This message is part of Front Desk root component!"
            }
        }
    }
</script>
<style scoped>
    .app-root-comp {
        padding-top: 70px;
        background: #6ba453;
    }
</style>
