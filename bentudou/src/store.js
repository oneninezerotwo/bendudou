import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
            shows:true,
            names:"",
            namess:""
    }
})



export default store