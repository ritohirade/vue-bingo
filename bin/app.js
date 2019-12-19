import Vue from 'vue';
import App from './app.vue';

var app = new Vue({
    render: h => h(App)
}).$mount('#app');
