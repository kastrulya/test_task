<template>
    <svg :class="className" >
        <use v-bind:xlink:href="id" :viewBox="viewBox" />
    </svg>
</template>
<script>
    export default {
        name: 'Icon',
        props: {
            glyph: String,
            viewBox: String,
            className: String
        },
        computed: {
            id() {
                return `#${this.$props.glyph}`;
            }
        }
    }

</script>
