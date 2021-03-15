<template>
    <section class="modal"  v-if="this.ativaModal" v-on:click="fecharModalTarget">
      <div class="modal-container-delete">
        <div class="modal-container-delete-item-2" >
          <button class="btn-close" v-on:click="fecharModal"><img src="@/assets/close.png" alt=""></button>
          <div>
            <p class="modal-container-delete-item-2-title">Naver atualizado</p>
          </div>
          <div>
            <p class="modal-container-delete-item-2-sub-title">
              Naver criado com sucesso!
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name:"modalupdatenaver",
  data(){
    return{
      ativaModal:true
    }
  },
  
  methods:{
    fecharModal(){
      this.ativaModal = false;
    },
    fecharModalTarget(event){
      if(event.target===event.currentTarget){
        this.fecharModal();
      }
    }
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

@media (max-width: 576px) {
  .modal-container{
    width: 100%;
  }
.modal-container-delete{
  width: 100%;
}
.modal-container-delete-item-2{
  width: 100%;
}

}
</style>
