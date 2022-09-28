<template>
  <div class="main">
<img class="logo" src="../assets/sign up.png" alt="">
<h1>Sign Up</h1>
<div class="signup_area">
  <form @submit.prevent="SignUp()"> 
    <input type="text"  v-model="register.name" placeholder="Enter Name">
    <input type="email" v-model="register.email" placeholder="Enter E-mail">
    <input type="password" v-model="register.password"
     placeholder="Enter Password">

    <button class="btn btn-success">
    Registration
    </button> 
  </form>
  
  <p>
    <router-link to="/login">
      Login
    </router-link>
  </p>
</div>
</div>
</template>

<script>
  import axios from 'axios'
export default {
name:'signup',
data(){
return{
  register:{
          name:'',
          email:'',
          password:''
       }  
      }
   },
   methods:{
      SignUp(){
        axios
            .post('http://127.0.0.1:8000/api/register',this.register)
            .then((res)=>{
                console.log(res);
                this.$router.push({ name:'login' })
            })
      }
   }

}
</script>

<style>
 
</style>>

