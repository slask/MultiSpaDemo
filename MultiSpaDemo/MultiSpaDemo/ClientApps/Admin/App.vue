<template>
    <div class="app-root-comp">
        {{msg}}
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
                msg: "This message is part of Admin root component!"
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
        padding-top: 70px;
        background: #ffd800;
    }
</style>
