<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <!-- {{ form }} -->
                <form @submit.prevent="signup">
                    <div class="mb-3">
                        <h1 class="text-center">Sign up</h1>
                    </div>
                    <hr/>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Email ID</label>
                        <input type="email" name="email" class="form-control" :id="id" v-model="form.email">
                        <p :class="className" v-if="statusCode.email">{{ statusCode.email }}</p>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" :id="id" v-model="form.password">
                        <p :class="className" v-if="statusCode.password">{{ statusCode.password }}</p>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Confirm-Password</label>
                        <input type="password" name="password" class="form-control" :id="id" v-model="form.password_confirmation">
                        <p :class="className" v-if="statusCode.password">{{ statusCode.password }}</p>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Name</label>
                        <input type="text" name="name" class="form-control" :id="id" v-model="form.name">
                        <p :class="className" v-if="statusCode.name">{{ statusCode.name }}</p>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Matric</label>
                        <input type="number" name="matric" class="form-control" :id="id" v-model="form.matric">
                        <p :class="className" v-if="statusCode.matric">{{ statusCode.matric }}</p>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Speciality</label>
                        <input type="text" name="speciality" class="form-control" :id="id" v-model="form.speciality">
                        <p :class="className" v-if="statusCode.speciality">{{ statusCode.speciality }}</p>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">About</label>
                        <input type="text" name="About" class="form-control" :id="id" v-model="form.about">
                        <p :class="className" v-if="statusCode.about">{{ statusCode.about }}</p>
                    </div>
                    <div class="text-center"><span>Already a member?</span> <a href="#">Login</a></div><br>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">Student Sign up</button>
                        <button class="btn btn-primary" type="submit">Doctor Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
// import { stat } from 'fs';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        let form = reactive({
            email: '',
            password: '',
            password_confirmation:'',
            name: '',
            matric: '',
            speciality: '',
            about: ''

        });
        let className = ref('');
        let statusCode = ref('')
        const signup = async() => {
            await axios.post('/api/register',form)
            .then((res)=>{
                console.log(res.data.data.token)
                console.log(res.data.data.user.name)

                let tokenData = {
                    bearerToken : res.data.data.token,
                    name : res.data.data.user.name
                }
                statusCode.value = ''
                
                // restoring token name in localstorage
                localStorage.setItem('token',JSON.stringify(tokenData))
                // push login page by name
                router.push({ name: 'Login' });
            })
            //this is a problem after register
            .catch((err)=>{
                if(err.response === undefined){
                    console.log('yes')
                    
                }else{
                    statusCode.value = err.response.data.errors
                    className.value = 'text-center text-danger'
                }
            })
        }
        return{
            form,
            signup,
            statusCode,
            className,
        }

    },
    data () {
        return {
            id: null,
        }
    },
    mounted () {
        this.id = this._uid
    },
    method: {
        
    } 
}
</script>

<style scoped>
    .container .row .card{
        margin: 10px auto;
        padding: 2em;
    }
</style>