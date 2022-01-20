<template>

  <div class="home">
    <div class="l-out">
      <h3><router-link class="r-link" to="/login">Log Out</router-link></h3> 
    </div>


    <div style="text-align: centre">
      <p>Add Skill:</p><input v-model="skillAdd" /> <button @click="post">Add</button>
    </div>
    <br>
    <vue-data-table></vue-data-table>


  </div>
</template>



<script>
import { defineComponent, ref } from "vue";
// import TableLite from 'vue3-table-lite'
import VueDataTable from '../components/VueDataTable'

 //import getEmployeeList from '../api/employee.js'
// import the JS file

   // list = getEmployeeList();
  // console.log("COMPLETING");
  // console.log(list);
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

 
//import axios from 'axios';


export default defineComponent({

components: { 
  //TableLite,
  VueDataTable
},

  data(){
    return{
      skillAdd: "",
    }
  },

 methods: {
    post() {

      const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ skillName: this.skillAdd })
            };
            fetch("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/skills", requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));
              setTimeout(() => {  
                window.location.reload(); 
              }, 3000);
    },
  },

 setup() {
   
    const searchTerm = ref("");
      
 
    return {
      searchTerm,
    };
      
 },
})
</script>
<style scoped>

.skills {
  margin-left: 35px;
  text-align: left;
}
.r-link{
    font-size: 13pt;
}
.l-out{
  text-align: right;
  margin-right: 35px;
  margin-bottom: -42px;
  color: blue;
}
</style>