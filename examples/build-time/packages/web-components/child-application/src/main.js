import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';

Vue.config.productionTip = false;

// For testing locally
const ChildApplication = wrap(Vue, App);
window.customElements.define('child-application', ChildApplication);
