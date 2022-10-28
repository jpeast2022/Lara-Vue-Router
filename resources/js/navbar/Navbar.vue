<template>
    <!-- <h1>Home setup here</h1>
    <router-link to="/login">login</router-link><br>
    <router-link to="/register" class="text-danger">register</router-link> -->

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <!-- Unauthenticated -->
                <nav class="d-flex" v-if="Token">
                    <router-link :to="{name : 'Login'}" class="nav-link me-4"><span>Login</span></router-link>
                    <router-link :to="{name : 'Register'}" class="nav-link me-4"><span>Register</span></router-link>
                </nav>
                 <!-- authorized -->
                <div class="user" v-else>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ authUser }}
                        </a>
                        <form @submit.prevent="logout">
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button type="submit" class="dropdown-item" >Logout</button>
                            </div>
                        </form>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
</template>
<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
// import { reactive, ref } from 'vue'
    export default {
        setup () {
            const router = useRouter()
            // set token
            let Key = JSON.parse(localStorage.getItem('token'));
            const logout = async() => {
                console.log(Key)
            // set header
            const headers = {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer '+Key.bearerToken
                }
            let data = ''
                await axios.post('/api/logout', data,{
                    headers
                })
                .then((res)=>{
                    console.log(res)
                    // push login page by name
                    localStorage.clear()
                    // this.refreshPage()
                    window.location.reload();
                    router.push({ name: 'Login' });
                })
            }
            return {
                logout
            }
        },
        data: function(){
            return {
                Token: false,
                authUser: ''
            }
        },
        mounted() {
            this.authenticatedUser()
        },
        methods: {
            // authenticated
            authenticatedUser(){
            var tokenData = JSON.parse(localStorage.getItem('token'));
            console.log(tokenData)
            if(tokenData === null){
              console.log("Unauthenticated")
              this.Token = true
            }else{
                console.log("authenticated")
              this.Token = false
              this.authUser = tokenData.name
              console.log(this.authUser)
            }
          }
        },
    }
</script>