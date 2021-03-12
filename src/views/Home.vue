<template>
  <div class="home">
    <TheHeader></TheHeader> 
    <section class="home-container">
       <div class="home-container-header">
        <h2>Navers</h2>
        <router-link to="/adicionar" tag="button">Adicionar Naver</router-link>
        
       </div>
       <div class="home-container-content">
         <!-- Item - 1 -->
         <div v-for="naver in  navers" v-bind:key="naver.id">
           <div>
            <img  class="img-people" src="@/assets/IMG_9945_Juliano_Reis.jpg" alt="">
           </div>
           <div class="home-container-content-info">
             <p class="people-name">
               {{naver.name}}
             </p>
             <p class="people-job">
              {{naver.job_role}}
             </p>
           </div>
           <div class="home-container-content-alter">
             <a href="" class="home-container-content-alter-delete">
              <img  src="@/assets/deletar.svg" alt="">
            </a>
            <a href="" class="home-container-content-alter-edit">
              <img src="@/assets/editar.svg" alt="">
            </a>
           </div>
         </div>
          <!-- Fim Item - 1 -->   
       </div>

     </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import { api } from '@/services.js'
export default {
  name: 'Home',
  components: {   
    TheHeader,
  },
  data(){
    return{
      navers:null
    }
  },
  methods:{
    getNavers(){
      api.get("/navers/")
      .then(response=>{
       //console.log(response);
       this.navers = response.data;
     });  
    }
  },
  created(){
    this.getNavers();
  }
}
</script>
<style scoped>
  
  .home{
    max-width: 1216px;
    margin: 0 auto;
  }

  .header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;

  margin-bottom: 40px;
}
.header-container img {
  height: 37px;
}
.header-container a {
  font-family: "Montserrat", sans-serif;
  font-size: 0.875em;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  text-decoration: none;
  color: #000000;
}

.home-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.home-container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  flex-wrap: wrap;
}

.home-container-header h2 {
  /* Título 2 */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5em;
  line-height: 48px;
  color: #212121;
}

.home-container-header button {
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

.home-container-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.home-container-content > div {
  max-width: 281px;
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
}

.home-container-content .img-people {
  display: block;
  width: 100%;
  max-height: 280px;
}

.home-container-content-info {
  margin-top: 16px;
}
.people-name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 18px;
  margin-bottom: 4px;
  color: #212121;
}
.people-job {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 24px;
  color: #212121;
  margin-bottom: 13px;
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

/*
  Pagina Home Mobile
*/
@media (min-width: 576px) and (max-width: 1200px) {
  .home-section {
    padding-left: 32px;
    padding-right: 32px;
  }

  .home-container-content {
    justify-content: center;
  }

  .home-container-content > div {
    margin-left: 31px;
    margin-right: 31px;
  }
}

@media (max-width: 576px) {
  header {
    padding-left: 32px;
    padding-right: 32px;
  }

  .home-container-content {
    flex-direction: column;
    align-items: center;
  }
  .home-container-header {
    flex-direction: column-reverse;
  }
  .home-container-header button {
    margin-bottom: 20px;
  }
}

</style>