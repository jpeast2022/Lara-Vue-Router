<template>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <!-- Unauthenticated -->
                <div class="d-flex" v-if="$store.getters.getToken == 0">
                    <!-- <router-view></router-view> -->
                    
                    <router-link :to="{name : 'Login'}" class="nav-link me-4"><span>Login</span></router-link>
                    <router-link :to="{name : 'Register'}" class="nav-link me-4"><span>Register</span></router-link>
                    <!-- <router-link :to="{name : 'User'}" class="nav-link me-4"><span>User {{ $store.getters.getToken }}</span></router-link> -->
                </div>
                    
                 <!-- authorized -->
                <div class="user" v-else>
                    <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                        <a class="nav-link"><router-link :to="{name: 'Request'}"><span class="text-warning">0</span><font-awesome-icon icon="fa-solid fa-bell" /></router-link></a>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ $store.getters.getTokenName }}
                        <!-- <font-awesome-icon icon="fa-solid fa-power-off" /> -->
                        </a>
                        
                        <form @submit.prevent="logout">
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button type="submit" class="dropdown-item" >Logout</button>
                                <button class="dropdown-item">
                                    <router-link :to="{name : 'Schedule'}" class="nav-link me-4"><span>Schedule</span></router-link>
                                </button>
                                <button class="dropdown-item">
                                    <router-link :to="{name : 'Request'}" class="nav-link me-4"><span>Request</span></router-link>
                                </button>
                                <button class="dropdown-item">
                                    <router-link :to="{name : 'Profile'}" class="nav-link me-4"><span>Profile</span></router-link>
                                </button>
                            </div>
                        </form>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
        <RouterView v-slot="{ Component, route }">
            <transition
                name="fade" 
                mode="out-in">
                <div :key="route.name">
                    <component :is="Component"/>
                </div>
            </transition>
        </RouterView>
</template>
<script>
    import getLogout from "../composables/getLogout.js";
    export default {
        setup () {
            // to access function composable
          const {logout} = getLogout()  
        return {logout}
        },
    }
</script>

<style scoped>
    /* ::-webkit-scrollbar{
        display: none;
    } */
    #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing:grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        }
    a.router-link-active{
        border-bottom:2px solid #5543ca ;
        }

        /* style for fade */
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
        /* transform: translateY(160px); */
        }

    .fade-enter-active,
    .fade-leave-active{
            transition: opacity 0.5s ease-out;
        }
</style>