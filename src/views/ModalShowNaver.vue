<template>
    <section class="modal" v-if="this.ativaModalShowNaver" v-on:click="fecharModalShowNaverTarget">
      <div class="modal-container">
        <button class="btn-close" v-on:click="fecharModalShowNaver"><img src="@/assets/close.png" alt=""></button>
         <div class="modal-container-left">
           <img :src="naver.url" :alt="naver.name">
         </div>
         <div class="modal-container-right">
           <div>
            <div class="modal-container-div-margin-botton">
              <p class="modal-container-naver-name">{{naver.name}}</p>
              <p class="modal-container-info">{{naver.job_role}}</p>
            </div>

            <div class="modal-container-div-margin-botton ">
              <p class="modal-container-info-title">idade</p>
              <p class="modal-container-info">{{naver.birthdate | getIdade}}</p>
            </div>

            <div class="modal-container-div-margin-botton ">
              <p class="modal-container-info-title">Tempo de empresa</p>
              <p class="modal-container-info">{{naver.admission_date |  getTempoEmpresa}}</p>
            </div>

            <div >
              <p class="modal-container-info-title">Projetos que participou</p>
              <p class="modal-container-info">{{naver.project}}</p>
            </div>
          </div>

          <div>
            <div class="modal-container-change">
              <router-link :to="{name:'modaldeletenaver', params:{id:naver.id}}" class="home-container-content-alter-delete">
                  <img  src="@/assets/deletar.svg" alt="">
              </router-link>
                  
              <router-link :to="{name:'editar', params:{id:naver.id}}" class="home-container-content-alter-edit">
                <img src="@/assets/editar.svg" alt="">
              </router-link>
            </div>
          </div>  
         </div>
      </div>
    </section>
</template>

<script>
import { api } from '@/services.js'
import { helpers } from '@/helpers.js'


export default {
  name:"modalshownaver",
  props:["id"],
  data(){
    return{
      naver:null,
      ativaModalShowNaver:false
    }
  },
  filters:{
    getIdade(valor){
      let ano = helpers.getOnlyYear(valor);
      return helpers.getAge(ano);
    },
    getTempoEmpresa(valor){
       let ano = helpers.getOnlyYear(valor);
      return helpers.getAge(ano)+" anos";
    }
    
  },
  methods:{
    getNaver(id){
      api.get(`/navers/${id}`)
      .then(response=>{
       //console.log(response);
       this.naver = response.data;
       this.abrirModalShowNaver();
      
     }); 
    },
    fecharModalShowNaver(){
      this.ativaModalShowNaver = false;
      this.$router.push('/');
    },
    abrirModalShowNaver(){
       this.ativaModalShowNaver = true;
    },
    fecharModalShowNaverTarget(event){
      if(event.target===event.currentTarget){
        this.fecharModalShowNaver();  
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
.modal-container-left{
 flex:1;
}
.modal-container-left img{
 display: block;
 width: 100%;
 height: 100%;
}
.modal-container-right{
  box-sizing: border-box;
  padding-left: 30px;
  padding-top: 32px;
  background-color: #ffffff;
  flex:1;
}
.modal-container-info {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
}

.modal-container-info-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.modal-container-naver-name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.modal-container-div-margin-botton {
  margin-bottom: 24px;
}

.home-container-content-alter-delete {
  display: inline-block;
  margin-left: 5px;
  margin-right: 16px;
  width: 14px;
  height: 18px;
}

.home-container-content-alter-edit {
  display: inline-block;
  height: 18px;
  width: 18px;
}

.modal-container-change {
  margin-top: 110px;
}

.btn-close {
  position: absolute;
  right: 0;
  margin-right: 16px;
  margin-top: 16px;
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
@media (max-width: 576px) {
  .modal-container{
    width:280px;
    flex-direction: column;
    padding-left: 32px;
    padding-right: 32px;
    height: auto;
    
  }
  .modal-container-left{
   height: 250px;
  }

.modal-container-right{
  box-sizing: border-box;
  padding-left: 30px;
  padding-top: 16px;
  background-color: #ffffff;
  flex:1;
  }
  .modal-container-change {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  .modal-container-div-margin-botton {
      margin-bottom: 14px;
      }

  .btn-close {  
    top: -36px;
    margin-right: -6px;
    }
  
  .modal-container-naver-name{
    font-size: 1.25em;
    line-height: 20px;
  }
  }

</style>