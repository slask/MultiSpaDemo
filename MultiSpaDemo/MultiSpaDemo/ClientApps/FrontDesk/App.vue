<template>
    <div class="card app-root-comp">
        <div class="card-header"><h4>{{msg}} App Component</h4></div>
        <h5 class="p-3">This message is part of <mark>{{msg}}</mark> root component!</h5>

        <my-checkout></my-checkout>
        <my-payment></my-payment>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Payment from './Payment'
    import Checkout from './Checkout'

    export default {
        data() {
            return {
                msg: "Front Desk"
            }
        },
        components: {
            "my-payment": Payment,
            'my-checkout': Checkout
        }
    }
</script>
<style scoped>
    .app-root-comp {
        margin: 30px;
    }
</style>
