import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/main.css'

const app = createApp(App,axios)

app.use(createPinia())
app.use(router)

app.mount('#app')

const getToken = localStorage.getItem("token");

// axios.defaults.headers.common()
if(getToken){
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`
}
