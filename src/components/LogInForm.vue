
// login UI 
<template>
    <div class="wrapper">
      <img src="../../src/assets/smallLogo.png" alt="" width="50" height="50"> 
      <div class="text-center mt-4 name"> IntegrationWorks </div>
      <form class="p-3 mt-3" @submit.prevent="login">
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input type="text" name="userName" id="userName" placeholder="Email" v-model="enteredEmail">
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Password" v-model="enteredPassword">
        </div>
        <button class="btn mt-5" v-on:click="Confirmed">Login</button>
      </form>
      <div class="text-center fs-6"> <a href="#">Forget password?</a> or <router-link to="/register">Register</router-link></div>
    </div>
</template>
// Depending on the user's input in email and password, some appropriate message will pop up or the user will be routed to the Home page
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

// IW brand font and colors are used
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




@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Open Sans', sans-serif;

 }

 body {
     background: #F8F5Ec
 }

 .wrapper {
     max-width: 400px;
     min-height: 500px;
     margin: auto;
     padding: 40px 30px 30px 30px;
     background-color: #ecf0f3;
     border-radius: 15px;
     box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff
 }

 .logo {
     width: 80px;
     margin: auto
 }

 .logo img {
     width: 100%;
     height: 80px;
     object-fit: cover;
     border-radius: 50%;
     box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7, -8px -8px 15px #fff
 }

 .wrapper .name {
     font-weight: 600;
     font-size: 1.4rem;
     letter-spacing: 1.3px;
     padding-left: 10px;
     color: #555
 }

 .wrapper .form-field input {
     width: 100%;
     display: block;
     border: none;
     outline: none;
     background: none;
     font-size: 1rem;
     color: #666;
     padding: 10px 15px 10px 10px
 }

 .wrapper .form-field {
     padding-left: 10px;
     margin-bottom: 20px;
     border-radius: 20px;
     border: 1px solid #adadad;
     /* box-shadow: inset 8px 8px 8px #ffffff, inset -8px -8px 8px #fff */
 }

 .wrapper .form-field .fas {
     color: #555
 }

 .wrapper .btn {
     box-shadow: none;
     width: 97%;
     height: 40px;
     background-color: #01131b;
     color: #fff;
     border-radius: 25px;
     box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
     letter-spacing: 1.3px
 }

 .wrapper .btn:hover {
     background-color: #B92222
 }

 .wrapper a {
     text-decoration: none;
     font-size: 0.8rem;
     color: #B92222
 }

 .wrapper a:hover {
     color: #01131b
 }

 @media(max-width: 380px) {
     .wrapper {
         margin: 30px 20px;
         padding: 40px 15px 15px 15px
     }
 }
</style>
