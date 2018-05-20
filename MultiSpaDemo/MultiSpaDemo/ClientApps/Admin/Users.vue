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
                msg: "This messeage is part of Users component"
            }
        }
    }
</script>
<style scoped>

    .orders-comp {
        padding-top: 90px;
        background: #b200ff;
        margin: 30px;
    }
</style>
