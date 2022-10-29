import { createRouter, createWebHistory } from 'vue-router'
// import Navbar from '../navbar/Navbar.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/register.vue'
import User from '../pages/UserPage.vue'
import store from '../store/index.js'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        // meta: {title : 'Login'}
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        // meta: {title : 'Register'}
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        // meta: {title : 'User'}
        meta:{
            requiresAuth:true
        },
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


// redirect user
router.beforeEach((to, from)=>{
    // auththentication is true and localStorage is not set
    if(to.meta.requiresAuth && store.getters.getToken == 0){
        console.log(store.getters.getToken)
        return { name : 'Login' }     
    }
    if(to.meta.requiresAuth == false && store.getters.getToken != 0){
        console.log(store.getters.getToken)
        return { name : 'User' }
    }
    
})

export default router;