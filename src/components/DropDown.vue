<template>
  <select v-model="selected" v-bind:class="{'red': selected == 0 || selected == 1 || selected == 2 ,  'yellow': selected == 3, 'green': selected == 4 || selected == 5}">  
    <option>0</option> 
    <option>1</option> 
    <option>2</option>  
    <option>3</option> 
    <option>4</option>  
    <option>5</option>
  </select>
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
      selected: ""
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

  .green { 
      background-color: lightgreen; 
      width: 35px;
      height: 30px;
      font-size: 15pt;
    } 

  .yellow { 
      background-color: #ffe600; 
      width: 35px;
      height: 30px;
      font-size: 15pt;
      } 

  .red { 
      background-color: lightcoral; 
      width: 35px;
      height: 30px;
      font-size: 15pt;
      } 

</style>
