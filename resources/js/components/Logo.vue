<template>
    <a href="/">
        <h1 class="logo">
            <Icon :className="className" :viewBox="logo.viewBox" :glyph="logo.id"/>
            <span class="logo-text">closers.com</span>
        </h1>
    </a>
</template>

<script>
    import Icon from './Icon';
    import logo from '../../assets/icon-gold.svg';

    export default {
        name: 'logo',
        components: { Icon },
        props: {
            color: {
                type: String,
                default: 'orange'
            }
        },
        data() {
            return {
                logo
            };
        },
        computed: {
            className () {
                return `logo-img ${this.$props.color}`
            }
        }
    }
</script>

<style scoped>
    .logo-img {
        vertical-align: middle;
        width: 28px;
        height: 28px;
    }

    .logo-img.dark {
        color: black;
    }

    .logo-img.orange {
        color: #EBAE50;
    }

    .logo-text {
        font-size: 1.1em;
        font-weight: 700;
        letter-spacing: .5px;

        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
    }
</style>
