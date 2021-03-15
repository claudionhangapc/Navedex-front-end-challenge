/* eslint-disable no-useless-escape */
export const helpers = {
  getOnlyYear(string){
    return string.substring(0, 10);
  },
  getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
  },
  checkUrl(url){
    let reg = new RegExp("^https?://(?:[a-z0-9\-]+\.)+[a-z0-9]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$");
    return reg.test(url);
  },
  checkIsOnlyNumber(text){

    let reg=/^[0-9]*[.]?[0-9]*$/;
    return reg.test(text);
  },
  validateTextField(text){
    let message = "";
    if(text.length==0){
      message = "campo o brigatório";
    }else{
      // validar o nome
      if(this.checkIsOnlyNumber(text)){
        message = "dado inválido, deve conter caracteres"
      }else{
        if(text.length<3){
          message = "dado inválido, deve conter pelo menos 3 caracteres"
        }
      }
    }
     return message;
  },
  validateTextFieldForm(data){
    let message=null;
    if(this.validateTextField(data)!=""){
      message = this.validateTextField(data);
    }
    return message
  },
  validateDateForm(data){
    let message=null;
    if(data==""){
      message = "campo o brigatório";
    }
    return message;
  },
  validateUrlForm(url){
    
    let message=null;
    if(url.length==0){
       message = "campo o brigatório";
    }else{
      if(!this.checkUrl(url)){
        message = "url inválido";
      }
    }  
    return message;
  },
   formatDate(data, formato) {
    if (formato == 'pt-br') {
      return (data.substr(0, 10).split('-').reverse().join('/'));
    } else {
      return (data.substr(0, 10).split('/').reverse().join('-'));
    }
  },
  validateEmail(text){
    let message= null
    let emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if(text.length==0){
      message = "email deve ser preenchido"
    }else{
      if(!emailPattern.test(text)){
        message = "email incorreto";
      }
    }   
    return  message;
  },
  vaildatePassWord(text){
    let message =null;
    if(text.length==0){
      message = "a senha deve ser preenchido"
    }else{
      if(text.length<6){
        message = "senha invalida";
      }
    }
    

    return message;
  }
}