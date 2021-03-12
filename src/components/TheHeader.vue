<template>
    <header>
       <div class="header-container">
        <div>
          <img src="@/assets/logo.svg" alt=""> 
        </div>
        <div>
          <a href="" v-on:click.prevent="deslogar">Sair</a>
        </div>
       </div> 
     </header>
</template>
<script>

export default {
  name: 'TheHeader',
  components: {    
  },
  data(){
    return{
    
    }
  },
  methods:{
    deslogar(){
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }  
}
</script>

<style scoped>
 
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
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
</style>