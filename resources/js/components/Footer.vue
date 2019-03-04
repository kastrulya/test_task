<template>
    <footer>
        <logo color="dark"/>

        <div class="columns">
            <div class="column-block">
                <div class="column">
                    <h4>How it works</h4>
                    <ul>
                        <li><a href="">Closers</a></li>
                        <li><a href="">Companies</a></li>
                        <li><a href="">Marketplace</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h4>About us</h4>
                    <ul>
                        <li><a href="">Company</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h4>News</h4>
                    <ul>
                        <li><a href="">News</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
            </div>
            <div class="column-block">
                <div class="column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h4>Follow us</h4>
                    <ul>
                        <li>
                            <a href="">
                                <Icon class-name="contacts-icon" :glyph="fb.id" :view-box="fb.viewBox"/>
                                <span>Facebook</span>
                            </a></li>
                        <li>
                            <a href="">
                                <Icon class-name="contacts-icon" :glyph="linkedin.id" :view-box="linkedin.viewBox"/>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon class-name="contacts-icon" :glyph="angelList.id" :view-box="angelList.viewBox"/>
                                <span>AngelList</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:info@closers.com">info@closers.com</a></li>
                        <li>Vancouver, BC, Canada</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="country">
                <Icon class-name="icon" :view-box="us.viewBox" :glyph="us.id" />
                <span class="country-text">English (United States)</span>
            </div>
            <span class="copyright">&copy; closers.com 2018</span>
        </div>
    </footer>
</template>

<script>
    import fb from '../../assets/Pictos/Fb.svg';
    import linkedin from '../../assets/Pictos/Linkedin.svg';
    import angelList from '../../assets/Pictos/Angelist.svg';
    import us from '../../assets/Pictos/us.svg';

    import Logo from './Logo';
    import Icon from './Icon';

    export default {
        name: 'footer-closers',
        components: {Logo, Icon},
        data() {
            return {
                fb,
                linkedin,
                angelList,
                us
            }
        }
    }
</script>

<style scoped>
    footer {
        margin-top: 240px;
        padding: 75px calc(1440vw / 125);
        background-color: #F8F9FA;
    }

    .columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .column-block {
        display: flex;
        justify-content: space-between;
    }

    .column {
        flex-grow: 1;
        flex-basis: calc(100% / 3);
    }

    h4 {
        padding: 50px 0 35px 0;
        font-weight: bold;
    }

    li {
        padding-bottom: 25px;
        font-size: .95rem;
        font-weight: 500;
        color: #6F7983;
    }

    .contacts-icon {
        vertical-align: middle;
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
        color: #9B9B9B;
    }

    .country {
        display: inline;
        font-size: .95em;
        font-weight: 500;
    }

    .country .icon {
        width: 24px;
        height: 24px;
        margin-right: 20px;
        border-radius: 5px;
        vertical-align: middle;
    }

    .copyright {
        align-self: flex-end;
        font-weight: 600;
        font-size: .96em;
    }
</style>
