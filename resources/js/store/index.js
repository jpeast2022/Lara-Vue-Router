import { createStore } from "vuex"

const store = createStore({

    state: {
        // define variables
        token : JSON.parse(localStorage.getItem('token')) || 0
        
    },

    mutations: {
        //  update variable value
        UPDATE_TOKEN(state,payload){
            state.token = payload
        }
    },

    actions: {
        // action to be performed
        setToken(context,payload){
            localStorage.setItem('token', JSON.stringify(payload))
            context.commit('UPDATE_TOKEN',payload)
        },
        removeToken(context, payload){
            localStorage.removeItem('token')
            localStorage.setItem('token',JSON.stringify(payload))
            context.commit('UPDATE_TOKEN', payload)
        }
    },

    getters: {
        // get state variable value
        getToken: function(state){
            return state.token.bearerToken;
        },
        getTokenName: function(state){
            return state.token.name;
        }
    }
})

export default store;