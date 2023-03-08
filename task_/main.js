import Vue from 'vue';
import App from './app.vue';
import axios from "axios";
// 路由配置

axios.defaults.withCredentials = true
new Vue({
    el: '#app',
    render: h => {
        return h(App)
    }
});