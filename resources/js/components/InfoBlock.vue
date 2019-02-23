<template>
    <div class="info">
        <div class="text">
            <div class="description">
                <h2>Where Closers and Influencers Get Connected</h2>
                <p>Get early access to match with the top High-Ticket Closers<sup>tm</sup></p>
            </div>

            <div>
                <action-button class="action" />
                <action-button
                    class="action"
                    type="dark"
                    label="Post an opportunity"/>
            </div>
        </div>
        <div class="illustration">
            <img src="../../assets/Elements/Illustrations/00.png" alt="Closers an influencers"/>
        </div>
    </div>
</template>

<script>
    import ActionButton from './ActionButton'

    export default {
        name: 'info-block',
        components: {
            ActionButton
        }
    }
</script>

<style scoped>
    .info {
        width: 100%;
        margin-top: 130px;
        display: grid;
        grid-template-columns: calc(40%) calc(60%);
    }

    h2 {
        font-size: 3.4em;
        line-height: 1.4em;
        padding-top: 5px;
    }

    p {
        width: 80%;
        font-size: 1.25em;
        padding-top: 10px;
        line-height: 1.8em;
        color: #6F7983;
    }

    sup {
        text-transform: uppercase;
        vertical-align: 10%;
        font-size: .6em;
    }

    .illustration {
        text-align: end;
        padding-top: 15px;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .action {
        width: calc(50% - 20px);
        padding: 14px 22px;
        margin-right: 20px;
    }

    .action:last-child {
        margin-right: 0;
    }
</style>
