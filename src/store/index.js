import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const state = {
    isLogin:false,
    username:'',
    items:[]
}

const getters = {   //监听state中值得变化，然后全局改变
    login(state){
        return state.isLogin
    }
}
const mutations = { //更改state中值
    show(state){
        state.isLogin = true
    },
    hide(state){
        state.isLogin = false
    },
    getItems(state){
        return new Promise((resolve,reject)=>{
            axios.get('/api/goods?skip=5&page=1')
            .then((rs)=>{
                state.items = rs.data.data
                resolve()
            })
        })
    }
}

const actions = {
    actionA(context){
        return context.commit('getItems')
        
    }
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})


export default store;