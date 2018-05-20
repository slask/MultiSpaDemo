<template>
    <div class="orders-comp">
        {{msg}}
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "This messeage is part of Orders component"
            }
        }
    }
</script>
<style scoped>

    .orders-comp {
        padding-top: 90px;
        background: #00ffa1;
        margin: 30px;
    }
</style>
