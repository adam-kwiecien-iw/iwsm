<template>


  <div class="search">
      <div class="refresh">
        <input v-model="searchTerm" :placeholder="placeholder"/> <button @click="search">Search</button>
      </div>
    <button @click="reset">Refresh List</button> 
  </div>
   <table class="table table-hover table-bordered" id="example">
    <thead>
      <tr>                   
        <td v-for="skill in skills" :key="skill.id">
          <h6 v-if="skill.id==1">Employees</h6> 
          <h6 v-else>{{skill.skillName}}</h6>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{employee.firstName + " " + employee.lastName}}</td>

        <td v-for="index in skills.length - 1" :key="index">
        
        <drop-down></drop-down>
        
        </td>
          <div v-if="skills.length - 1 < 4">
            <td v-for="index in 50" :key="index">
            </td>
          </div>
      </tr>
       
    </tbody>
  </table>
   
</template>
 
<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';
import DropDown from './DropDown.vue';
export default {
  components: { DropDown },
  
  mounted(){
    axios
    .get("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/")
    .then((res)=>
    {
      this.employees = res.data;
      $('#example').DataTable();
    })
    axios
    .get("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills/")
    .then((res)=>
    {
      this.skills = res.data;
      $('#example').DataTable();
    })
  },
  methods: {

    search(){

        for (let i = 0; i < this.employees.length; i++) {
          var exist = Object.values(this.employees[i]).includes(this.searchTerm);
          if(exist){
            console.log(this.employees[i]);
            this.searched.push(this.employees[i]);
          }
        }
        if(this.searched.length == 0){
        
        this.searchedSkills.push({skillName: "Employees"})
        for (let i = 0; i < this.skills.length; i++) {
          var contains = Object.values(this.skills[i]).includes(this.searchTerm);
          if(contains){
            console.log(this.skills[i]);
            this.searchedSkills.push(this.skills[i]);
            
            this.skills = this.searchedSkills

          }
        }
        }else {
          this.employees = this.searched   
        }
        this.$forceUpdate();
    },
    reset(){
      window.location.reload();
    }
  },
  data: function() {
        return {
            employees:[],
            skills:[],
            searched:[],
            searchedSkills: [],
            searchTerm: "",
            placeholder: "Case-sensitive search"
        }
    },
}
</script>

<style scoped>

.search{
  text-align: left;
  padding-bottom: 50px;
  margin-top: -85px;
  padding-top: -130px;
  padding-left: 10px;
}
.refresh{
  padding-bottom: 20px;
}

</style>