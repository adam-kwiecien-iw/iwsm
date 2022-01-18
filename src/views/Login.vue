<template>
  <div class="login">
      <h2>Log In</h2>
      <form @submit.prevent="Login">

        <h2>{{username}}</h2>
        <LogInForm></LogInForm>
        <p><router-link class="r-link" to="/register">Register</router-link></p> 

      </form>
  </div>
</template>

<script>  
import LogInForm from '@/components/LogInForm.vue'

export default {
    components:{
        LogInForm,
    },
      provide:{
      username: "adam",
      userpassword: "adam",
  },
    
}
</script>

<style>

.r-link{
    font-size: 11pt;
    color: blue;
    font-weight: bold;
}
</style>