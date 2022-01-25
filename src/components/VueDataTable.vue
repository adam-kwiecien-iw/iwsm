<template>
<div class="tb">
  <div class="search">
    <div class="input-group mb-3">
      <input  v-model="searchTerm" type="text" class="form-control" :placeholder="placeholder" aria-label="Search" aria-describedby="button-addon2">
      <button  @click="search" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
  </div>

  <div class="refresh" align="right">
    <!-- <button @click="reset" class="btn btn-primary"><span class="glyphicon glyphicon-refresh">Refresh</span></button> -->
    <svg @click="reset" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
    </svg>
  </div>

   <table class="table table-striped table-hover" id="example">
    <thead class="table-light">
      <tr>                   
        <td v-for="skill in skills" :key="skill.id">
          <h6 v-if="skill.id==1">Employees</h6> 
          <skill-button v-else :skillId="skill.id" :skillName="skill.skillName">{{skill.skillName}}</skill-button>
        </td>
      </tr>
    </thead>
    <tbody>
       
      <tr v-for="emp in calcEmps" :key="emp.id">

          <employee-button :employeeId="emp.id" :fName="emp.firstName" :lName="emp.lastName" :job="emp.jobTitle" :email="emp.email">
          {{emp.firstName + " " + emp.lastName}}
        </employee-button>
            
        <td v-for="item in getAll" :key="item.employee.id">

          <div v-if="item.employee.id == emp.id">
            
            <drop-down :propSkill="item.skill.id-1" :propEmp="item.employee.id" :propLev="item.level"></drop-down>
            
          </div>
        </td>
      </tr>  
    </tbody>
  </table>
</div>
   
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
import SkillButton from './SkillButton.vue';
import EmployeeButton from './EmployeeButton.vue';

export default {
  components: { DropDown, SkillButton, EmployeeButton },
  
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
    axios
    .get("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/skills/")
    .then((res)=>
    {
      this.getAll = res.data;
      $('#example').DataTable();
      for (let i = 0; i < this.getAll.length -1; i++) {

          var doesExist = this.calcEmps.some(e => e.id === this.getAll[i].employee.id)

          if(!doesExist){
            this.calcEmps.push(this.getAll[i].employee)
          }
      }
      console.log(this.calcEmps)
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
            calcEmps: [],
            skills:[],
            searched:[],
            searchedSkills: [],
            getAll: [],
            current:{},
            searchTerm: "",
            placeholder: "Case-sensitive search"
        }
    },
}
</script>

<style scoped>

.search{
  text-align: left;
  width: 80%;
  margin: auto;
}
.refresh{
  padding:10px 60px;
}
.refresh :hover{
  color: #B92222;
  width:"32"; 
  height:"32";
}
.table{
  margin: auto;
  width: 95%;
}
</style>