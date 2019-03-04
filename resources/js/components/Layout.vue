<template>
    <div class="wrapper">
        <div class="layout">

            <HeaderClosers />

            <InfoBlock />

            <animated-block left-illustrated>
                <template v-slot:icon>
                    <Icon class-name="icon" :view-box="opportunities1.viewBox" :glyph="opportunities1.id" />
                </template>
                <template v-slot:illustration>
                    <img src="../../assets/Elements/Illustrations/01.png" alt="Profile image">
                </template>
                <template v-slot:header>Find Closers That fit Your Offer</template>
                <template v-slot:description>
                    <p>
                        We have High-Ticket Closers<sup>tm</sup> who have closed High-Ticket Offers for every industry you
                        can imagine.
                        From health to education, to business opportunities, to real estate, and everything in between.
                    </p>
                    <p>We have a High-Ticket Closer<sup>tm</sup> for any challenge.</p>
                </template>
            </animated-block>

            <animated-block>
                <template v-slot:icon>
                    <Icon class-name="icon" :view-box="opportunities2.viewBox" :glyph="opportunities2.id" />
                </template>
                <template v-slot:illustration>
                    <img src="../../assets/Elements/Illustrations/02.png" alt="connections">
                </template>
                <template v-slot:header>Manage All Your Closers With Our All-In-One-Platform</template>
                <template v-slot:description>
                    <p>
                        No need for Whatsapp, Slack, or any additional software. With Closers.com, you'll be able to chat
                        with your Closers, see their bookings, the revenue they've generated for your business, and more.
                    </p>
                </template>
            </animated-block>

            <animated-block left-illustrated>
                <template v-slot:illustration>
                    <img src="../../assets/Elements/Illustrations/03.png" alt="Work on the chair">
                </template>
                <template v-slot:header>How Closers.com Ensures 100% Success Rate</template>
                <template v-slot:description>
                    <p>
                        Our goal for Closers.com is to have 100% success rate for all of our partners. That's why
                        Closers.com is a closed-platform and only accepts new partners after a strict application process.
                    </p>
                    <p>
                        All stats will be tracked diligently - including, but not limited to: calls made, calls closed,
                        closing ratio, revenue generated. This will ensure we are scaling your business toward your goals.
                    </p>
                </template>
            </animated-block>

            <columns-block />

            <motto />
        </div>
        <footer-closers />
    </div>
</template>

<script>
    import InfoBlock from './InfoBlock'
    import AnimatedBlock from './AnimatedBlock'
    import HeaderClosers from './Header'
    import ActionButton from './ActionButton'
    import ColumnsBlock from './ColumnsBlock';
    import Motto from './Motto';
    import FooterClosers from './Footer';
    import Icon from './Icon';

    import opportunities1 from '../../assets/Pictos/Opportunities_Click.svg';
    import opportunities2 from '../../assets/Pictos/Opportunities_Click_2.svg';

    export default {
        name: 'layout',
        components: {
            InfoBlock,
            AnimatedBlock,
            HeaderClosers,
            ActionButton,
            ColumnsBlock,
            Motto,
            FooterClosers,
            Icon
        },
        data() {
            return {
                opportunities1,
                opportunities2
            };
        }
    }
</script>

<style>
    a, a:visited {
        text-decoration: none;
        color: inherit;
    }
    .wrapper {
        font-family: Montserrat, serif;
        color: #303030;
    }

    .layout {
        margin: 0 calc(1440vw / 125);
    }
</style>
