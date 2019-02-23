<template>
    <div class="motto">
        <span>Join closers now to grow your sales team
            <action-button class="action" type="call-action"/></span>
    </div>
</template>

<script>
    import ActionButton from './ActionButton'

    export default {
        name: 'motto',
        components: {
            ActionButton
        }
    }
</script>

<style scoped>
    .motto {
        display: flex;
        height: 220px;
        margin-top: 160px;
        background: url("../../assets/Elements/Illustrations/04.svg") no-repeat;
        background-size: cover;
        border-radius: 10px;
    }

    span {
        width: 100%;
        padding: 0 60px 0 90px;
        margin: auto 0;
        font-size: 1.6em;
        color: #424B5A;
    }

    .action {
        float: right;
    }
</style>
