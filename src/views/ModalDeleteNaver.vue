<template>
    <section class="modal" v-if="this.ativaModalDeleteNaver" v-on:click="fecharModalDeleteNaverTarget">
      <div class="modal-container-delete">
        <div class="modal-container-delete-item-1" v-if=" modalContainerControl">
          <div>
            <p class="modal-container-delete-item-1-title">Excluir Naver</p>
          </div>
          <div>
            <p class="modal-container-delete-item-1-sub-title">
              Tem certeza que deseja excluir este Naver ?
            </p>
          </div>
          <div class="container-btn">
            <button class="btn-cancel" v-on:click="fecharModalDeleteNaver">Cancelar</button>
            <button class="btn-delete" v-on:click="deleteNaver">Excluir</button>
          </div>
        </div>
        <transition>
        <div class="modal-container-delete-item-2" v-if="!modalContainerControl">
          <button class="btn-close" v-on:click="fecharModalDeleteNaver"><img src="@/assets/close.png" alt=""></button>
          <div>
            <p class="modal-container-delete-item-2-title">Excluir Naver</p>
          </div>
          <div>
            <p class="modal-container-delete-item-2-sub-title">
              Naver excluíds com sucesso!
            </p>
          </div>
        </div>
        </transition>
      </div>
    </section>
</template>

<script>
import { api } from '@/services.js'
import {mapState,mapActions} from "vuex";

export default {
  name:"modaldeletenaver",
  props:["id"],
  data(){
    return{
      modalContainerControl:true,
      ativaModalDeleteNaver:false
    }
  },
  computed:{
    ...mapState(["usuario_navers"])
  },
  methods:{
    ...mapActions(["getUsuarioNavers"]),
    getNaver(id){
      api.get(`/navers/${id}`)
      .then(()=>{
       this.abrirModalDeleteNaver();
     })
     .catch((error)=>{
       console.log(error);
       alert("Naver não encontrada.");
       this.$router.push('/');
     }); 
    },
    deleteNaver(){
      api.delete(`/navers/${this.id}`)
      .then(()=>{
        this.getUsuarioNavers();
         this.modalContainerControl=false;
      })
     
    },
    fecharModalDeleteNaver(){
      this.ativaModalDeleteNaver = false;
      this.$router.push('/');
    },
    abrirModalDeleteNaver(){
       this.ativaModalDeleteNaver = true;
    },
    fecharModalDeleteNaverTarget(event){
      if(event.target===event.currentTarget){
        this.fecharModalDeleteNaver();
      }
    }
  },
  created(){
    this.getNaver(this.id);
  },
  beforeRouteUpdate(to,from,next){
    this.getNaver(`${to.params.id}`);
    next();
  }
}
</script>

<style scoped>
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }

.modal-container {
  display: flex;
  height: 503px;
  width: 1006px;
  position: relative;
}
.modal-container-delete{
  /* width: 592px;
  height: 233px;*/
  background: #fff;
}
.modal-container-delete-item-1{
  box-sizing: border-box;
  width: 592px;
  padding: 32px;
}

.modal-container-delete-item-1-title{
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: #212121;
}
.modal-container-delete-item-1-sub-title{
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  color: #212121;
  margin-top: 24px;
  margin-bottom: 33px;
}

.container-btn{
  display: flex;
  justify-content: flex-end;
}

.btn-cancel{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 24px;
  width: 176px;
  background-color: #fff;
  color: #212121;
  text-align: center;
  padding: 8px 16px;
  box-sizing: border-box;
  border: 1px solid #212121;
  outline: none;
  cursor: pointer;
  margin-right: 24px;
}

.btn-delete{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 24px;
  width: 176px;
  background-color: #212121;
  color: #ffffff;
  text-align: center;
  padding: 8px 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
}

.modal-container-delete-item-2{
  position: relative;
  box-sizing: border-box;
  width: 592px;
  padding: 32px;
}
.modal-container-delete-item-2-title{
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: #212121;
}
.modal-container-delete-item-2-sub-title{
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  color: #212121;
  margin-top: 24px;
}

.btn-close{
    position: absolute;
    right: 24px;
    top:24px;
    padding: 5px;
    cursor: pointer;
    background: #fff;
    border: none;
    outline: none;
}

.btn-close img{
    height: 14px;
    width: 14px;
}
</style>