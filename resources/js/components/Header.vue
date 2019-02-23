<template>
    <header>
        <logo/>
        <nav>
            <a href="#" class="nav-item">Login</a>
            <a href="#" class="nav-item">Request to join</a>
            <a href="#" class="nav-item">Post an opportunity</a>
        </nav>
    </header>
</template>

<script>
    import Logo from './Logo'

    export default {
        name: 'header-closer',
        components: {Logo}
    }
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
        align-items: center;
    }

    nav {
        display: flex;
        flex-direction: row-reverse;
    }

    .nav-item {
        margin-left: 5rem;
        text-decoration: none;
        font-size: .9em;
        font-weight: 600;
    }

    .nav-item:hover {
        color: #EBAE4F;
    }
</style>
