<template>
    <div class="app-root-comp">
        {{msg}}
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
                msg: "This message is part of Admin root component!"
            }
        }
    }
</script>
<style scoped>
    .app-root-comp {
        padding-top: 70px;
        background: #ffd800;
    }
</style>
