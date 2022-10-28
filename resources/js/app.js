import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import NavbarComponent from './navbar/Navbar.vue'
import router from './router/index';
const app=createApp({
    components: {
        NavbarComponent
    }
})

app.use(router).mount('#app')
// app.use(router)