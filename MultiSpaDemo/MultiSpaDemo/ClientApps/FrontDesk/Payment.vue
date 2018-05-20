<template>
    <div class="payment-comp">
        {{msg}}
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                msg: "This messeage is part of Payment component"
            }
        }
    }
</script>
<style scoped>

    .payment-comp {
        padding-top: 90px;
        background: #92aaf7;
        margin: 30px;
    }
</style>
