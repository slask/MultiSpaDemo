<template>
    <div class="card text-white bg-primary orders-comp">
        <div class="card-header"><h4>{{msg}} Component</h4></div>
        <h5 class="p-3">This message is part of <mark>{{msg}}</mark> component!</h5>
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
        margin: 30px;
    }
</style>
