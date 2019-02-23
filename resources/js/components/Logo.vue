<template>
    <a href="/">
        <h1 class="logo">
            <img src="../../assets/icon-gold.svg"
                 alt="Closers logotype"
                 :class="className"/>
            <span class="logo-text">closers.com</span>
        </h1>
    </a>
</template>

<script>
    export default {
        name: 'logo',
        props: {
            color: {
                type: String,
                default: 'orange'
            }
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
        filter: brightness(0);
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
