<template>
    <div class="columns-wrapper">
        <h2>How it works</h2>
        <div class="columns">
            <div class="column">
                <img src="../../assets/Elements/Illustrations/Sales.png" alt="match closers">
                <h3>Request to join</h3>
                <p>Once you've completed the application, our team will review to ensure it's a good fit for both
                    parties.
                    If
                    approved, our team will reach out to you.</p>
            </div>
            <div class="column">
                <img src="../../assets/Elements/Illustrations/Sales.png" alt="match closers">
                <h3>Match with closers</h3>
                <p>Our team will recommend High-Ticket Closers<sup>tm</sup> which we believe are the best fit for our
                    needs. However,
                    you can any Closer from our pool.</p>
            </div>
            <div class="column">
                <img src="../../assets/Elements/Illustrations/Sales.png" alt="match closers">
                <h3>Start Closing High-Ticket Offers</h3>
                <p>Once you have found your High-Ticket Closers<sup>tm</sup>, they will start closing deals for you.</p>
            </div>
        </div>
        <action-button class="action"/>
    </div>
</template>

<script>
    import ActionButton from './ActionButton'

    export default {
        name: 'columns-block',
        components: {ActionButton}
    }
</script>

<style scoped>
    sup {
        text-transform: uppercase;
        vertical-align: 10%;
        font-size: .6em;
    }

    h2 {
        width: 100%;
        margin-bottom: 80px;
        font-size: 2.2rem;
        text-align: center;
        color: #515E69;
    }

    .columns-wrapper {
        margin-top: 160px;
    }

    .columns {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 90px;
        margin-bottom: 55px;
    }

    h3 {
        padding: 22px 0;
        color: #505D68;
        font-weight: bold;
    }

    p {
        color: #A6B2BB;
        line-height: 1.7em;
        font-size: .89rem;
    }

    .action {
        display: block;
        margin: 0 auto;
        /*padding: 15px 35px*/
    }
</style>
