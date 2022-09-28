<template>
  <div class="main">
        <img class="logo" src="../assets/sign up.png" alt="">
        <h1>Login</h1>
        <div class="login">
            <form @submit.prevent="UserLogin()"> 
                <input type="email" v-model="login.email"
                    placeholder="Enter E-mail">

                <input type="password" 
                v-model="login.password"
                placeholder="Enter Password">
                <button class="btn btn-primary">Login</button>
          </form>
            <p>
                <router-link to="/register">
                    Register
                </router-link>
            </p>
                
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import {router} from 'vue-router'
export default {
    name:'login',
    data(){
        return{
            login:{
                email:'',
                password:''
            }
         
        }
    },
    methods:{
        UserLogin(){
            axios
            .post('http://127.0.0.1:8000/api/login',this.login)
            .then((res)=>{
                console.log(res);
                if(res.data.token){
                    localStorage.setItem('token',res.data.token);
                    localStorage.setItem('user',res.data.user.name);
                    this.$router.push('/');
                }
            })
        }
    },
    mounted(){
        const getToken = localStorage.getItem("token");
        
    }
     
} 
</script>

<style>

</style>
