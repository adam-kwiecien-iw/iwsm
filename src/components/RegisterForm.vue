<template>
    <form @submit.prevent="register">
            <br />
      <input type="text" class="txt" placeholder = "First Name" v-model="fName">
      <br />
      <br />
      <input type="text" class="txt" placeholder = "Last Name" v-model="lName">
      <br />
      <br />
      <input type="text" class="txt" placeholder = "Job Title" v-model="jobName">
      <br />
      <br />
      <input type="text" class="txt" placeholder = "Email" v-model="enteredEmail">
      <br />
      <br />
      <input type="password" class="txt" placeholder = "Password" v-model="enteredPassword">
      <br />
      <br />
      <button class="btn-confirm" v-on:click="post">Register</button>

    </form>
</template>

<script>
import {useRouter} from 'vue-router'
import {ref, provide} from 'vue'
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
