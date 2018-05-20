<template>
    <div class="app-root-comp">
        {{msg}}
        <my-payment></my-payment>
        <my-products></my-products>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Payment from './Payment'
    import Products from './Products'

    export default {
        data() {
            return {
                msg: "This message is part of Front Desk root component!"
            }
        },
        components: {
            "my-payment": Payment,
            'my-products': Products
        }
    }
</script>
<style scoped>
    .app-root-comp {
        padding-top: 70px;
        background: #6ba453;
    }
</style>
