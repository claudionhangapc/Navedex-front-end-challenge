<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { api } from '@/services.js'
export default {
 methods:{
     async validateToken(){
      /*
      *Voltar na pagina de login 
      * se o token for invalido
      */
      try{
        
       await api.get("/navers");
      }catch(error){
        
        window.localStorage.removeItem("token");
        this.$router.push("/login")
        //console.log(error);
      }
    }
 },
 created(){
   if(window.localStorage.token){
       this.validateToken();
    }else{
      this.$router.push("/login");
    }
      
 }
}
</script>

<style>

/*
 Reset css
*/

* {
  margin: 0;
  padding: 0;
}

textarea:focus,
input:focus {
  outline: none;
}

/*
importando a font
 */

 @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
 
</style>
