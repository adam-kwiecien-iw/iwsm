<template>
<!-- this is a component that the admin would be able to use to update or delete an employee -->
  <div v-if="edit" class="padding">
     <div style="margin-bottom: 10px">
        <button v-if="edit" v-on:click="del">Delete</button>
      </div>
    <input v-if="edit" type="text" class="txt" :placeholder = "first" v-model="eFirst">
    <input v-if="edit" type="text" class="txt" :placeholder = "last" v-model="eLast">
      <div style="margin-top: 10px">
        <button v-if="edit" v-on:click="edit = !edit">Close</button>
        <button v-if="edit" v-on:click="update">Save</button>
      </div>
    </div>
    <h6 v-else v-on:click="edit = !edit">
        {{first + " " + last}}
    </h6>

</template>

<script>
export default {

//parse in employee details
  props: ['employeeId', 'fName', 'lName', 'job', 'email'],

data() {
    return {
        id: this.employeeId,
        first: this.fName,
        last: this.lName,
        jobTitle: this.job,
        mail: this.email,
        edit: false,
        eFirst: "",
        eLast: ""
    }
},

  methods: {
    update() {
        //method to updayet an employees name
      const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  id: this.id,
                  firstName: this.eFirst,
                  lastName: this.eLast,
                  jobTitle: this.job,
                  email: this.email
               })
            };
            var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/" + this.id
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));

              this.edit = !this.edit
              setTimeout(() => {  
                window.location.reload(); 
                }, 4000);
      },

    del() {
        //method to delete an employee
      const requestOptions = {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  id: this.id,
                  firstName: this.first,
                  lastName: this.last,
                  jobTitle: this.job,
                  email: this.email
               })
            };
            var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/" + this.id
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));

              //hide update and delete options
              this.edit = !this.edit
              //reload the paget to dispaly delete
              setTimeout(() => {  
                window.location.reload(); 
                }, 4000);
      }
    }
}
</script>
<style scoped>
  .padding { 
      padding: 10px;
    } 
</style>
