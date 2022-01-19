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
    <!-- <table-lite
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    :messages="table.messages"
    @do-search="doSearch">
    </table-lite> -->

  </div>
</template>



<script>
import { defineComponent, reactive, ref, computed, watch } from "vue";
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


        // Simple POST request with a JSON body using axios
        // const skill = { skillName: "addVue" };
        // axios.post("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills/", skill)
        //   .then(response => console.log(response.data.id));

        const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ skillName: this.skillAdd })
              };
              fetch("https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills", requestOptions)
                .then(response => response.json())
                .then(data => ( console.log(data.id)));


    },
  },

 setup() {
   
    const searchTerm = ref("");
      
    const data = reactive({
      rows: [],
    });

    const myRequest = async (keyword, offst, limit) => {
      const testData = [];
      offst = offst + 1;
      for (let i = offst; i < limit; i++) {
        testData.push({
          id: i,
          employeeName: "Employee " + i,
        });
      }
      return await new Promise((resolve, reject) => {
        try {
          table.isLoading = true;

          setTimeout(() => {
            table.isLoading = false;
            let newData = testData.filter(
              (x) =>
                x.employeeName.toLowerCase().includes(keyword.toLowerCase())
            );
            data.rows = newData;
            resolve(newData);
          }, 2000);
        } catch (error) {
          console.log("Fetch error", error);
          reject();
        }
      });
    };
      const table = reactive({
       isLoading: false,
        rows: computed(() => {
          return data.rows;
        }),
        columns: [
          {
            label: "Employee",
            field: "employeeName",
            width: "2%",
            isKey: true,
          },
          {
            label: "Java",
            field: "java",
            width: "1%",
            display: function (row) {
             return (
                row.java
              );
            },
          },
          {
            label: "C",
            field: "c",
            width: "1%",
            display: function () {
             return (
              '<select v-model="selected">  <option>0</option> <option>1</option> <option>2</option>  <option>3</option> <option>4</option>  <option>5</option></select>'
              );
            },
          },
          {
            label: "C++",
            field: "c++",
            width: "1%",
            display: function () {
             return (
              '<select v-model="selected">  <option>0</option> <option>1</option> <option>2</option>  <option>3</option> <option>4</option>  <option>5</option></select>'
              );
            },
          },
          {
            label: "C#",
            field: "c#",
            width: "1%",
            display: function () {
             return (
              '<select v-model="selected">  <option>0</option> <option>1</option> <option>2</option>  <option>3</option> <option>4</option>  <option>5</option></select>'
              );
            },
          },
          {
            label: "Eclipse",
            field: "eclipse",
            width: "1%",
            display: function () {
             return (
              '<select v-model="selected">  <option>0</option> <option>1</option> <option>2</option>  <option>3</option> <option>4</option>  <option>5</option></select>'
              );
            },
          },
          {
            label: "Intellij",
            field: "intellij",
            width: "1%",
            display: function () {
             return (
              '<select v-model="selected"> <option>0</option> <option>1</option> <option>2</option>  <option>3</option> <option>4</option>  <option>5</option></select>'
              );
            },
          },
        ],
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "     Go to page:",
        noDataAvailable: "No data",
      },
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
    });

    watch(
      () => searchTerm.value,
      (val) => {
        doSearch(val, 0, 50);
      }
    );

    const doSearch = (val, offset, limit) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isLoading = false;
        table.isReSearch = offset == undefined ? true : false;
        if (offset >= 10 || limit >= 50) {
          limit = 50;
        }
        myRequest(val, offset, limit)
        table.totalRecordCount = 20;
      }, 600);
    };
 
    doSearch("", 0, 50);

    return {
      searchTerm,
      table,
      doSearch,
    };
      
 },
})
</script>
<style scoped>

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  color: #fff;
  background-color: #b92425;
  border-color: black;
}

::v-deep(.vtl-table tr) {
  /* background-color: lightcoral; */
  /* background-color: lightgreen; */
  /* background-color: rgba(180, 180, 50, 0.664); */
}

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