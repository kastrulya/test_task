<template>
    <button v-bind:class="type">{{label}}</button>
</template>

<script>
    export default {
        name: 'action-button',
        props: {
            type: {
                type: String,
                default: 'call-action'
            },
            label: {
                type: String,
                default: 'Request to join'
            },
            handler: {
                type: Function,
                default: () => {}
            }
        },
    }
</script>

<style scoped>
    button {
        padding: 15px 35px;
        font-size: 1.1rem;
        border-radius: 25px;
        background-color: #EBAE4F;
        cursor: pointer;
        color: white;
        border: none;
        outline: none;
        transition: transform 300ms, box-shadow 150ms;
    }

    button:hover {
        transform: translateY(-2px);
        box-shadow: 5px 20px 60px -8px #EBAE4F;
    }

    .dark {
        background-color: #303030;
    }

    .dark:hover {
        box-shadow: 5px 20px 60px -8px #303030;
    }

</style>
