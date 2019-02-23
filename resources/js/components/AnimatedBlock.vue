<template>
    <div :class="className">
        <div class="description">
            <slot name="icon"></slot>
            <h3>
                <slot name="header"></slot>
            </h3>
            <slot name="description"></slot>
            <action-button class="action"/>
        </div>

        <div class="illustration">
            <slot name="illustration"></slot>
        </div>
    </div>
</template>

<script>
    import ActionButton from './ActionButton'

    export default {
        name: 'animated-block',
        components: {ActionButton},
        props: {
            leftIllustrated: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            className () {
                return `info${this.$props.leftIllustrated ? ' left-illustrated' : ''}`
            }
        }
    }
</script>

<style scoped>
    .info {
        margin-top: 190px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .description {
        grid-row: 1;
        grid-column: 1;
        padding: 60px 0 0 18px;
    }

    .description img {
        margin-bottom: 30px;
    }

    h3 {
        font-size: 2em;
        padding-bottom: 15px;
        line-height: 1.4em;
        font-weight: 300;
        color: #515E69;
    }

    p {
        padding: 10px 0;
        line-height: 2.23em;
        width: 85%;
        color: #6F7983;
    }

    .action {
        margin-top: 38px;
    }

    sup {
        text-transform: uppercase;
        vertical-align: 10%;
        font-size: .6em;
    }

    .illustration {
        grid-row: 1;
        grid-column: 2;
        display: flex;
        margin: auto;
        text-align: right;
    }

    .left-illustrated .illustration {
        grid-row: 1;
        grid-column: 1;
        text-align: left;
    }

    .left-illustrated .description {
        grid-row: 1;
        grid-column: 2;
    }

</style>
