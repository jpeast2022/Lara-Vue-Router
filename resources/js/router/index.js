import { createRouter, createWebHistory } from 'vue-router'
// import Navbar from '../navbar/Navbar.vue'
import Login from '../components/Login.vue'
import Register from '../components/register.vue'
import User from '../pages/UserPage.vue'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta:{
            requiresAuth:true
        },
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

let setToken = JSON.parse(localStorage.getItem('token'));
console.log(setToken)
// redirect user
router.beforeEach((to,from)=>{
    // auththentication is true and localStorage is not set
    if(to.meta.requiresAuth && !setToken){
        return { name : 'Login' }
    }
    // if(to.meta.requiresAuth == false && !localStorage.getItem('token')){
    //     return { name : 'Register' }
    // }
    if(to.meta.requiresAuth == false && setToken){
        return { name : 'User' }
    }
})

export default router;