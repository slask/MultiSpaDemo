<template>
    <div class="card  app-root-comp">
        <div class="card-header"><h2>App Component</h2></div>
        <h3 class="p-3">This message is part of <mark>{{msg}}</mark> root component!</h3>

        <my-orders></my-orders>
        <my-users></my-users>

    </div>
</template>
<script>
    import Vue from 'vue'
    import Orders from './Orders'
    import Users from './Users'

    export default {
        data() {
            return {
                msg: "Admin"
            }
        },
        components: {
            "my-orders": Orders,
            'MyUsers': Users
        }
    }
</script>
<style scoped>
    .app-root-comp {
        margin: 30px;
    }
</style>
