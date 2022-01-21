<template>
  <div class="register">
      <RegisterForm></RegisterForm>
      <p><router-link class="r-link" to="/login">Log In</router-link></p> 
  </div>
 
</template>


<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {

    components:{
        RegisterForm
    },
}

</script>

<style>
.r-link{
    font-size: 10pt;
    color: blue;
    font-weight: bold;
}

</style>