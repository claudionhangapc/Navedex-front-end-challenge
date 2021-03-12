import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services.js'
Vue.use(Vuex);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:false,
    usuario:{
      email:"",
      senha:""
    }
  },
  mutations: {
    UPDATE_LOGIN(state,payload){
      state.login = payload
    },
    UPDATE_USUARIO(state,payload){
      state.usuario = payload;
    }
  },
  actions: {
    logarUsuario(context,payload){
      return api.login({
        email:payload.email,
        password:payload.senha
      }).then((response)=>{
        window.localStorage.token=`Bearer ${response.data.token}`; 
      })
      
    },
    deslogarUsuario(context){
      context.commit("UPDATE_USUARIO",{
        email:"",
        senha:""
      });
      window.localStorage.removeItem("token");
    }
  },
  modules: {
  }
})
