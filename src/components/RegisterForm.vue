<template>
    <form @submit.prevent="register">
            <br />
      <input type="text" class="txt" placeholder = "First Name" v-model="enteredEmail">
      <br />
      <br />
      <input type="text" class="txt" placeholder = "Last Name" v-model="enteredEmail">
      <br />
      <br />
      <input type="text" class="txt" placeholder = "Job Title" v-model="enteredEmail">
      <br />
      <br />
      <input type="text" class="txt" placeholder = "Email" v-model="enteredEmail">
      <br />
      <br />
      <input type="password" class="txt" placeholder = "Password" v-model="enteredPassword">
      <br />
      <br />
      <button class="btn-confirm" v-on:click="Confirmed">Register</button>

    </form>
</template>

<script>
import {useRouter} from 'vue-router'
import {ref, provide} from 'vue'
export default {
  
  setup(){
    const router = useRouter();
    const enteredEmail = ref("");
    const enteredPassword = ref("");

    provide('regEmail', enteredEmail)
    
    return{
      router,
      enteredEmail,
      enteredPassword
    }
  },

  methods: {
    Confirmed() {
        
        console.log('pressed')
        if (this.enteredEmail == this.email && this.password == this.enteredPassword){
          console.log('this is true')
          this.router.replace('/login');
        }
        else{
          this.enteredPassword = ""
          alert("Incorrect email address and/or password")
        }
      }
    },
  //   provide:{
  //     username: this.enteredEmail,
  //     userpassword: this.enteredEmail,
  // }
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
