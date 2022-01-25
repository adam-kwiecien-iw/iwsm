<template>
  <div class="wrapper">
    <img src="../../src/assets/smallLogo.png" alt="" width="50" height="50"> 
    <div class="text-center mt-4 name"> IntegrationWorks </div>
      <form class="p-3 mt-3" @submit.prevent="register">
        <div class="row">

          <div class="form-field d-flex align-items-center col-md-6 mb-4">
            <span class="far fa-user"></span>
            <input type="text" name="fName" id="fName" placeholder="First Name" v-model="fName">
          </div>
          <div class="form-field d-flex align-items-center col-md-6 mb-4">
            <span class="far fa-user"></span>
            <input type="text" name="lName" id="lName" placeholder="Last Name" v-model="lName">
          </div>

        </div>
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input type="text" name="jobName" id="jobName" placeholder="Job Title" v-model="jobName">
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input type="text" name="email" id="email" placeholder="Email" v-model="enteredEmail">
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Password" v-model="enteredPassword">
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Confirm Password" v-model="enteredPassword">
        </div>
        <div class="row">
          <div class="d-flex align-items-center col-md-6 mb-4"><button class="btn mt-3">Back</button></div>
          <div class="d-flex align-items-center col-md-6 mb-4"><button class="btn mt-3" v-on:click="post">Sign up</button></div>
        </div>
        
      </form>
    <div class="text-center fs-6"> <a href="#">Forget password?</a> or <router-link to="/register">Register</router-link></div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {ref, provide} from 'vue'
//import addEmployee from '../api/http'
export default {
  
  setup(){
    const router = useRouter();
    const fName = ref("");
    const lName = ref("");
    const jobName = ref("");
    const enteredEmail = ref("");
    const enteredPassword = ref("");

    provide('regEmail', enteredEmail)
    
    return{
      router,
      enteredEmail,
      enteredPassword,
      fName,
      lName,
      jobName
    }
  },

    methods:{
        post() {

            const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                      firstName: this.fName,
                      lastName: this.lName,
                      jobTitle: this.jobName,
                      email: this.enteredEmail
                      })
                    };
                    fetch("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees", requestOptions)
                    .then(response => response.json())
                    .then(data => ( console.log(data.id)));
                    alert( this.fName +  " added")
            },
      
    },
  //   provide:{
  //     username: this.enteredEmail,
  //     userpassword: this.enteredEmail,
  // }
}
</script>

<style scoped>



@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Open Sans', sans-serif
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
     /* box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff */
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
