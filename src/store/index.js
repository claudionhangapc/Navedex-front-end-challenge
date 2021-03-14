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
    },
    usuario_navers:null
  },
  mutations: {
    UPDATE_LOGIN(state,payload){
      state.login = payload
    },
    UPDATE_USUARIO(state,payload){
      state.usuario = payload;
    },
    UPDATE_USUARIO_NAVERS(state,payload){
      state.usuario_navers = payload;
    },
    ADD_USUARIO_NAVERS(state,payload){
      state.usuario_navers.push(payload);
    }
  },
  actions: {
    getUsuarioNavers(context){
      api.get("/navers/")
      .then(response=>{
        context.commit("UPDATE_USUARIO_NAVERS",response.data)
      })
    },
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
