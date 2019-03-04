<template>
    <div class="motto">
        <Icon class-name="background" :glyph="background.id" :view-box="background.viewBox" />
        <span>Join closers now to grow your sales team
            <action-button class="action" type="call-action"/></span>
    </div>
</template>

<script>
    import ActionButton from './ActionButton'
    import Icon from './Icon';
    import background from '../../assets/Elements/Illustrations/04.svg';

    export default {
        name: 'motto',
        components: {
            ActionButton, Icon
        },
        data() {
            return {
                background
            };
        }
    }
</script>

<style scoped>
    .motto {
        display: flex;
        position: relative;
        height: 220px;
        margin-top: 160px;
        border-radius: 10px;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    span {
        width: 100%;
        padding: 0 60px 0 90px;
        margin: auto 0;
        font-size: 1.6em;
        color: #424B5A;
        z-index: 1;
    }

    .action {
        float: right;
    }
</style>
