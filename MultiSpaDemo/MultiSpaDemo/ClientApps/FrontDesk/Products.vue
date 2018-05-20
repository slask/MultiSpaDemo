<template>
    <div class="products-comp">
        {{msg}}
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "This messeage is part of Products component"
            }
        }
    }
</script>
<style scoped>

    .products-comp {
        padding-top: 90px;
        background: #eea4a4;
        margin: 30px;
    }
</style>
