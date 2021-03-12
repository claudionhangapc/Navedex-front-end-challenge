import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://navedex-api.herokuapp.com/v1"
})
axiosInstance.interceptors.request.use(
  function(config){
    const token = window.localStorage.token;
    if(token){
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error){
    return Promise.reject(error);
  }
)
export const api = {
  get(endpoint){
    return axiosInstance.get(endpoint) ;
  },
  post(endpoint,body){
    return axiosInstance.post(endpoint,body);
  },
  login(body){
    return  axios.post("https://navedex-api.herokuapp.com/v1/users/login",body);
  },
 
}