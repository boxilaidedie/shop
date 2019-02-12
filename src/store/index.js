import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);




const state = {
    isLogin:false,
    username:''
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
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
})


export default store;