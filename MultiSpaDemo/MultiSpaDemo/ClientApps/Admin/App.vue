<template>
    <div class="card  app-root-comp">
        <div class="card-header"><h4>{{msg}} App Component</h4></div>
        <h5 class="p-3">This message is part of <mark>{{msg}}</mark> root component!</h5>

        <p>
            <router-link to="/admin/orders">Go to orders</router-link>&nbsp&nbsp&nbsp
            <router-link to="/admin/users">Go to users</router-link>
        </p>
        <router-view></router-view>

    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "Admin"
            }
        }
    }
</script>
<style scoped>
    .app-root-comp {
        margin: 30px;
    }
</style>
