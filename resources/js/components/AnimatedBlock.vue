<template>
    <div :class="className">
        <div class="description">
            <slot name="icon" />
            <h3>
                <slot name="header" />
            </h3>
            <slot name="description" />
            <action-button class="action"/>
        </div>

        <div v-transition-in-viewport="leftIllustrated? leftIllustratedTransition : rightIllustratedTransition"
             class="illustration animated">
            <slot name="illustration" />
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
                return `info ${this.$props.leftIllustrated ? 'left-illustrated' : 'right-illustrated'}`;
            }
        },
        methods: {
            rightIllustratedTransition (el, part) {
                el.style.left = `${100 - part}vw`;
            },
            leftIllustratedTransition (el, part) {
                el.style.right = `${100 - part}vw`;
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

    .description .icon {
        margin-bottom: 30px;
        width: 26px;
        height: 26px;
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
        display: flex;
        margin: auto 0;
        text-align: right;
    }

    .right-illustrated .illustration {
        grid-row: 1;
        grid-column: 2;
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

    .illustration.animated {
        position: relative;
        transition: right 100ms, left 100ms;
    }

    .right-illustrated .illustration.animated {
        left: 100vw;
    }

    .left-illustrated .illustration.animated {
        right: 100vw;
    }

</style>
