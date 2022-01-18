<template>
    <form @submit.prevent="login">
      <input type="text" class="txt" placeholder = "Email" v-model="enteredEmail">
      <br />
      <br />
      <input type="password" class="txt" placeholder = "Password" v-model="enteredPassword">
      <br />
      <br />
      <button class="btn-confirm" v-on:click="Confirmed">Log In</button>
    </form>
</template>

<script>
import { inject } from 'vue'
import {useRouter} from 'vue-router'
export default {
  
  setup(){
    const email = inject('userpassword')
    const password = inject('userpassword')
    const router = useRouter();

    
    return{
      email,
      password,
      router
    }
  },
  
 data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
    }
  },

  methods: {
    Confirmed() {
        
        console.log('pressed')
        if (this.enteredEmail == this.email && this.password == this.enteredPassword){
          console.log('this is true')
          this.router.replace('/');
        }
        else{
         this.enteredPassword = ""
         alert("Incorrect email address and/or password")
        }
      }
    }
}
</script>
<style scoped>

.btn-confirm {
  width:150px;
  height:30px;
  font-size: 11pt;
}

.txt {
  width: 300px;
  height: 40px;
  color: black;
  border-block-end-color: black;
  border-block-start-color: black;
  border-left-color: black;
  border-right-color: black;
  padding-left: 10px;
  font-size:10pt;
}

</style>
