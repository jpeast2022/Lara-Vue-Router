import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
// import HomeComponent from './components/Home.vue'
import router from './router/index';
const app=createApp({
    // components: {
    //     HomeComponent,
    // }
})

app.use(router).mount('#app')
// app.use(router)