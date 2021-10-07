import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            token:null,
            user:null,
            users:null
        }
    },
    getters:{
        token(state){
            return state.token = localStorage.getItem('token')
        },
        users(state){
            return state.users
        }
    },
    mutations:{
        SET_TOKEN(state, payload){
            state.token = payload
        },
        SET_USER(state, payload){
            state.user = payload
        },
        SET_USERS(state, payload){
            state.users = payload
        },

    },
    actions:{
        token(context, payload){
            context.commit('SET_TOKEN', payload)
        },
        user(context, payload){
            context.commit('SET_USER', payload)
        },
        users(context, payload){
            context.commit('SET_USERS', payload)
        },
    }
})

export default store;