<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <!-- {{ form }} -->
                <form @submit.prevent="schedule">
                    <div class="mb-3">
                        <h1 class="text-center">Availability</h1>
                    </div>
                    <hr/>
                    <div class="mb-3">
                        <div class="form-field">
                            <label class="form-label text-secondary">Starting Time</label>
                            <div class="mb-content">
                                <font-awesome-icon icon="fa-solid fa-at" class="icon text-secondary"/>
                                <input type="time" class="input-text text-secondary" :class="className" v-model="form.starting_time">
                            </div>
                        </div>
                        <!-- <p :class="className" v-if="statusCode.email">{{ statusCode.email[0] }}</p> -->
                    </div>
                    <div class="mb-3">
                       <div class="form-field">
                            <label class="form-label text-secondary">End Time</label>
                           <div class="mb-content">
                                <font-awesome-icon icon="fa-solid fa-lock" class="icon text-secondary" />
                                <input type="time" class="input-text text-secondary" :class="className" v-model="form.end_time">
                           </div>
                       </div>
                       <!-- <p :class="className" v-if="statusCode.password">{{ statusCode.password[0] }}</p> -->
                    </div>
                    <div class="mb-3">
                        <div class="form-field">
                            <label class="form-label text-secondary">Day</label>
                            <div class="mb-content">
                                <font-awesome-icon icon="fa-solid fa-user" class="icon text-secondary"/>
                                <input type="date" class="input-text text-secondary" :class="className" v-model="form.day">
                            </div>
                        </div>
                        <!-- <p :class="className" v-if="statusCode.name">{{ statusCode.name[0] }}</p> -->
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">Set Schedule</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    // import Datepicker from 'vue3-datepicker'
    // import { stat } from 'fs';
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import {useStore} from 'vuex'
    export default{
        setup(){
            const router = useRouter()
            const store = useStore()
            let className = ref('');
            let statusCode = ref('')
            let form = reactive({
                starting_time: '',
                end_time: '',
                status: 'active',
                // password_confirmation:'',
                day: '',
            });
             // set header
            const headers = {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + store.getters.getToken
            }
           
            const schedule = async()=>{
                console.log(form.starting_time)
                
                await axios.post('/api/sched',form,{headers})
                .then((res)=>{
                    console.log(res)
                })

                .catch((err)=>{
                    console.log(err)
                })
            }

            return {
                schedule,form,className,statusCode
            }
        }
    }
</script>

<style scoped>
    .container .row .card{
        margin: 10px auto;
        padding: 2em;
    }
    .mb-3 .form-field{
        position: relative;
    }
    .mb-3 .form-field .mb-content{
        /* position: relative; */
        display: flex;
        flex-direction: row;
        gap: 1em;
        margin: auto;
    }
    .mb-3 .form-field .mb-content .icon{
        /* position: absolute; */
        /* top: calc(50%); */
        margin: 5px auto;
        /* color: aqua; */
        font-size: 18pt;
        /* border: 1px solid red; */
    }
    .mb-3 .form-field .mb-content .input-text{
        display: block;
        width: 100%;
        height: 36px ;
        border-width: 0 0 2px 0;
        border-color: #5543ca;
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
    }
    .mb-3 .form-field .mb-content .error{
        border-color: #dd0e29;
    }

    .mb-3 .form-field .input-text:focus
    
    {
        outline: none;
    }
    .mb-3 .form-field label{
        position: absolute;
        top: -11px;
        left: 40px;
        cursor: text;
        /* transition: transform 0.2s ease-in-out; */
    }
    p{
        margin-left: 50px;
    }
</style>