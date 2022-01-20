<template>
  <div class="login">
      <h2>Log In</h2>
      <form @submit.prevent="Login">

        <h2>{{username}}</h2>
        <LogInForm></LogInForm>

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
      username: "admin",
      userpassword: "admin",
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