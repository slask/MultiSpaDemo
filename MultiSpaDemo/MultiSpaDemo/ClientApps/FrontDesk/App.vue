<template>
    <div class="card app-root-comp">
        <div class="card-header"><h4>{{msg}} App Component</h4></div>
        <h5 class="p-3">This message is part of <mark>{{msg}}</mark> root component!</h5>

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
                msg: "Front Desk"
            }
        }
    }
</script>
<style scoped>
    .app-root-comp {
        margin: 30px;
    }
</style>
