<template>
  <section class="login-section">
    <form>
      <div class="login-container">
        <div class="login-container-logo">
          <img src="@/assets/logo.svg" alt="" />
        </div>
        <div class="login-container__margin-bottom">
          <label for="" class="login-container__label">E-mail</label>
          <input
            type="email"
            class="login-container__input"
            v-model="login.email"
            name="email"
            placeholder="Email"
          />
          <p class="error" v-if="msg.email">{{msg.email}}</p>
        </div>
        <div class="login-container__margin-bottom">
          <label for="" class="login-container__label">Senha</label>
          <input
            type="password"
            v-model="login.senha"
            name="senha"
            class="login-container__input"
            placeholder="Senha"
          />
          <p class="error" v-if="msg.senha">{{msg.senha}}</p>
        </div>
        <div v-if="errorMessage" class="login-container__margin-bottom errorMessage">
          <label for="" class="login-container__label">{{errorMessage}}</label>
        </div>
        <div>
          <input type="submit" value="Entrar" v-on:click.prevent="logar" />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src
//import axios from "axios";
import {helpers} from '@/helpers.js'
export default {
  name: "Login",
  components: {},
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      msg:{
        senha:null,
        email: null,
      },
      errorMessage:null
    }
  },
  methods: {
    logar() {
      this.msg.email = helpers.validateEmail(this.login.email);
      this.msg.senha = helpers.vaildatePassWord(this.login.senha);
      let result = !Object.values(this.msg).every(o => o === null);
       if(!result){
      this.errorMessage=null;
      this.$store.dispatch("logarUsuario", this.login)
      .then(()=>{
        this.$router.push("/")
      })
      .catch(()=>{
        this.errorMessage = "email ou senha incorreto";
      })     
      } 
    }
  }
};
</script>
<style scoped>
.login-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-container {
  flex-direction: column;
  width: 448px;
  box-sizing: border-box;
  padding: 40px 32px;
  border: 1px solid #212121;
}
.login-container > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.login-container-logo {
  margin-bottom: 40px;
}
.login-container-logo img {
  height: 60px;
}
.login-container__input {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding-left: 8px;
  border: 1px solid #424242;
  /*width: 384px;*/
}
.login-container__input::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #9e9e9e;
}

.login-container__input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #9e9e9e;
}

.login-container__input::placeholder {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #9e9e9e;
}
.login-container input[type="submit"] {
  box-sizing: border-box;
  border: none;
  height: 40px;
  width: 100%;
  background: #212121;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 24px;
}
.login-container__label {
  margin-bottom: 4px;
  font-size: 0.875em;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #212121;
  line-height: 18px;
}
.errorMessage{
  background-color: rgb(248, 215, 218);
  border: 2px solid rgb(245, 198, 203); 
  min-height: 40px;
  padding: 8px;
  box-sizing: border-box;
}
.errorMessage label{
  color: rgb(114, 28, 36);
  text-align: center;
}
.login-container__margin-bottom {
  margin-bottom: 32px;
}
.error{
  color: rgb(114, 28, 36);
  font-family: "Montserrat", sans-serif;
  font-size: 0.875em;
}
/*
  Pagina index Mobile
*/
@media (max-width: 576px) {
  .login-section {
    width: 100%;
    box-sizing: border-box;
    padding-left: 32px;
    padding-right: 32px;
  }
  .login-container {
    width: 100%;
  }
}


</style>
