// apply the login form in login page
<template>
  <div class="login">
      <form @submit.prevent="Login">
        <h2>{{username}}</h2>
        <LogInForm></LogInForm>

      </form>
  </div>
</template>
// import the login form from components folder
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