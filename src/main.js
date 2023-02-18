import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"

createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .mount('#app')
