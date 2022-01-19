<template>

    <button v-if="edit" v-on:click="del">Delete</button>
    <input v-if="edit" type="text" class="txt" :placeholder = "name" v-model="sName">
    <button v-if="edit" v-on:click="edit = !edit">Close</button>
    <button v-if="edit" v-on:click="update">Save</button>
    <h6 v-else v-on:click="edit = !edit">
        {{skillName}}
    </h6>

</template>

<script>
export default {

  props: ['skillId', 'skillName'],

data() {
    return {
        id: this.skillId,
        name: this.skillName,
        edit: false,
        sName: "",
    }
},

  methods: {
    update() {
        
      const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  id: this.skillId,
                  skillName: this.skillName
               })
            };
            var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills/" + this.skillId
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));

              this.edit = !this.edit
              //window.location.reload();
      },

    del() {
        
      const requestOptions = {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  id: this.skillId,
                  skillName: this.skillName
               })
            };
            var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills/" + this.skillId
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));

              this.edit = !this.edit
              //window.location.reload();
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
