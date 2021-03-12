
<template>
  <div class="create-container">
      <TheHeader></TheHeader> 
      <section class="create-section">
      <div class="create-section-container">
        <div class="create-section-container-header">
          <a href=""> <img src="@/assets/seta.svg" alt=""><span>Adicionar Naver</span></a>
        </div>
        <div class="create-section-container-content">
          <!-- Item -1 -->
          <div class="create-section-container-content-item">

            <div class="">
              <label for="" class="">Nome</label>
              <input type="text" class="" placeholder="Nome">
            </div>

            <div class="">
              <label for="" class="">idade</label>
              <input type="text" class="" placeholder="idade">
            </div>

            <div class="">
              <label for="" class="">Projetos que participou</label>
              <input type="text" class="" placeholder="Projetos que participou">
            </div>

          </div>

          <!-- Item -2 -->
          <div class="create-section-container-content-item">
            <div class="">
              <label for="" class="">Cargo</label>
              <input type="text" class="" placeholder="Cargo">
            </div>

            <div class="">
              <label for="" class="">Tempo de empresa</label>
              <input type="text" class="" placeholder="Tempo de empresa">
            </div>

            <div class="">
              <label for="" class="">URL da foto do Naver</label>
              <input type="text" class="" placeholder="URL da foto do Naver">
            </div>
          </div>
        </div>
        <div class="div-send">
          <a href="" v-on:click.prevent="AdicionarNaver"> Salvar</a>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import { api } from '@/services.js'
export default {
  name: 'AddNaver',
  data(){
    return{
      naver:{
        job_role:"Desenvolvedor",
        admission_date:"19/08/2018",
        birthdate:"",
        project:"Gestore de trafego",
        name:"ff ",
        url:""
      }
    }
  },
  components: { 
    TheHeader,
  },
  methods:{
    AdicionarNaver(){
      api.post("/navers",this.naver)
      .then((response)=>{
        alert("testet");
         console.log(response);
      }).catch((error)=>{
        //alert(error.response);
        console.log(error.response.data.message)
      })
     
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

.create-section-container-content-item input[type="text"] {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding-left: 8px;
  border: 1px solid #424242;
}

.create-section-container-content-item input[type="text"]::placeholder {
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
/*
 Pagina Create Mobile
*/

@media (max-width: 576px) {
  .create-section-container {
    width: 100%;
    align-items: center;
    justify-content: center;
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
}

</style>