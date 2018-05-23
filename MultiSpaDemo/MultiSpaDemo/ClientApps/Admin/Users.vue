<template>
    <div class="card text-white bg-success users-comp">
        <div class="card-header"><h2>{{msg}} Component</h2></div>
        <h3 class="p-3">This message is part of <mark>{{msg}}</mark> component!</h3>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "Users"
            }
        }
    }
</script>
<style scoped>

    .users-comp {
        margin: 30px;
    }
</style>
