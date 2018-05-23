<template>
    <div class="card text-white bg-primary orders-comp">
        <div class="card-header"><h2>{{msg}} Component</h2></div>
        <h3 class="p-3">This message is part of <mark>{{msg}}</mark> component!</h3>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "Orders"
            }
        }
    }
</script>
<style scoped>

    .orders-comp {
        /*padding-top: 90px;
        background: #00ffa1;*/
        margin: 30px;
    }
</style>
