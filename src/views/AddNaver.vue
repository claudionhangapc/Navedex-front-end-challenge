
<template>
  <div class="create-container">
      <TheHeader></TheHeader> 
      <section class="create-section">
      <div class="create-section-container">
        <div class="create-section-container-header">
          <a> <img src="@/assets/seta.svg" alt=""><span>Adicionar Naver</span></a>
        </div>
        <div class="create-section-container-content">
          <!-- Item -1 -->
          <div class="create-section-container-content-item">

            <div class="">
              <label for="" class="">Nome</label>
              <input type="text" class="" placeholder="Nome" v-model="new_naver.name">
              <p class="error" v-if="msg.name">{{msg.name}} </p>
            </div>

            <div class="">
              <label for="" class="">Data de nascimento</label>
              <input type="date" v-bind:class="{colorDate:!new_naver.birthdate}" placeholder="idade" v-model="new_naver.birthdate">
              <p class="error" v-if="msg.birthdate">{{msg.birthdate}}</p>
            </div>

            <div class="">
              <label for="" class="">Projetos que participou</label>
              <input type="text" v-model="new_naver.project" class="" placeholder="Projetos que participou">
              <p class="error" v-if="msg.project">{{msg.project}}</p>
            </div>

          </div>

          <!-- Item -2 -->
          <div class="create-section-container-content-item">
            <div class="">
              <label for="" class="">Cargo</label>
              <input type="text" class="" v-model="new_naver.job_role" placeholder="Cargo">
              <p class="error" v-if="msg.job_role">{{msg.job_role}}</p>
            </div>

            <div class="">
              <label for="" class="">Data de admissão</label>
              <input type="date" v-bind:class={colorDate:!new_naver.admission_date} v-model="new_naver.admission_date"  placeholder="Tempo de empresa">
              <p class="error"  v-if="msg.admission_date">{{msg.admission_date}}</p>
            </div>

            <div class="">
              <label for="" class="">URL da foto do Naver</label>
              <input type="text" v-model="new_naver.url" class="" placeholder="URL da foto do Naver">
              <p v-if="msg.url" class="error">{{msg.url}}</p>
            </div>
          </div>
        </div>
        <div class="div-send">
          <a href="" v-on:click.prevent="validarFormulario"> Salvar</a>
        </div>
      </div>

    </section>
      <transition>
         <router-view></router-view>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import { api } from '@/services.js'
import {mapState,mapActions} from "vuex";
import {helpers} from '@/helpers.js'
export default {
  name: 'AddNaver',
  data(){
    return{
      new_naver:{
        job_role:"",
        admission_date:"",
        birthdate:"",
        project:"",
        name:"",
        url:""
      },
      msg:{
          job_role:null,
          admission_date:null,
          birthdate:null,
          project:null,
          name:null,
          url:null
        }
    }
  },
  components: { 
    TheHeader,
  },
   computed:{
    ...mapState(["usuario_navers"])
  },
  methods:{
    ...mapActions(["getUsuarioNavers"]),

    AdicionarNaver(naver){
      api.post("/navers",naver)
      .then((response)=>{
        console.log(response);
        this.getUsuarioNavers();
        this.$router.push( {name:'modalcreatnaver'});
      }).catch((error)=>{
        //alert(error.response);
        console.log(error.response.data.message)
      })   
    },
    validarFormulario(){

       this.msg.name = helpers.validateTextFieldForm(this.new_naver.name);
       this.msg.project = helpers.validateTextFieldForm(this.new_naver.project);
       this.msg.job_role = helpers.validateTextFieldForm(this.new_naver.job_role);

       this.msg.birthdate= helpers.validateDateForm(this.new_naver.birthdate);
       this.msg.admission_date= helpers.validateDateForm(this.new_naver. admission_date);
       this.msg.url = helpers.validateUrlForm(this.new_naver.url);
      
        // verificar se existe algum erro no formulario
       let result = !Object.values(this.msg).every(o => o === null);
       if(!result){
         let add_naver = {
                            job_role:"",
                            admission_date:"",
                            birthdate:"",
                            project:"",
                            name:"",
                            url:""
                      };
         
         add_naver.job_role = this.new_naver.job_role;
         add_naver.project = this.new_naver.project;
         add_naver.name = this.new_naver.name;
         add_naver.url = this.new_naver.url;

         add_naver.admission_date =helpers.formatDate(this.new_naver.admission_date,'pt-br');
         add_naver.birthdate = helpers.formatDate( this.new_naver.birthdate,'pt-br')

         this.AdicionarNaver(add_naver);
       }

    }
  }
}
</script>

<style scoped>

  /*
 Pagina Create
*/
.create-container{
  max-width: 1216px;
  margin: 0 auto;
}
.create-section-container {
  max-width: 592px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
}

.create-section-container-header {
  margin-bottom: 32px;
}
.create-section-container-header a {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 36px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #212121;
}

.create-section-container-header a img {
  width: 11.67px;
  height: 19.8px;
  margin-right: 22.49px;
}

.create-section-container-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.create-section-container-content-item {
  display: flex;
  flex-direction: column;
}

.create-section-container-content-item > div {
  width: 280px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}
.create-section-container-content-item > div label {
  margin-bottom: 4px;
  font-size: 0.875em;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #212121;
  line-height: 18px;
}

.create-section-container-content-item input[type="text"],
.create-section-container-content-item input[type="date"] {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding-left: 8px;
  border: 1px solid #424242;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #212121;

}
.colorDate{color: #9E9E9E}
.create-section-container-content-item input[type="text"]::placeholder,
.create-section-container-content-item input[type="date"]::placeholder {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #9e9e9e;
}
.div-send {
  display: flex;
  justify-content: flex-end;
}
.div-send a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 24px;
  width: 176px;
  background-color: #212121;
  display: inline-block;
  color: #ffffff;
  text-align: center;
  padding: 8px 16px;
  box-sizing: border-box;
  text-decoration: none;
}
.error{
  color: rgb(114, 28, 36);
  font-family: "Montserrat", sans-serif;
  font-size: 0.875em;
}
/*
 Pagina Create Mobile
*/

@media (max-width: 576px) {
  .create-section-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px; 
  }
  .create-section-container-header {
    width: 280px;
  }
  .create-section-container-content {
    width: 280px;
  }
  .div-send {
    display: flex;
    justify-content: center;
  }
  header{
    padding-left:32px;
    padding-right: 32px;
  }
}

</style>