
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


import Layout from './components/Layout';
import Vue from 'vue';
import 'reset-css';
import './bootstrap';
import appearOnScroll from './directives/transitionInViewport';

Vue.directive('transition-in-viewport', appearOnScroll);

export default new Vue({
    el: '#app',
    render: h => h(Layout)
});
